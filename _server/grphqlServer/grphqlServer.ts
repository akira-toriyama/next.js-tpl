import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import fs from "fs";
import util from "util";
import http from "http";
import { express as voyagerMiddleware } from "graphql-voyager/middleware";

(async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = await util
    .promisify(fs.readFile)("./_server/grphqlServer/schema.graphql")
    .then((v) => v.toString())
    .then(
      (v) =>
        gql`
          ${v}
        `
    )
    .then(
      (v) =>
        new ApolloServer({
          typeDefs: v,
          mocks: true,
          plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
          ],
        })
    );
  const voyagerPath = "/voyager";
  app.use(
    voyagerPath,
    voyagerMiddleware({
      endpointUrl: `http://localhost:4000${server.graphqlPath}`,
    })
  );

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  console.log(`🚀 Server ready at http://localhost:4000${voyagerPath}`);
})();
