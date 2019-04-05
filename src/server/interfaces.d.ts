import {Request, Response} from 'express'
import {IInitialAppState} from '../common/interfaces'

export interface IMyRequest extends Request {
    locals: {
        initialAppState: IInitialAppState
    }
}

export interface IMyResponse extends Response {
    locals: {
        initialAppState: IInitialAppState
    }
}
