import { createRoute, z } from 'https://esm.sh/@hono/zod-openapi@latest';
import { openAPIJsonContent, jsonContentRequired } from "../../utils/commonFunction.ts";
import { CONSTANTS } from '../../utils/helpers/constant.ts'
import { taskInsertSchema,taskSelectSchema } from '../../database/schema/task-schema.ts';
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
        body: jsonContentRequired(taskInsertSchema, "Create Task")
    },
    responses: {
      [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
          taskSelectSchema,
            "The created task",
        )
    }
})

// export const removeTask = createRoute({
//   tags: ["Users"],
//   path: "/users/{id}",
//   request: {
//       params: IdParamsSchema
//   },
//   method: "delete",
//   responses: {
//       204: {
//           description: "task deleted"
//       },
//       422: jsonContent(
//           createErrorSchema(IdParamsSchema),
//           "Invalid id"
//       ),
//       404: jsonContent(
//           z.object({
//               message: z.string()
//           }).openapi({
//               example: {
//                   message: "Not found"
//               }
//           }),
//           "User Not Found"
//       )
//   }
// })

  export type ListTaskRoute = typeof listTask;
  export type CreateTask = typeof createTask;
  // export type RemoveRoute = typeof removeTask;