import { createQueue, dequeue, enqueue, Queue } from "../index"
import { append, createLinkedList } from "../linkedList"
import { createLinkedListNode } from "../linkedListNode"

const mockedItem = { message: "Lorem ipsum dolor" }
const generateMockedMessage = () => ({ ...mockedItem })

describe("Queue", () => {
  it("should queue one item ", async () => {
    const queue = createQueue()

    enqueue(queue, { value: 1 })

    expect(queue.list.length).toBe(1)
  })

  it("should dequeue one item", async () => {
    const item = { value: 1 }
    const queue = createQueue()
    enqueue(queue, item)

    const result = dequeue(queue)

    expect(result).toBe(item)
  })
})

describe("Linked List", () => {
  it("should append a item", async () => {
    const item = generateMockedMessage()
    const list = createLinkedList()

    for (let i = 0; i <= 5; i++) {
      append(list, generateMockedMessage())
    }

    append(list, item)

    expect(list.tail?.value).toBe(item)
  })

  it("should append 5 items e check length", async () => {
    const list = createLinkedList()
    const count = 10

    for (let i = 0; i < count; i++) {
      append(list, generateMockedMessage())
    }

    expect(list.length).toBe(count)
  })
})

describe("List Node", () => {
  it("should create 2 list node and link them", async () => {
    const node1 = createLinkedListNode("test")
    const node2 = createLinkedListNode("test2", node1)

    expect(node2.next).toBe(node1)
  })
})
