// package: mails
// file: proto/mail/service/mail_service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as proto_mail_service_mail_service_pb from "../../../proto/mail/service/mail_service_pb";

interface IMailsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendAccountConfirmation: IMailsServiceService_ISendAccountConfirmation;
}

interface IMailsServiceService_ISendAccountConfirmation extends grpc.MethodDefinition<proto_mail_service_mail_service_pb.AccountConfirmationReq, proto_mail_service_mail_service_pb.ConfirmationRes> {
    path: string; // "/mails.MailsService/SendAccountConfirmation"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_mail_service_mail_service_pb.AccountConfirmationReq>;
    requestDeserialize: grpc.deserialize<proto_mail_service_mail_service_pb.AccountConfirmationReq>;
    responseSerialize: grpc.serialize<proto_mail_service_mail_service_pb.ConfirmationRes>;
    responseDeserialize: grpc.deserialize<proto_mail_service_mail_service_pb.ConfirmationRes>;
}

export const MailsServiceService: IMailsServiceService;

export interface IMailsServiceServer {
    sendAccountConfirmation: grpc.handleUnaryCall<proto_mail_service_mail_service_pb.AccountConfirmationReq, proto_mail_service_mail_service_pb.ConfirmationRes>;
}

export interface IMailsServiceClient {
    sendAccountConfirmation(request: proto_mail_service_mail_service_pb.AccountConfirmationReq, callback: (error: grpc.ServiceError | null, response: proto_mail_service_mail_service_pb.ConfirmationRes) => void): grpc.ClientUnaryCall;
    sendAccountConfirmation(request: proto_mail_service_mail_service_pb.AccountConfirmationReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_mail_service_mail_service_pb.ConfirmationRes) => void): grpc.ClientUnaryCall;
    sendAccountConfirmation(request: proto_mail_service_mail_service_pb.AccountConfirmationReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_mail_service_mail_service_pb.ConfirmationRes) => void): grpc.ClientUnaryCall;
}

export class MailsServiceClient extends grpc.Client implements IMailsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendAccountConfirmation(request: proto_mail_service_mail_service_pb.AccountConfirmationReq, callback: (error: grpc.ServiceError | null, response: proto_mail_service_mail_service_pb.ConfirmationRes) => void): grpc.ClientUnaryCall;
    public sendAccountConfirmation(request: proto_mail_service_mail_service_pb.AccountConfirmationReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_mail_service_mail_service_pb.ConfirmationRes) => void): grpc.ClientUnaryCall;
    public sendAccountConfirmation(request: proto_mail_service_mail_service_pb.AccountConfirmationReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_mail_service_mail_service_pb.ConfirmationRes) => void): grpc.ClientUnaryCall;
}
