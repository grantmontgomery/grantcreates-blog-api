import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { User } from "../entity/User";
require("dotenv").config();
export const db_connect = async () => {
  try {
    const userRepository = getRepository(User);

    const newUser: User = {
      first_name: "Grant",
      last_name: "Montgomery",
      username: "Grant",
    };
    return userRepository.create(newUser);
  } catch (error) {
    throw error;
  }
};
