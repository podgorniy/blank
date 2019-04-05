"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = require("./middleware");
function initRoutes(app) {
    middleware_1.initMiddleware(app);
    app.get('*', function (req, res) {
        res.render('default');
    });
}
exports.initRoutes = initRoutes;
//# sourceMappingURL=routes.js.map