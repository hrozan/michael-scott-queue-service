import { Queue } from "../index"
import { LinkedList } from "../linkedList"
import { ListNode } from "../listNode"

const mockedItem = { message: "Lorem ipsum dolor" }
const generateMockedMessage = () => ({ ...mockedItem })

describe("Queue", () => {
  it("should queue one item ", async () => {
    const queue = new Queue()

    queue.enqueue({ value: 1 })

    expect(queue.list.length).toBe(1)
  })

  it("should dequeue one item", async () => {
    const item = { value: 1 }
    const queue = new Queue()
    queue.enqueue(item)

    const result = queue.dequeue()

    expect(result).toBe(item)
  })
})

describe("Linked List", () => {
  it("should append a item", async () => {
    const item = generateMockedMessage()
    const list = new LinkedList()

    for (let i = 0; i <= 5; i++) {
      list.append(generateMockedMessage())
    }

    list.append(item)

    expect(list.tail?.value).toBe(item)
  })

  it("should append 5 items e check length", async () => {
    const list = new LinkedList()
    const count = 10

    for (let i = 0; i < count; i++) {
      list.append(generateMockedMessage())
    }

    expect(list.length).toBe(count)
  })
})

describe("List Node", () => {
  it("should create 2 list node and link them", async () => {
    const node1 = new ListNode({ message: "test" })
    const node2 = new ListNode({ message: "test" }, node1)

    expect(node2.next).toBe(node1)
  })
})
