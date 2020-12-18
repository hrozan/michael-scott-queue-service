export class ListNode<T> {
  value: T
  next: ListNode<T> | null

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value
    this.next = next
  }

  toString(callback: Function) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
