import * as path from 'path'
import * as grpc from 'grpc'
import * as debug from "debug"
import * as protoLoader from '@grpc/proto-loader'

const MAIN_PROTO_MODEL_PATH = path.join(__dirname, './proto/mail_service/model/mail_model.proto')
const MAIN_PROTO_SERVICE_PATH = path.join(__dirname, './proto/mail_service/mail_service.proto')
const HEALTH_PROTO_PATH = path.join(__dirname, './proto/grpc/health/v1/health.proto')

const PORT = process.env.PORT
