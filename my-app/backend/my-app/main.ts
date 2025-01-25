import { Hono } from 'hono';
import router from './src/routes/index.ts';
import { pinoLogger } from './src/middleware/pino-logger.ts';
import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';

// Load environment variables
const env = config();

const app = new Hono();
const port = env.PORT;

app.route('/api', router);

app.use('*', pinoLogger);

Deno.serve({ port: port }, app.fetch);
