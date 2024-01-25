import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";
import { Users } from "./src/collections/Users";
import dotenv from "dotenv";
dotenv.config();

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "", // TODO: CHECK LATER hnstly duno what td wth ths || "",
  collections: [Users],
  routes: {
    admin: "/sell",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "Admin",
      favicon: "/icon.ico",
      ogImage: "/images/logo.png",
    },
  },
  rateLimit: {
    max: 2000, // TODO: temporal
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
