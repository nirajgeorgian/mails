import compression from 'compression';
import bodyParser from 'body-parser';
import corsApp from './cors';
import limiter from './limiter';
import logging from './logging';
import security from './security';
import toobusy from './toobussy';
import userSession from './user-session';
import authMiddleware from './auth-middleware';
import emptyMiddleware from './empty-middleware';

export default app => {
  app.set('trust proxy', true);
  app.disable('x-powered-by');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(userSession());
  app.use(authMiddleware());
  app.use(limiter());
  app.use(logging());
  app.use(corsApp());
  app.use(toobusy());
  app.use(emptyMiddleware());
  security(app);
};
