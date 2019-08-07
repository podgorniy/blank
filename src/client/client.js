"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("../common/App");
var react_dom_1 = require("react-dom");
var app_state_1 = require("../common/app-state");
var mobx_react_1 = require("mobx-react");
var React = __importStar(require("react"));
require('./client.less');
var appState = new app_state_1.AppState(window['initialAppState']);
react_dom_1.hydrate(React.createElement(mobx_react_1.Provider, { appState: appState },
    React.createElement(App_1.App, null)), document.getElementById('app'));
