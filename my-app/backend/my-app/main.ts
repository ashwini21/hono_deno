import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';
import app from './app.ts'
// // Load environment variables
const env = config();
const port = env.PORT;

//start deno server
Deno.serve(
    {port: port }, 
    app.fetch
);

