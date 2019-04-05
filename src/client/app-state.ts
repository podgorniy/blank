import {action, observable} from 'mobx'
import {IInitialAppState} from '../common/interfaces'

export class AppState {
    constructor(initialState: IInitialAppState) {
        this.setUserName(initialState.userName)
    }

    @observable
    userName

    @action
    setUserName(newName: string) {
        this.userName = newName
    }
}

export interface IPropsWithAppState {
    appState?: AppState
}
