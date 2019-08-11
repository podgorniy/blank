import express = require('express')
import { initMiddleware } from './middleware'
import { initRoutes } from './routes'
import * as path from 'path'
import { isDev } from '../common/lib'

export function startServer() {
    const app = express()
    app.set('view engine', 'pug')
    app.set('views', path.resolve(__dirname, '../', 'server-views'))
    initMiddleware(app)
    initRoutes(app)
    const appPort = process.env.PORT
    app.listen(appPort)
    if (isDev()) {
        console.log(`http://localhost:${appPort}/`)
    } else {
        console.log(`App started on ${appPort}`)
    }
}
