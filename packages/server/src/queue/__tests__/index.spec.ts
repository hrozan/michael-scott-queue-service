import { createQueue, dequeue, enqueue, Queue } from "../index"
import { appendToList, createLinkedList } from "../linkedList"
import { createLinkedListNode } from "../linkedListNode"

const mockedItem = { message: "Lorem ipsum dolor" }
const generateMockedMessage = () => ({ ...mockedItem })

describe("Queue", () => {
  it("should queue one item ", async () => {
    const queue = createQueue<object>()

    const enqueueItem = enqueue(queue)

    enqueueItem({ value: 1 })

    expect(queue.list.length).toBe(1)
  })

  it("should dequeue one item", async () => {
    const item = { value: 1 }
    const queue = createQueue<object>()

    const enqueueItem = enqueue(queue)
    enqueueItem(item)

    const result = dequeue(queue)

    expect(result).toBe(item)
  })
})

describe("Linked List", () => {
  it("should append a item", async () => {
    const item = generateMockedMessage()
    const list = createLinkedList()

    const append = appendToList(list)

    for (let i = 0; i <= 5; i++) {
      append(generateMockedMessage())
    }

    append(item)

    expect(list.tail?.value).toBe(item)
  })

  it("should append 5 items e check length", async () => {
    const list = createLinkedList()
    const count = 5

    const append = appendToList(list)
    for (let i = 0; i < count; i++) {
      append(generateMockedMessage())
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
