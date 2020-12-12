export class ListNode {
  value: object
  next: ListNode | null

  constructor(value: object, next: ListNode | null = null) {
    this.value = value
    this.next = next
  }

  toString(callback: Function) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
