import type { RouteHandler } from 'https://esm.sh/@hono/zod-openapi@latest';
import type { ListTaskRoute, CreateTask } from '../routes/tasks/tasks.routes.ts';
import { tasks } from '../database/schema/task-schema.ts';
import { db } from '../database/index.ts';
import { CONSTANTS } from '../utils/helpers/constant.ts';
import { badRequestResponse, internalServerErrorResponse, successResponse } from '../utils/commonFunction.ts';

export const listTask: RouteHandler<ListTaskRoute> = async (c) => {
    try{
        const tasks = await db.query.tasks.findMany();
        return c.json(successResponse(tasks));
    }
    catch(err){
        console.error("Error listing tasks:", err);
        if(err) return c.json(internalServerErrorResponse(err));
    }
};

export const createTask:RouteHandler<CreateTask> = async (c) => {
    try{
        // await c.req.json();
        const task = await c.req.valid("json");
        if (!task || typeof task !== "object") {
            throw new Error(CONSTANTS.ERROR.INVALID_REQUEST_DATA);
          }
        const resultInsert = await db.insert(tasks).values(task).returning()
        return c.json(successResponse(resultInsert))
    }
    catch (err){
        console.error("Error listing tasks:", err);
        if(err===CONSTANTS.ERROR.INVALID_REQUEST_DATA) return c.json(badRequestResponse(err));
        else return c.json(internalServerErrorResponse(err))
    }
}


