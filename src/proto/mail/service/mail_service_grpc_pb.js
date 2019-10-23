// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_mail_service_mail_service_pb = require('../../../proto/mail/service/mail_service_pb.js');

function serialize_mails_AccountConfirmationReq(arg) {
  if (!(arg instanceof proto_mail_service_mail_service_pb.AccountConfirmationReq)) {
    throw new Error('Expected argument of type mails.AccountConfirmationReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mails_AccountConfirmationReq(buffer_arg) {
  return proto_mail_service_mail_service_pb.AccountConfirmationReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mails_ConfirmationRes(arg) {
  if (!(arg instanceof proto_mail_service_mail_service_pb.ConfirmationRes)) {
    throw new Error('Expected argument of type mails.ConfirmationRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mails_ConfirmationRes(buffer_arg) {
  return proto_mail_service_mail_service_pb.ConfirmationRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var MailsServiceService = exports.MailsServiceService = {
  sendAccountConfirmation: {
    path: '/mails.MailsService/SendAccountConfirmation',
    requestStream: false,
    responseStream: false,
    requestType: proto_mail_service_mail_service_pb.AccountConfirmationReq,
    responseType: proto_mail_service_mail_service_pb.ConfirmationRes,
    requestSerialize: serialize_mails_AccountConfirmationReq,
    requestDeserialize: deserialize_mails_AccountConfirmationReq,
    responseSerialize: serialize_mails_ConfirmationRes,
    responseDeserialize: deserialize_mails_ConfirmationRes,
  },
};

exports.MailsServiceClient = grpc.makeGenericClientConstructor(MailsServiceService);
