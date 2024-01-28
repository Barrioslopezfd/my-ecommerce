import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "../trpc";
import { inferAsyncReturnType } from "@trpc/server";

const app = express();
const PORT = process.env.PORT || 3000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});
export type ExpressContext = inferAsyncReturnType<typeof createContext>;

const start = async () => {
  try {
    const payload = await getPayloadClient({
      initOptions: {
        express: app,
        onInit: async (cms) => {
          cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
        },
      },
    });

    app.use(
      "/api/trpc",
      trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
      }),
    );

    app.use((req, res) => nextHandler(req, res));

    await nextApp.prepare();

    payload.logger.info("Next.js ready");

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js app URL: ${process.env.NEXT_PUBLIC_SERVER_URL || `http://localhost:${PORT}`}`,
      );
    });
  } catch (error) {
    console.error("Error during server startup:", error);
    process.exit(1);
  }
};

start();
