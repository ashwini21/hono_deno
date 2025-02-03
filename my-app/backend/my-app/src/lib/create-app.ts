import { OpenAPIHono } from 'https://esm.sh/@hono/zod-openapi@latest';
import { pinoLogger } from '../middleware/pino-logger.ts';
import { defaultHook } from "stoker/openapi";
import {
  badRequestResponse,
    internalServerErrorResponse,
    notFoundResponse,
  } from './../utils/commonFunction.ts';

export function createRouter(){
    return new OpenAPIHono({ 
        strict: false,
        defaultHook
     });
}

export default function createApp(){
    const app = createRouter();
    app.use('*', pinoLogger);
    app.notFound(notFoundResponse);
    app.onError(internalServerErrorResponse);
    app.use('*', async (c, next) => {
      try {
        await next();
      } catch (error) {
        return badRequestResponse;
      }
    });
    
    return app;
}
