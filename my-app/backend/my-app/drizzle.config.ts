import { defineConfig } from "drizzle-kit";
// import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';
// Load environment variables
// const env = config();

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/database/schema/task-schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://postgres:Master@123@localhost:5432/mercyHealthLocal',
  },
});