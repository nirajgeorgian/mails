import { Request, Response, NextFunction } from 'express'
import toobusy from 'toobusy-js'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

const tooBussy = () => (_: Request, res: Response, next: NextFunction) => {
	if (!isDevelopment && toobusy()) {
		// only show status in production and not in development
		res.statusCode = 503
		res.send('We are expericening a lot of traffic. Please retry in a few seconds')
	} else {
		// queue up the request and wait for it to complete in testing and development phase
		next()
	}
}

export default tooBussy
