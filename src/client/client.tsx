import {App} from './App'
import {render} from 'react-dom'
import {AppState} from './app-state'
import {Provider} from 'mobx-react'
import * as React from 'react'

require('./client.less')

const appState = new AppState(window['initialAppState'])
render(
    <Provider appState={appState}>
        <App />
    </Provider>,
    document.getElementById('app')
)
