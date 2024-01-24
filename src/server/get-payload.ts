import payload from "payload";
import type { InitOptions } from "payload/config";
import * as dotenv from "dotenv";
dotenv.config();

let cached = (global as any).payload;

const secret = process.env.PAYLOAD_SECRET!;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

type Args = {
  initOptions?: Partial<InitOptions>;
};

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  if (!secret) {
    throw new Error("PAYLOAD_SECRET is not set");
  }
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: secret,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (e: unknown) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
};
