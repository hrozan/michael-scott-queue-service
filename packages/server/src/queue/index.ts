import Debug from "debug"
import { appendToList, createLinkedList, LinkedList, removeFromHead } from "./linkedList"

const debug = Debug("msqs:queue")

export type Queue<T> = {
  list: LinkedList<T>
}

export const createQueue = <T>(): Queue<T> => {
  debug("creating queue")
  return { list: createLinkedList<T>() }
}

export const enqueue = <T>(queue: Queue<T>) => (item: T): Queue<T> => {
  const append = appendToList(queue.list)
  queue.list = append(item)
  debug(`enqueue item ${queue.list.length}`)
  return queue
}

export const dequeue = <T>(queue: Queue<T>): T => {
  const item = removeFromHead(queue.list)
  debug(`dequeue item ${queue.list.length}`)
  return item
}


