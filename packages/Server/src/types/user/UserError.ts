import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class UserError {
  @Field()
  field: string;

  @Field()
  message: string;
}
