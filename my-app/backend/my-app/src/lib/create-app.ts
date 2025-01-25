// import { Hono } from 'hono';
import { OpenAPIHono } from 'https://esm.sh/@hono/zod-openapi@latest';
import { pinoLogger } from '../middleware/pino-logger.ts';
import {
    internalServerErrorResponse,
    notFoundResponse,
  } from './../utils/commonFunction.ts';

export function createRouter(){
    return new OpenAPIHono({ 
        strict: false,
        defaultHook: (result, c) => {
            if (!result.success) {
              return c.json(
                {
                  ok: false,
                  errors: formatZodErrors(result),
                  source: 'custom_error_handler',
                },
                422
              )
            }
          },
     });
}

export default function createApp(){
    const app = createRouter();
    app.use('*', pinoLogger);
    app.onError(internalServerErrorResponse);
    app.notFound(notFoundResponse);
    return app;
}
