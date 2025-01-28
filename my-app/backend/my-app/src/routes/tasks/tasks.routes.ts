import { createRoute, z } from 'https://esm.sh/@hono/zod-openapi@latest';
import { openAPIJsonContent, jsonContentRequired } from "../../utils/commonFunction.ts";
import { CONSTANTS } from '../../utils/helpers/constant.ts'
import { taskInsertSchema,taskSelectSchema } from '../../database/schema/task-schema.ts';
const tags = ["Tasks"];

export const listTask = createRoute({
    path: "/tasks",
    method: "get",
    tags,
    responses: {
      [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
        z.array(z.object({
            name:z.string(),
            done:z.boolean(),
        })),
        "The list of tasks",
      ),
      [CONSTANTS.STATUS_CODES.BAD_REQUEST]: openAPIJsonContent(
        z.object({ error: z.string() }),
        "Invalid request"
    )
    },
  });

  export const createTask = createRoute({
    path: "/create-task",
    method: "post",
    tags,
    request: {
        body: jsonContentRequired(taskInsertSchema, "Create Task")
    },
    responses: {
        200: openAPIJsonContent(
            taskSelectSchema,
            "list of tasks"
        )
    }
})

  export type ListTaskRoute = typeof listTask;
  export type CreateTask = typeof createTask