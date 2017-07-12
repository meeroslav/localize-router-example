/**
 * the polyfills must be the first thing imported
 */
import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';
enableProdMode();
import { AppModule } from './app/app.server.module';

// App
const app  = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`;

/**
 * Express View
 */
app.engine('html', ngExpressEngine({ bootstrap: AppModule }));
app.set('views', path.join(ROOT, 'client'));
app.set('view engine', 'html');

/**
 * Enable compression
 */
app.use(compression());

/**
 * serve static files
 */
app.use('/', express.static(path.join(ROOT, 'client'), {index: false}));

/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req: any, res: any) {
  res.render('index', {
    req,
    res,
    ngModule: AppModule,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: req.hostname
  });
}

app.get('/', ngApp);

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
