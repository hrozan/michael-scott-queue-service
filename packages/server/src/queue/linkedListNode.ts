export type LinkedListNode<T> = {
  value: T
  next?: LinkedListNode<T>
}

export const createLinkedListNode = <T>(value: T, next?: LinkedListNode<T>): LinkedListNode<T> => ({ value, next })
