import "reflect-metadata";
import express from "express";
import { createConnection, getRepository } from "typeorm";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";
import { User } from "./entity/User";

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
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    await createConnection();

    const userRepository = getRepository(User, "default");

    const result = await userRepository.findOne(1);

    console.log(result);
    app.listen({ port: 3001 }, () => {
      console.log("Server ready at 3001");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
