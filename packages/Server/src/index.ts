import 'dotenv/config';
import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';

import { User } from './entities/User';
import { AddUser } from './mutations/user/addUser';
import { GetUser } from './query/user/getUser';


dotenv.config();
const  {env} = process;

const main = async () => {
  const connection= await createConnection({
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migrations",
    },
    database: String(env.DB_NAME),
    entities: [User],
    host: "localhost",
    logging: true,
    // migrations: [path.join(__dirname, "./migrations/*")],
    password: String(env.DB_PASSWORD),
    port: Number(env.PG_PORT),
    synchronize: true,
    type: "postgres",
    username: "postgres",
  });
  // Enable it when you want to run migrations
  // await connection.runMigrations();


  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(
    cors({
      credentials: true,
      origin: String(env.ORIGIN_URL),
    })
  );

  app.use(
    session({
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        sameSite: "lax", // csrf
        secure: true, // cookie only works in https
      },
      name: env.COOKIE_NAME,
      resave: false,
      saveUninitialized: false,
      secret: String(env.COOKIE_SECRET),
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
    })
  );

  const apolloServer = new ApolloServer({
    context: ({ req, res }) => ({
      redis,
      req,
      res,
    }),
    schema: await buildSchema({
      emitSchemaFile: {
        commentDescriptions: true,
        path: `${__dirname  }/generated/schema.gql`,
        // by default the printed schema is sorted alphabetically
      },
      resolvers: [
      GetUser,AddUser
      ],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(env.PORT, () => {
    console.info(`🚀 Server started on http://localhost:${String(env.PORT)}/graphql`);
  });
}

main().catch((error) => {
  console.error(error);
});