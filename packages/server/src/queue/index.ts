import Debug from "debug"
import { LinkedList } from "./linkedList"

const debug = Debug("msqs:queue")

export class Queue<T> {
  list: LinkedList<T>

  constructor() {
    this.list = new LinkedList<T>()
  }

  enqueue(item: T) {
    this.list.append(item)
    debug(`item enqueued, queue length ${this.list.length}`)
  }

  dequeue() {
    const item = this.list.removeHead()
    debug(`item dequeued, queue length ${this.list.length}`)
    return item?.value
  }
}
