import { Field, InputType } from "type-graphql";
@InputType()
export class UserIdInput {
  @Field()
  id!: number;
}
