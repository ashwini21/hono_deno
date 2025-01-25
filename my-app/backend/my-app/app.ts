import index from './src/routes/index.route.ts'; 
import createApp from './src/lib/create-app.ts';
import configuireOpenAPI from './src/lib/configuire-open-api.ts';

const app = createApp();

configuireOpenAPI(app);

const routes = [
    index,
    
  ];
  routes.forEach((route) => {
    app.route("/",route)
  })

export default app;


