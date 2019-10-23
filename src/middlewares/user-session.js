import session from 'express-session';
import ConnectMongo from 'connect-mongo';
import database from '../database';

const { APP_SESSION_SECRET } = process.env;
const MongoStore = ConnectMongo(session);

const userSession = () => session({
  name: 'StayologySession',
  secret: APP_SESSION_SECRET,
  proxy: true,
  store: new MongoStore({ mongooseConnection: database.mongo }),
  resave: false,
  saveUninitialized: true,
  withCredentials: true,
  cookie: {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  }
})

export default userSession;
