import { ListNode } from "./listNode"

export class LinkedList {
  head: ListNode | null
  tail: ListNode | null
  length = 0

  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value: object) {
    // Make new node to be a head.
    const newNode = new ListNode(value, this.head)
    this.head = newNode
    this.length++

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  append(value: object) {
    const newNode = new ListNode(value)

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++

      return this
    }

    // Attach new node to the end of linked list.
    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
      this.length++
      return this
    }
  }

  removeHead() {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }
}
