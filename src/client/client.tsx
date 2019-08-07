import { App } from '../common/App'
import { hydrate } from 'react-dom'
import { AppState } from '../common/app-state'
import { Provider } from 'mobx-react'
import * as React from 'react'

require('./client.less')

const appState = new AppState(window['initialAppState'])
hydrate(
    <Provider appState={appState}>
        <App />
    </Provider>,
    document.getElementById('app')
)
