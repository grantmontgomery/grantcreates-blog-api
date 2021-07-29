import express from "express";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";

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

    server.applyMiddleware({ app });

    app.listen({ port: 3001 }, () => {
      console.log("Server ready at 3001");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
