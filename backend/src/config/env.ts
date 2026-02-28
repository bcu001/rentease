import dotenv from "dotenv";
import z from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().transform(Number),
  DB_URI: z.string(),
  DB_NAME: z.string(),
  JWT_SECRET:z.string(),
  JWT_EXPIRE_IN:z.string(),
});

export const ENV = envSchema.parse(process.env);
