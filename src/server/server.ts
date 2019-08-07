// Should go before anything else
require('dotenv').config()
require('source-map-support').install()

import {startServer} from './web'

startServer()
