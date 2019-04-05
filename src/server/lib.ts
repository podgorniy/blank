import {NextFunction} from 'express-serve-static-core'
import {IMyRequest, IMyResponse} from './interfaces'

export function asyncHandler(fn: (req: IMyRequest, res: IMyResponse, next: NextFunction) => any) {
    return (req, res, next) => {
        return Promise.resolve(fn(req, res, next)).catch(next)
    }
}
