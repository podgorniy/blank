import express = require('express')
import {initMiddleware} from './middleware'
import {initRoutes} from './routes'
import {WEB_SERVER_PORT} from '../conf';
import * as path from 'path';

export async function startServer() {
    const app = express()
    app.set('view engine', 'pug')
    app.set('views', path.resolve(__dirname, 'views'))
    initMiddleware(app)
    initRoutes(app)
    app.listen(WEB_SERVER_PORT)
    console.log(`Web server started http://localhost:${WEB_SERVER_PORT}`)
}
