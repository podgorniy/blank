import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {IPropsWithAppState} from './app-state'

@inject('appState')
@observer
export class App extends React.Component<{} & IPropsWithAppState, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        const {appState} = this.props
        return (
            <div>
                <h1>{'hi ' + appState.userName}</h1>
                <input
                    onChange={(event) => {
                        appState.setUserName(event.target.value)
                    }}
                    type='text'
                />
            </div>
        )
    }
}
