import pino from 'https://esm.sh/pino@8.15.0';
import { MiddlewareHandler } from 'https://deno.land/x/hono@v3.3.2/mod.ts';
import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';

// Load environment variables
const env = config();

// Create a Pino logger instance
const logger = pino({
  level: env.LOG_LEVEL,
});

// Logger middleware for Hono
export const pinoLogger: MiddlewareHandler = async (c, next) => {
  const requestId = crypto.randomUUID(); // Unique ID for each request
  const startTime = performance.now();

  // Log the incoming request
  logger.info({
    requestId,
    method: c.req.method,
    url: c.req.url,
    message: `Incoming request: ${c.req.method} ${c.req.url}`,
  });

  await next(); // Proceed to the next middleware

  const duration = performance.now() - startTime;

  // Log the response details
  logger.info({
    requestId,
    status: c.res.status,
    duration: `${duration.toFixed(2)}ms`,
    message:
      `Request processed: ${c.req.method} ${c.req.url} - ${c.res.status} - ${
        duration.toFixed(2)
      }ms`,
  });
};
