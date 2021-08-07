import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { User } from "../entity/User";
require("dotenv").config();
export const db_connect = async () => {
  try {
    const connection = await createConnection();

    return connection;
  } catch (error) {
    throw error;
  }
};
