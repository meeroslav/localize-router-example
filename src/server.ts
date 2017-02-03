/**
 * the polyfills must be the first thing imported
 */
import './polyfills.ts';
import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';

import { createEngine } from 'angular2-express-engine';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.node.module';
import { environment } from './environments/environment';

// App
const app  = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const port = process.env.PORT || 4200;

/**
 * enable prod mode for production environments
 */
if (environment.production) {
  enableProdMode();
}

/**
 * Express View
 */
app.engine('.html', createEngine({}));
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
  console.log(`Listening on port ${port}`);
});
