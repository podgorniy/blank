import express = require('express')
import {initMiddleware} from './middleware'
import {initRoutes} from './routes'
const DEV_PORT = 8888

export async function startServer() {
    const app = express()
    initMiddleware(app)
    initRoutes(app)
    const appPort = process.env.PORT || DEV_PORT
    app.listen(appPort)
    console.log(`App started at ${appPort}`)
}
