import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../database/schema/task-schema.ts";
import pg from "pg";
import { eq } from "drizzle-orm/expressions";
import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';
// Load environment variables
const env = config();

// Use pg driver.
const { Pool } = pg;

// Instantiate Drizzle client with pg driver and schema.
export const db = drizzle({
  client: new Pool({
    connectionString: env.DATABASE_URL
  }),
  schema
});