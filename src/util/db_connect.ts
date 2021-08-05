import "reflect-metadata";
import { createConnection } from "typeorm";

const db_connect = async () => {
  try {
    const connection = createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "admin",
      database: "test",
      entities: [],
      synchronize: true,
      logging: false,
    });

    return connection;
  } catch (error) {
    throw error;
  }
};
