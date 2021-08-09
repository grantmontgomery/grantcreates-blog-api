import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";
import { buildSchema } from "type-graphql";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const startServer = async () => {
  try {
    const app = express();
    app.use(cors());
    app.use(express.json());
    const schema = await buildSchema({
      resolvers: [
        __dirname + "/**/*.resolvers.ts",
        __dirname + "/resolvers/**/*.ts",
        __dirname + "/resolvers/**/*.js",
      ],
      emitSchemaFile: true,
    });

    const server = new ApolloServer({ schema });

    await server.start();
    await createConnection();

    server.applyMiddleware({ app });

    app.listen({ port: 3001 }, () => {
      console.log("Server ready at 3001");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
