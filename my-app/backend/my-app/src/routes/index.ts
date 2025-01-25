import { Hono } from 'hono';
import {
  internalServerErrorResponse,
  notFoundResponse,
} from './../utils/commonFunction.ts';

const router = new Hono();

router.get('/module1', (c) => {
  return c.text('Hello from this module!');
});

router.get('/error', () => {
  throw new Error('This is a simulated error!');
});

router.onError(internalServerErrorResponse);

router.notFound(notFoundResponse);

export default router;
