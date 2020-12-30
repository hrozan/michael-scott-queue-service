import { createMSQSClient } from "./client"

const main = async () => {
  const client = await createMSQSClient()

  for (let i = 0; i <= 10000; i++)
    client.sendMessage({ message: "hello" })

  for (let i = 0; i <= 100; i++) {
    const payload = await client.consume()
    console.log(payload)
  }
}

main().catch(e => console.log(e))
