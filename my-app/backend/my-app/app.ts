import index from './src/routes/index.route.ts'; 
import createApp from './src/lib/create-app.ts';
import configuireOpenAPI from './src/config/open-api.config.ts';
import tasks from './src/routes/tasks/tasks.index.ts'
const app = createApp();

configuireOpenAPI(app);

const routes = [
    index,
    tasks
    
  ];
  routes.forEach((route) => {
    app.route("/",route)
  })

export default app;


