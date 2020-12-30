import { createLinkedListNode, LinkedListNode } from "./linkedListNode"

export type LinkedList<T> = {
  head?: LinkedListNode<T>
  tail?: LinkedListNode<T>
  length: number
}

export const createLinkedList = <T>(): LinkedList<T> => {
  return { length: 0 }
}

export const append = <T>(list: LinkedList<T>, value: T): LinkedList<T> => {
  const newNode = createLinkedListNode(value)

  // If there is no head yet let's make new node a head.
  if (!list.head) {
    list.head = newNode
    list.tail = newNode
    list.length++

    return list
  }

  // Attach new node to the end of linked list.
  if (list.tail) {
    list.tail.next = newNode
    list.tail = newNode
    list.length++
    return list
  }
  return list
}

export const removeFromHead = <T>(list: LinkedList<T>): T => {
  if (!list.head) {
    throw new Error("Empty Queue")
  }

  const deletedHead = list.head

  if (list.head.next) {
    list.head = list.head.next
  } else {
    list.head = undefined
    list.tail = undefined
  }

  list.length--
  return deletedHead.value
}


