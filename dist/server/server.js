"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Should go before anything else
// import { startGRPCServer } from './grpc'
require('dotenv').config();
require('source-map-support').install();
var web_1 = require("./web");
// startGRPCServer()
web_1.startServer();
//# sourceMappingURL=server.js.map