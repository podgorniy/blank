import express = require('express')
import {initMiddleware} from './middleware'
import {initRoutes} from './routes'
import {WEB_SERVER_PORT} from '../conf';

export async function startServer() {
    const app = express()
    initMiddleware(app)
    initRoutes(app)
    app.listen(WEB_SERVER_PORT)
    console.log(`Web server started http://localhost:${WEB_SERVER_PORT}`)
}
