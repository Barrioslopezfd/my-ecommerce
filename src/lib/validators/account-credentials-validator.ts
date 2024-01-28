import z from "zod";

export const credentialsValidator = z.object({
  email: z.string().email({
    message: "Invalid email format. Use you@example.com as template",
  }),

  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export type credentials = z.infer<typeof credentialsValidator>;
