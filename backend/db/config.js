import * as dotenv from "dotenv";
import { drizzle } from 'drizzle-orm/libsql';
dotenv.config();

export const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  }
});

console.log("hello worl");