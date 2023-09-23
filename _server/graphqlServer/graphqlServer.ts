import fs from "fs";
import path from "path";
import express from "express";
import { express as voyagerMiddleware } from "graphql-voyager/middleware";
import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { mocks } from "./mocks";

const app = express();

app.use(
  "/graphql",
  createYoga({
    schema: addMocksToSchema({
      mocks,
      schema: makeExecutableSchema({
        typeDefs: fs.readFileSync(
          path.join(__dirname, "./schema.graphql"),
          "utf-8",
        ),
      }),
    }),
  }),
);

app.use("/voyager", voyagerMiddleware({ endpointUrl: "/graphql" }));

app.listen(4000, () => {
  console.log("🚀 Server ready at http://localhost:4000/graphql");
  console.log("🚀 Server ready at http://localhost:4000/voyager");
});
