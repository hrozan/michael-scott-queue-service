import Debug from "debug"
import { LinkedList } from "./linkedList"

const debug = Debug("msqs:queue")

export class Queue {
  list: LinkedList

  constructor() {
    this.list = new LinkedList()
  }

  enqueue(item: object) {
    this.list.append(item)
    debug(`item enqueued, queue length ${this.list.length}`)
  }

  dequeue() {
    const item = this.list.removeHead()
    debug(`item dequeued, queue length ${this.list.length}`)
    return item?.value
  }
}
