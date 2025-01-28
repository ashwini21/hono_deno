import { defineConfig } from "drizzle-kit";
import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';
// Load environment variables
const env = config();

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});