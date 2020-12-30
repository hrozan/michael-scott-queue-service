import Debug from "debug"
import { io } from "socket.io-client"
import { Events } from "@msqs/core"

const debug = Debug("msqs:client")

export type MSQSClient = {
  sendMessage: (payload: any) => void
  consume: () => Promise<object>
}

export const createMSQSClient = (connectionString?: string): Promise<MSQSClient> =>
  new Promise((resolve) => {
    const socket = io(connectionString || "http://localhost:2307")
    socket.connect()

    socket.on("connection", () => {
      debug("client connected")
    })

    const sendMessage = (payload: any) => {
      debug(`sending message`)
      socket.emit(Events.Send, payload)
    }

    const consume = (): Promise<Object> =>
      new Promise((resolve, reject) => {
        debug("consume message")
        socket.emit(Events.Consume)

        socket.on(Events.ConsumeReturn, (payload: Object) => {
          debug("message return")
          resolve(payload)
        })

        setTimeout(() => reject(), 5000)
      })

    const client: MSQSClient = {
      sendMessage,
      consume,
    }
    resolve(client)
  })
