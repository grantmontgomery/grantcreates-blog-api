require("dotenv").config();

module.exports = {
  type: "postgres",
  name: "default",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "postgres",
  synchronize: process.env.NODE_ENV == "development" ? true : false,
  synchronize: true,
  entities: ["src/entity/**/*.ts"],
  logging: true,
  extra: {
    socketPath: process.env.DB_SOCKET,
  },
};
