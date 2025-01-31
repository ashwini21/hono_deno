import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';
import { apiReference } from 'scalar';

const env = config();
export default function configuireOpenAPI(app){
// The OpenAPI documentation will be available at /doc
    app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: env.API_DOCUMENTATION_VERSION,
      title: 'MercyHealth API',
    },
  });
  app.get(
    '/reference',
    apiReference({
        theme: 'kepler',
        spec: {
            url: '/doc',
        },
        layout: 'classic'
    }),
);
}





