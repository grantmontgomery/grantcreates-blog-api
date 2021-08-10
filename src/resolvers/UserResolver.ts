import {
  Arg,
  Int,
  Query,
  FieldResolver,
  Resolver,
  Mutation,
} from "type-graphql";
import { User } from "../types";
import { UserEntity } from "../entity/UserEntity";
import { getRepository } from "typeorm";

@Resolver((of) => User)
export class UserResolver {
  @Query(() => User)
  async findOneById(
    @Arg("id", { nullable: false }) id: number
  ): Promise<UserEntity> {
    try {
      const userRepository = getRepository(UserEntity);

      const user = await userRepository.findOne(id);

      return user;
    } catch (error) {
      return error;
    }
  }
  // @Mutation((of) => User)
  // async createNewUser(
  //   @Arg("user", { nullable: false }) user: User
  // ): Promise<UserEntity> {
  //   try {
  //     const userRepository = getRepository(UserEntity);

  //     const newUser = await userRepository.save(user);

  //     return newUser;
  //   } catch (error) {
  //     return error;
  //   }
  // }
}
