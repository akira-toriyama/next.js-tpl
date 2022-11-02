import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
dotenv.config();

console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]);
console.log("SCHEMA_DOWNLOAD_URL", process.env["SCHEMA_DOWNLOAD_URL"]?.length);
console.log("SCHEMA_DOWNLOAD_URL", typeof process.env["SCHEMA_DOWNLOAD_URL"]);

const config: CodegenConfig = {
  schema: process.env["SCHEMA_DOWNLOAD_URL"]!,
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
  generates: {
    "src/infra/graphql/types.ts": {
      plugins: ["typescript"],
      config: {
        enumsAsConst: true,
        useTypeImports: true,
        immutableTypes: true,
        skipTypename: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: false,
        },
      },
    },
    "": {
      documents: ["**/*.gql.ts"],
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "src/infra/graphql/types.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
      config: {
        enumsAsConst: true,
        useTypeImports: true,
        immutableTypes: true,
        skipTypename: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: false,
        },
      },
    },
  },
};

export default config;
