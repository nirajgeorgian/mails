// package: grpc.health.v1
// file: proto/grpc/health/v1/health.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as proto_grpc_health_v1_health_pb from "../../../../proto/grpc/health/v1/health_pb";

interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    check: IHealthService_ICheck;
}

interface IHealthService_ICheck extends grpc.MethodDefinition<proto_grpc_health_v1_health_pb.HealthCheckRequest, proto_grpc_health_v1_health_pb.HealthCheckResponse> {
    path: string; // "/grpc.health.v1.Health/Check"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_grpc_health_v1_health_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<proto_grpc_health_v1_health_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<proto_grpc_health_v1_health_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<proto_grpc_health_v1_health_pb.HealthCheckResponse>;
}

export const HealthService: IHealthService;

export interface IHealthServer {
    check: grpc.handleUnaryCall<proto_grpc_health_v1_health_pb.HealthCheckRequest, proto_grpc_health_v1_health_pb.HealthCheckResponse>;
}

export interface IHealthClient {
    check(request: proto_grpc_health_v1_health_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: proto_grpc_health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    check(request: proto_grpc_health_v1_health_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_grpc_health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    check(request: proto_grpc_health_v1_health_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_grpc_health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}

export class HealthClient extends grpc.Client implements IHealthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public check(request: proto_grpc_health_v1_health_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: proto_grpc_health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: proto_grpc_health_v1_health_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_grpc_health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: proto_grpc_health_v1_health_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_grpc_health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}
