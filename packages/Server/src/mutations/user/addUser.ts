import argon2 from 'argon2';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';

import { User } from '../../entities/User';
import { UsernamePasswordInput, UserResponse } from '../../types/user';
import { Context } from '../../utils';


@Resolver(User)
export class AddUser {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: Context
  ): Promise<UserResponse> {
    const hashedPassword = await argon2.hash(options.password);
    let user;

    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          email: options.email,
          password: hashedPassword,
          username: options.username,
        })
        .returning("*")
        .execute();
      const [data] = result.raw;
      user = data;
    } catch (error) {
      console.log(error);
      if (error.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "username already exists",
            },
          ],
        };
      }
    }
    req.session.userId = user.id;
    return { user };
  }
}