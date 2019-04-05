"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var middleware_1 = require("./middleware");
var routes_1 = require("./routes");
var path = __importStar(require("path"));
var lib_1 = require("../common/lib");
function startServer() {
    var app = express();
    app.set('view engine', 'pug');
    app.set('views', path.resolve(__dirname, '../', 'server-views'));
    middleware_1.initMiddleware(app);
    routes_1.initRoutes(app);
    var appPort = process.env.PORT;
    app.listen(appPort);
    if (lib_1.isDev()) {
        console.log("http://localhost:" + appPort + "/");
    }
    else {
        console.log("App started on " + appPort);
    }
}
exports.startServer = startServer;
//# sourceMappingURL=web.js.map