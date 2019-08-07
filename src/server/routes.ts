import { Express } from 'express'
import ReactDOMServer from 'react-dom/server'
import * as React from 'react'
// import {Index} from '../common'
import { AppState } from '../common/app-state'
import { Provider } from 'mobx-react'
import { App } from '../common/App'

export function initRoutes(app: Express) {
    app.get('/', (req, res) => {
        let appState = new AppState(res.locals.initialAppState)
        res.render('default', {
            title: 'lool',
            initialAppState: appState,
            contentString: ReactDOMServer.renderToString(
                React.createElement(Provider, {
                    appState: appState,
                    children: React.createElement(App)
                })
            )
        })
    })
}
