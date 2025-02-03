import { createRouter } from "../../lib/create-app.ts"
import * as handlers from '../../handler/tasks.handler.ts'
import * as routes from './tasks.routes.ts'

const router = createRouter()
.openapi(routes.listTask, handlers.listTask)
.openapi(routes.createTask, handlers.createTask)
.openapi(routes.removeTask, handlers.removeTask)
.openapi(routes.patchTask, handlers.patchTask)

export default router;