import * as path from 'path'
import * as grpc from 'grpc'
import * as debug from "debug"

const log = debug("SampleServer");

// class ServerImpl implements IMailsService

const PORT = process.env.PORT
