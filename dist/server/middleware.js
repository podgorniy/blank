"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../common/lib");
var Bundler = require('parcel-bundler');
function initMiddleware(app) {
    var bundler = new Bundler('./src/client/client.ts', {
        outDir: 'static/dist',
        publicUrl: '/dist',
        contentHash: false,
        sourceMaps: lib_1.isDev()
    });
    app.use(bundler.middleware());
}
exports.initMiddleware = initMiddleware;
//# sourceMappingURL=middleware.js.map