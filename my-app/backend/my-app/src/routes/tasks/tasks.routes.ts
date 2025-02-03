import { createRoute, z } from 'https://esm.sh/@hono/zod-openapi@latest';
import { openAPIJsonContent } from "../../utils/commonFunction.ts";
import { CONSTANTS } from '../../utils/helpers/constant.ts'
import { taskInsertSchema,taskSelectSchema,idParamsSchema, taskPatchSchema} from '../../database/schema/task-schema.ts';
import { jsonContentRequired } from 'stoker/openapi/helpers';
import createErrorSchema from 'stoker/openapi/schemas/create-error-schema';

const tags = ["Tasks"];

export const listTask = createRoute({
    path: "/list-tasks",
    method: "get",
    tags,
    responses: {
      [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
        z.array(taskSelectSchema),
        "The list of tasks",
      ),
      [CONSTANTS.STATUS_CODES.BAD_REQUEST]: openAPIJsonContent(
        z.object({ error: z.string() }),
        "Invalid request"
    )
    },
  });

  export const createTask = createRoute({
    path: "/create-tasks",
    method: "post",
    tags,
    request: {

        body: jsonContentRequired(
        taskInsertSchema, "Create Task")
    },
    responses: {
      [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
          taskSelectSchema,
            "The created task",
        ),
      [CONSTANTS.STATUS_CODES.BAD_REQUEST]: openAPIJsonContent(
          z.object({ error: z.string() }),
          "Invalid request"
      )
    }
})

export const removeTask = createRoute({
  path: "/tasks/{id}",
  method: "delete",
  tags,
  request: {
      params: idParamsSchema
  },
  responses: {
    [CONSTANTS.STATUS_CODES.NO_CONTENT]: {
          description: "task deleted"
      },
      [CONSTANTS.STATUS_CODES.INVALID_DATA]: openAPIJsonContent(
          createErrorSchema(idParamsSchema),
          "Invalid id"
      ),
      [CONSTANTS.STATUS_CODES.NOT_FOUND]: openAPIJsonContent(
          z.object({
              message: z.string()
          }),
          "Task Not Found"
      )
  }
})

export const patchTask = createRoute({
  path: "/tasks/{id}",
  method: "patch",
  tags,
  request: {
      params: idParamsSchema,
      body: jsonContentRequired(
          taskPatchSchema,
          "Task to update"
      )
  },
  responses: {
      200: openAPIJsonContent(
          taskSelectSchema,
          "Updated task"
      ),
      422: openAPIJsonContent(
          createErrorSchema(idParamsSchema),
          "Invalid id"
      ),
      404: openAPIJsonContent(
          z.object({
              message: z.string()
          }),
          "Task Not Found"
      ),
      500: openAPIJsonContent(
        z.object({
          message: z.string()
        }),
    "internal server errorrr"
      )
  }
})

  export type ListTaskRoute = typeof listTask;
  export type CreateTask = typeof createTask;
  export type RemoveTask = typeof removeTask;
  export type PatchTask = typeof patchTask;
