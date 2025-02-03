import type { RouteHandler } from 'https://esm.sh/@hono/zod-openapi@latest';
import type { ListTaskRoute, CreateTask, RemoveTask, PatchTask } from '../routes/tasks/tasks.routes.ts';
import { tasks } from '../database/schema/task-schema.ts';
import { db } from '../database/index.ts';
import { CONSTANTS } from '../utils/helpers/constant.ts';
import { badRequestResponse, internalServerErrorResponse, notFoundResponse, successResponse } from '../utils/commonFunction.ts';
import { eq } from 'drizzle-orm';

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
        // const task = await c.req.json();
        const task = await c.req.valid("json");  //z
        if (!task || typeof task !== "object") {
            throw new Error(CONSTANTS.ERROR.INVALID_REQUEST_DATA);
          }
        const [resultInsert] = await db.insert(tasks).values(task).returning()
        return c.json(successResponse(resultInsert))
    }
    catch (err){
        if(err===CONSTANTS.ERROR.INVALID_REQUEST_DATA) return c.json(badRequestResponse(err));
        else return c.json(internalServerErrorResponse(err))
    }
}

export const removeTask: RouteHandler<RemoveTask> = async (c) => {
    try{
        const { id } = c.req.valid("param");
        const result = await db.delete(tasks)
        .where(eq(tasks.id, id))
        .returning();
        if (!result) {
            return c.json(notFoundResponse(CONSTANTS.ERROR.NOT_FOUND_ERROR_MESSAGE))
        }
        return c.body(null, CONSTANTS.STATUS_CODES.NO_CONTENT)
    }
    catch(err){
        if (err) return c.json(internalServerErrorResponse(err))
    }
}

export const patchTask: RouteHandler<PatchTask> = async (c) => {
    try{
    const updates = await c.req.json();
    const { id } = c.req.valid("param");
  // Update the task in the database
  const updatedTask = await db.update(tasks)
  .set(updates)
  .where(eq(tasks.id, id))
  .returning();

if (updatedTask.length === 0) {
  return c.json(notFoundResponse(CONSTANTS.ERROR.NOT_FOUND_ERROR_MESSAGE), CONSTANTS.STATUS_CODES.NOT_FOUND);
}
  return c.json(successResponse(updatedTask[0]));
}
catch (err) {
    // return c.json({ success: false, message: "Invalid request data" }, 400);
    return c.json(badRequestResponse, CONSTANTS.STATUS_CODES.BAD_REQUEST);
  }}




