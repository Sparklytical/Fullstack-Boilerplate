import { Arg, Int, Query, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';

import { User } from '../../entities/User';
import {  UserIdInput } from "../../types/user/UserIdInput";
import { UserResponse } from "../../types/user/UserResponse";


@Resolver(User)
export class GetUser {
  /**
   * ! @param Input: User ID
   * * @name: Get User ID
   * ? @type: Non Auth
   */

  @Query(() => UserResponse)
  async getUser(@Arg("options") options: UserIdInput): Promise<UserResponse> {
    let user;
    try {
      const result = await User.findOne(options.id)
      user = result;
    }
    catch(error) {
      return {
        errors: [
          {
            field: "username",
            message: `This error happened - ${String(error)}`,
          },
        ]
      }
    }
    return { user };
  }
}
