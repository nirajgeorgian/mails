import morgan from 'morgan';
import Logger from '../config/logger';

const { APP_LOGGING } = process.env;

const logging = () => {
  const isEnabledLogging = Boolean(parseInt(APP_LOGGING))
  if (isEnabledLogging) {
    return morgan(
      (tokens, req, res) => {
        return [
          'METHOD:',
          tokens.method(req, res),
          '| URL:',
          tokens.url(req, res),
          '| OPERATION_NAME:',
          req.body.operationName,
          '| VARIABLES:',
          JSON.stringify(req.body.variables),
          '| STATUS:',
          tokens.status(req, res),
          '| CONTENT-LENGTH:',
          tokens.res(req, res, 'content-length'),
          '- RESPONSE-TIME:',
          tokens['response-time'](req, res),
          'ms | USER-AGENT:',
          tokens['user-agent'](req, res),
        ].join(' ');
      },
      {
        stream: Logger.stream,
      }
    )
  } else {
    return (_, __, next) => next();
  }
};

export default logging;
