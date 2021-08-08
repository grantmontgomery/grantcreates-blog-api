import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
export class Article {
  @Field((type) => ID)
  id: number;
  @Field()
  title: string;
  @Field()
  author: string;
  @Field()
  user_id: number;
  @Field()
  date_created: Date;
  @Field()
  date_updated: Date;
  @Field()
  text: string;
  @Field()
  listed: boolean;
}
