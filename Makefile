-include .env

VERSION                 := $(shell git describe --tags)
BUILD                   := $(shell git rev-parse --short HEAD)
PROJECTNAME             := $(shell basename "$(PWD)")
PROTO_DEST              :=./src/proto

# JavaScript code generating
protos:
  @for service in mail_service ; do \
		echo "generating $$service model" ; \
    grpc_tools_node_protoc \
      -I src/proto/$$service \
      --js_out=import_style=commonjs,binary:${PROTO_DEST} \
      --grpc_out=${PROTO_DEST} \
      --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
      proto/*.proto
  done

#   echo "generating protoc" ; \
  # grpc_tools_node_protoc \
  # --js_out=import_style=commonjs,binary:${PROTO_DEST} \
  # --grpc_out=${PROTO_DEST} \
  # --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  # -I ./proto \
  # proto/*.proto
#
# grpc_tools_node_protoc \
# --plugin=protoc-gen-ts=../bin/protoc-gen-ts \
# --ts_out=${PROTO_DEST} \
# -I ./proto \
# proto/*.proto
