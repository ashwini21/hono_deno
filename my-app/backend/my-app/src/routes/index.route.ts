import { createRouter } from "../lib/create-app.ts";
import { createRoute } from 'https://esm.sh/@hono/zod-openapi@latest';
import { openAPIJsonContent,openAPICreateMessageObjectSchema } from "../utils/commonFunction.ts";
import { CONSTANTS } from "../utils/helpers/constant.ts";
const index = createRouter()
.openapi(createRoute({
  tags:["Index"], //it defines routing tag
  method:"get",
  path: "/api",
  responses:{
    [CONSTANTS.STATUS_CODES.OK]: openAPIJsonContent(
      openAPICreateMessageObjectSchema("Tasks API"),
      "MercyHealth API Index",
    ),
  },
}),
(c)=>{
  return c.json({
    message: "MercyHealth APIs",
  }, CONSTANTS.STATUS_CODES.OK);
}
);

export default index;

