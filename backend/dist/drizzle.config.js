import { config } from "dotenv";
import { defineConfig } from 'drizzle-kit';
config({ path: '.env' });
console.log;
export default defineConfig({
    schema: './Repo/database.ts',
    out: './migrations',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
    }
});
