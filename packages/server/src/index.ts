import Debug from "debug"
import { startMSQSServer } from "./server"

const debug = Debug("msqs:index")

const port = parseInt(process.env.PORT || "2307")

startMSQSServer({ port }).then(() => {
  debug(`started successfully`)
})
