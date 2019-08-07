import * as protoLoader from '@grpc/proto-loader'
import * as path from 'path'

const PROTO_PATH = path.resolve(__dirname, '../grpc/web.proto')
console.log(`PROTO_PATH`, PROTO_PATH)
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true})
// const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
// console.log(`protoDescriptor`, protoDescriptor)
