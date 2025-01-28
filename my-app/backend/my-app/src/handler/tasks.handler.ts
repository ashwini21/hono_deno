import type { RouteHandler } from 'https://esm.sh/@hono/zod-openapi@latest';
import type { ListTaskRoute, CreateTask } from '../routes/tasks/tasks.routes.ts';
import { tasks } from '../database/schema/task-schema.ts';
import { db } from '../database/index.ts';
import { CONSTANTS } from '../utils/helpers/constant.ts';

export const listTask: RouteHandler<ListTaskRoute> = async (c) => {
    const tasks = await db.query.tasks.findMany();
    console.log("list tasks",tasks);
    return c.json(tasks, CONSTANTS.STATUS_CODES.OK)
};

export const createTask:RouteHandler<CreateTask> = async (c) => {
    const task = c.req.valid("json");
    const resultInsert = await db.insert(tasks).values(task).returning()
    console.log(resultInsert)
    return c.json(resultInsert, CONSTANTS.STATUS_CODES.OK)
}
