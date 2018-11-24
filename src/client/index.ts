require('./client.less')
import {isDev} from '../common/lib'

import './client.ts'

if (isDev()) {
    console.log('Welcome dev')
} else {
    console.log('Welcome user')
}
