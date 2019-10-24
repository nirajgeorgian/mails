exports.id = "main";
exports.modules = {

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __webpack_require__(/*! grpc */ "grpc");
const debug = __webpack_require__(/*! debug */ "debug");
const mail_service_grpc_pb_1 = __webpack_require__(/*! ./proto/mail/service/mail_service_grpc_pb */ "./src/proto/mail/service/mail_service_grpc_pb.js");
const mail_service_pb_1 = __webpack_require__(/*! ./proto/mail/service/mail_service_pb */ "./src/proto/mail/service/mail_service_pb.js");
const log = debug('SampleServer');
const PORT = process.env.PORT || 3002;
const sendAccountConfirmation = (call, callback) => {
    console.log(call.request);
    const confirmRes = new mail_service_pb_1.ConfirmationRes();
    confirmRes.setStatus(true);
    callback(null, confirmRes);
};
const startServer = () => {
    const server = new grpc.Server();
    server.addService(mail_service_grpc_pb_1.MailsServiceService, {
        sendAccountConfirmation
    });
    server.bind('127.0.0.1:' + PORT, grpc.ServerCredentials.createInsecure());
    server.start();
    log(`Server started, listening: http://localhost:${PORT}`);
};
startServer();
process.on('uncaughtException', (err) => {
    log(`process on uncaughtException error: ${err}`);
    process.exit();
});
process.on('unhandledRejection', (err) => {
    log(`process on unhandledRejection error: ${err}`);
    process.exit();
});


/***/ })

};
//# sourceMappingURL=main.8673bbcc0bb34e1a14e9.hot-update.js.map