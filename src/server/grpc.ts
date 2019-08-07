import * as path from 'path'
// console.log(`__dirname`, __dirname)
// console.log(`PROTO_PATH`, PROTO_PATH)
import * as grpc from 'grpc'
import * as protoLoader from '@grpc/proto-loader'

const PROTO_PATH = path.resolve(__dirname, '../grpc/web.proto')

export function startGRPCServer() {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true})
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
    const web = protoDescriptor.web
    const server = new grpc.Server()
    server.addService((web as any).web.service, {
        sayHello: (call, callback) => {
            callback({time: Date.now().toString()})
        }
    })
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
    server.start()
    return server
}
