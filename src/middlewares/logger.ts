import pino from 'express-pino-logger'
import { Application } from 'express'

export default (app: Application) => {
	app.use(pino)
}
