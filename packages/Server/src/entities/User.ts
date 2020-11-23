import { ObjectType, Field, ID } from "type-graphql";
import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field(() => ID)
  @PrimaryGeneratedColumn({type:"int"})
  id!: number;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column({ type: "text" })
  username!: string;

  @Column()
  password: string;
}
