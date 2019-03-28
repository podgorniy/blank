"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initRoutes(app) {
    app.get('*', function (req, res) {
        res.status(200);
        res.send("<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Blank</title>\n    <link rel=\"stylesheet\" href=\"/dist/index.css\">\n    <script src=\"/dist/index.js\"></script>\n</head>\n<body>\n    <h1>Hi there</h1>\n</body>\n</html>\n");
    });
}
exports.initRoutes = initRoutes;
//# sourceMappingURL=routes.js.map