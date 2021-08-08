import "reflect-metadata";
import express from "express";
import { createConnection, getRepository } from "typeorm";
import cors from "cors";
import { UserResolver } from "./resolvers/UserResulver";
import { ApolloServer, gql } from "apollo-server-express";
import { buildSchema, emitSchemaDefinitionFileSync } from "type-graphql";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

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

    // const server = new ApolloServer({ schema });

    const server = new ApolloServer({ schema });

    await server.start();

    server.applyMiddleware({ app });

    const connection = await createConnection();

    console.log(connection);

    app.listen({ port: 3001 }, () => {
      console.log("Server ready at 3001");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
