import { createRouter } from "../lib/create-app.ts";
import { createRoute, z } from 'https://esm.sh/@hono/zod-openapi@latest';

const index = createRouter()
.openapi(createRoute({
  method:"get",
  path: "/",
  responses:{
    200: {
      content:{
        "application/json" : {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: "Task API Index",
    },
  },
}),
(c)=>{
  return c.json({
    message: "Task API",
  });
}
);

export default index;
