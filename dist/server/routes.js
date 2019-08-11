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
var server_1 = __importDefault(require("react-dom/server"));
var React = __importStar(require("react"));
var app_state_1 = require("../common/app-state");
var mobx_react_1 = require("mobx-react");
var App_1 = require("../common/App");
function initRoutes(app) {
    app.get('/', function (req, res) {
        var appState = new app_state_1.AppState(res.locals.initialAppState);
        res.render('default', {
            title: 'lool',
            initialAppState: appState,
            contentString: server_1.default.renderToString(React.createElement(mobx_react_1.Provider, {
                appState: appState,
                children: React.createElement(App_1.App)
            }))
        });
    });
}
exports.initRoutes = initRoutes;
//# sourceMappingURL=routes.js.map