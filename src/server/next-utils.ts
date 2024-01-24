import next from "next";

const dev = process.env.NODE_ENV !== "production";
const PORT = Number(process.env.PORT) || 3000;

export const nextApp = next({
  dev: dev,
  port: PORT,
});

export const nextHandler = nextApp.getRequestHandler();
