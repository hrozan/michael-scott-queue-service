import Debug from "debug"
import { io } from "socket.io-client"

const debug = Debug("msqs:client")

export type MSQSClient = {
  sendMessage: (payload: any) => void
  consume: () => Promise<object>
}

export const createMSQSClient = (connectionString?: string): Promise<MSQSClient> =>
  new Promise((resolve) => {
    const socket = io(connectionString || "http://localhost:2307")
    socket.connect()

    // Events
    socket.on("connection", () => {
      debug("client connected")
    })

    // Methods
    const sendMessage = (payload: any) => {
      debug(`sending message`)
      socket.emit("send-message", payload)
    }

    const consume = (): Promise<Object> =>
      new Promise((resolve, reject) => {
        debug("consume message")
        socket.emit("consume-message")

        socket.on("return-consume-message", (payload: Object) => {
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