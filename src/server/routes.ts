import {Express} from 'express'
import {initMiddleware} from './middleware'
import ReactDOMServer from 'react-dom/server'
import * as React from 'react'
// import {Index} from '../common'
import {AppState} from '../common/app-state'
import {Provider} from 'mobx-react'
import {toJS} from 'mobx'
import {App} from '../common/App'

export function initRoutes(app: Express) {
    initMiddleware(app)

    app.get('*', (req, res) => {
        // console.log('res', res.locals.initialAppState)
        let appState = new AppState(res.locals.initialAppState)
        setTimeout(() => {
            const currentAppState = toJS(appState)
            res.send(`<html>
<head>
    <title>Hi you, ${appState.userName}</title>
</head>
<body>
    <script>window.a = ${JSON.stringify(currentAppState)}</script>
<div id="app">${ReactDOMServer.renderToString(
                React.createElement(Provider, {
                    appState: currentAppState,
                    children: React.createElement(App)
                })
            )}</div>
    <script src='/client/client.js'></script>
</body>
</html>`)
        }, 16)
    })
}
