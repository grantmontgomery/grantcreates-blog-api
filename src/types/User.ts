import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;
  @Field()
  username: string;
  @Field()
  first_name: string;
  @Field()
  last_name: string;
  @Field((type) => [Int])
  article_ids: number[];
  @Field()
  date_created: Date;
}
