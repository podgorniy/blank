// Should go before anything else
// import { startGRPCServer } from './grpc'
require('dotenv').config()
require('source-map-support').install()

import {startServer} from './web'

// startGRPCServer()
startServer()
