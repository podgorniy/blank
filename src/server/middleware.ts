import {Express} from 'express'
import * as path from 'path'
import {asyncHandler} from './lib'

const express = require('express')

export function initMiddleware(app: Express) {
    app.use(express.static(path.resolve(__dirname, '../static')))

    app.get(
        '*',
        asyncHandler(async (req, res, next) => {
            res.locals.initialAppState = {
                userName: 'PopoKoko'
            }
            next()
        })
    )
}
