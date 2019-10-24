import * as grpc from 'grpc'
import * as debug from 'debug'

import { MailsServiceService } from './proto/mail/service/mail_service_grpc_pb'
import { AccountConfirmationReq, ConfirmationRes } from './proto/mail/service/mail_service_pb'

const log = debug('SampleServer')
const PORT = process.env.PORT || 3002

const sendAccountConfirmation = (
	call: grpc.ServerUnaryCall<AccountConfirmationReq>,
	callback: grpc.sendUnaryData<ConfirmationRes>
) => {
	const request = call.request
	const username = request.getUsername()
	const message = request.getMessage()
	const confirmationCode = request.getConfirmationcode()

	const confirmRes = new ConfirmationRes()
	confirmRes.setStatus(true)

	callback(null, confirmRes)
}

const startServer = () => {
	const server = new grpc.Server()

	server.addService(MailsServiceService, {
		sendAccountConfirmation
	})
	server.bind('127.0.0.1:' + PORT, grpc.ServerCredentials.createInsecure())
	server.start()

	log(`Server started, listening: http://localhost:${PORT}`)
}
startServer()

process.on('uncaughtException', (err) => {
	log(`process on uncaughtException error: ${err}`)
	process.exit()
})

process.on('unhandledRejection', (err) => {
	log(`process on unhandledRejection error: ${err}`)
	process.exit()
})
