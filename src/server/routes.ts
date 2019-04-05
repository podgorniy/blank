import {Express} from 'express'
import {initMiddleware} from './middleware'

export function initRoutes(app: Express) {
    initMiddleware(app)

    app.get('*', (req, res) => {
        res.render('default')
    })
}
