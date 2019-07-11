"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = require("./middleware");
var server_1 = __importDefault(require("react-dom/server"));
var React = __importStar(require("react"));
// import {Index} from '../common'
var app_state_1 = require("../common/app-state");
var mobx_react_1 = require("mobx-react");
var mobx_1 = require("mobx");
var App_1 = require("../common/App");
function initRoutes(app) {
    middleware_1.initMiddleware(app);
    app.get('*', function (req, res) {
        // console.log('res', res.locals.initialAppState)
        var appState = new app_state_1.AppState(res.locals.initialAppState);
        setTimeout(function () {
            var currentAppState = mobx_1.toJS(appState);
            res.send("<html>\n<head>\n    <title>Hi you, " + appState.userName + "</title>\n</head>\n<body>\n    <script>window.a = " + JSON.stringify(currentAppState) + "</script>\n<div id=\"app\">" + server_1.default.renderToString(React.createElement(mobx_react_1.Provider, {
                appState: currentAppState,
                children: React.createElement(App_1.App)
            })) + "</div>\n    <script src='/client/client.js'></script>\n</body>\n</html>");
        }, 16);
    });
}
exports.initRoutes = initRoutes;
//# sourceMappingURL=routes.js.map