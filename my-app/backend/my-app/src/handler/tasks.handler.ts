import type { RouteHandler } from 'https://esm.sh/@hono/zod-openapi@latest';
import type { ListRoute } from '../routes/tasks/tasks.routes.ts';

export const list: RouteHandler<ListRoute> = (c) => {
    return c.json([{
        name: 'Learn Hono',
        done: true
    }]);
};