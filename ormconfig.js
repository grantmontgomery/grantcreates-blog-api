require("dotenv").config();

module.exports = {
  type: "postgres",
  name: "default",
  host: process.env.DB_HOST,
  username: "postgres",
  password: process.env.DB_DEV_PASSWORD,
  database: "postgres",
  synchronize: process.env.NODE_ENV == "development" ? true : false,
  synchronize: true,
  entities: ["src/entity/**/*.ts"],
  cache: true,
  logging: true,
  extra: {
    socketPath: "/cloudsql/grantcreates-blog:us-west1:grantcreates-blog",
  },
};
