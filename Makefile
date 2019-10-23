-include .env

VERSION                 := $(shell git describe --tags)
BUILD                   := $(shell git rev-parse --short HEAD)
PROJECTNAME             := $(shell basename "$(PWD)")
PROTO_DEST              := "src"

PROTOC_GEN_TS_PATH      := "./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH    := "./node_modules/.bin/grpc_tools_node_protoc_plugin"


# export path variable to make available npm downloads
export PATH             := node_modules/.bin:$(PATH)
export SHELL            := /bin/bash

# Make is verbose in Linux. Make it silent.
MAKEFLAGS += --silent

protos: ## JavaScript code generating
	@for service in mail ; do \
		echo "generating $$service model in javascript and typescript" ; \
		protoc \
			--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
			--plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
			--js_out="import_style=commonjs,binary:${PROTO_DEST}" \
			--ts_out="service=grpc-node:${PROTO_DEST}" \
			--grpc_out="${PROTO_DEST}" \
			proto/$$service/model/*.proto ; \
		echo "generating $$service service in javascript and typescript" ; \
		protoc \
			--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
			--plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
			--js_out="import_style=commonjs,binary:${PROTO_DEST}" \
			--ts_out="service=grpc-node:${PROTO_DEST}" \
			--grpc_out="${PROTO_DEST}" \
			proto/$$service/service/*.proto ; \
		echo "generating health protoc" ; \
		protoc \
			--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
			--plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
			--js_out="import_style=commonjs,binary:${PROTO_DEST}" \
			--ts_out="service=grpc-node:${PROTO_DEST}" \
			--grpc_out="${PROTO_DEST}" \
			proto/grpc/health/v1/*.proto ; \
	done
