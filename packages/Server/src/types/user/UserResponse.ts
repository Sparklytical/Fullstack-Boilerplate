import { Field, ObjectType } from "type-graphql";

import { User } from "../../entities/User";

import { UserError } from ".";



@ObjectType()
export class UserResponse {
  @Field(() => [UserError], { nullable: true })
  errors?: UserError[];

  @Field(() => User, { nullable: true })
  user?: User;
}
