// package: mails
// file: proto/mail/service/mail_service.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class ConfirmationRes extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfirmationRes.AsObject;
    static toObject(includeInstance: boolean, msg: ConfirmationRes): ConfirmationRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfirmationRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfirmationRes;
    static deserializeBinaryFromReader(message: ConfirmationRes, reader: jspb.BinaryReader): ConfirmationRes;
}

export namespace ConfirmationRes {
    export type AsObject = {
        status: boolean,
    }
}

export class AccountConfirmationReq extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): void;

    getMessage(): string;
    setMessage(value: string): void;

    getConfirmationcode(): string;
    setConfirmationcode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountConfirmationReq.AsObject;
    static toObject(includeInstance: boolean, msg: AccountConfirmationReq): AccountConfirmationReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountConfirmationReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountConfirmationReq;
    static deserializeBinaryFromReader(message: AccountConfirmationReq, reader: jspb.BinaryReader): AccountConfirmationReq;
}

export namespace AccountConfirmationReq {
    export type AsObject = {
        username: string,
        message: string,
        confirmationcode: string,
    }
}
