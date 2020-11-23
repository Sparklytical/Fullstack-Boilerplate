import { Request, Response } from "express";
import { Redis } from "ioredis";



type SessionData = {
  userId: number;
}

export type Context = {
  req: Request & { session: SessionData };
  res: Response;
  redis: Redis;
};
