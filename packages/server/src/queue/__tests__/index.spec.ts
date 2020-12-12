import { Queue } from "../index"
import { LinkedList } from "../linkedList"

describe("Queue", () => {
  it("should queue one item ", async () => {
    const queue = new Queue()

    queue.enqueue({ value: 1 })

    expect(queue.list.length).toBe(1)
  })

  it("should dequeue one item from queue", async () => {
    const item = { value: 1 }
    const queue = new Queue()
    queue.enqueue(item)

    const result = queue.dequeue()

    expect(result).toBe(item)
  })
})

describe("Linked List", () => {
  it("should append a item", async () => {
    const item = { message: "Lorem ipsum dolor" }
    const list = new LinkedList()

    list.append({ ...item })
    list.append({ ...item })
    list.append(item)

    expect(list.tail?.value).toBe(item)
  })

  it("should prepend a item", async () => {
    const item = { message: "Lorem ipsum dolor" }
    const list = new LinkedList()

    list.append({ ...item })
    list.append({ ...item })
    list.prepend(item)

    expect(list.head?.value).toBe(item)
  })
})
