require("dotenv").config();

// module.exports = {
//   type: "postgres",
//   name: "default",
//   host: "localhost",
//   username: "postgres",
//   password:
//     process.env.NODE_ENV === "production"
//       ? process.env.DB_PROD_PASSWORD
//       : process.env.DB_DEV_PASSWORD,
//   database: "",
//   synchronize: true,
//   entities: ["src/entity/**/*.ts"],
//   logging: true,
//   extra: {
//     socketPath: "/cloudsql/grantcreates-blog:us-west1:grantcreates-blog",
//   },
// };

console.log(process.env.NODE_ENV);
