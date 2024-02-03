import payload, { Payload } from "payload";
import type { InitOptions } from "payload/config";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

console.log("SMTP Configuration:", {
  host: "smtp.resend.com",
  port: 465,
  secure: true,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

const transporter = createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

type Args = {
  initOptions?: Partial<InitOptions>;
};

export const getPayloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  console.log("Starting getPayloadClient");
  if (!process.env.PAYLOAD_SECRET || !process.env.RESEND_API_KEY) {
    throw new Error("PAYLOAD_SECRET or RESEND_API_KEY is not set");
  }

  if (cached.client) {
    console.log("Using cached payload client");
    return cached.client;
  } else {
    console.log("Started getPayloadClient");
    cached.promise = payload.init({
      email: {
        transport: transporter,
        fromAddress: "onboarding@resend.dev",
        fromName: "H&M",
      },
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
    console.log("Finished getPayloadClient");
  }

  try {
    console.log("Before payload.init");
    cached.client = await cached.promise;
    console.log("After payload.init");
  } catch (e: unknown) {
    console.error("Error in getPayloadClient:", e);
    cached.promise = null;
    throw e;
  }

  return cached.client;
};
