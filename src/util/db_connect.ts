import "reflect-metadata";
import { createConnection } from "typeorm";
require("dotenv").config();
export const db_connect = async () => {
  try {
    const connection = await createConnection({
      type: "postgres",
      name: "default",
      host: process.env.DB_HOST,
      username: "postgres",
      password: process.env.DB_DEV_PASSWORD,
      database: "postgres",
      synchronize: true,
      entities: ["src/entity/**/*.ts"],
      logging: true,
      extra: {
        socketPath: "/cloudsql/grantcreates-blog:us-west1:grantcreates-blog",
      },
    });

    return connection;
  } catch (error) {
    throw error;
  }
};
