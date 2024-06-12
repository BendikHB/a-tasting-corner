import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "if36oaxd",

  dataset: "production",

  title: "A tasting corner",

  apiVersion: "2024-06-12",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});

export default config;
