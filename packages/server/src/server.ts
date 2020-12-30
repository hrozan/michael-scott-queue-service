import Debug from "debug"
import { createServer, Server as HttpServer } from "http"
import { Server, Socket } from "socket.io"
import { createQueue, dequeue, enqueue } from "./queue"
import { Events } from "@msqs/core"

const debug = Debug("msqs:server")

export type MSQSServerConfig = {
  port: number
}

export type MSQSServer = {
  httpServer: HttpServer
  io: Server
  close: () => Promise<unknown>
}

export const startMSQSServer = (config: MSQSServerConfig): Promise<MSQSServer> =>
  new Promise((resolve, reject) => {
    {
      const httpServer = createServer()
      const io = new Server(httpServer, {})
      const queue = createQueue<object>()

      const close = () =>
        new Promise((resolve, reject) => {
          io.close((err: Error | undefined) => {
            if (err) {
              debug("error closing connection")
              reject()
            }
            debug("closed")
            resolve()
          })
        })

      const server: MSQSServer = {
        httpServer,
        io,
        close,
      }

      const onMessageReceived = (payload: Object) => {
        debug(`message received on ${Date.now()}`)
        enqueue(queue, payload)
      }

      const onMessageConsume = () => {
        const payload = dequeue(queue)
        io.emit(Events.ConsumeReturn, payload)
      }

      io.on("connection", (socket: Socket) => {
        socket.on(Events.Send, onMessageReceived)
        socket.on(Events.Consume, onMessageConsume)
      })

      httpServer.on("error", (err) => reject(err))
      httpServer.listen(config.port, () => {
        debug(`listening on port: ${config.port}`)
        resolve(server)
      })
    }
  })
