// YOUR CODE HERE
class Node {
  constructor(val) {
    this.value = val
    this.previous = null
    this.next = null
  }
}

class LinkedList {
  constructor(val) {
    this.value = val
    this.head = null
    this.tail = null
  }

  addToHead(val) {
    const newHead = new Node(val)
    const currHead = this.head

    if (!currHead) this.head = this.tail = newHead
    else {
      this.head = newHead
      if (currHead !== this.tail) {
        newHead.next = currHead
        currHead.previous = newHead
      } else {
        newHead.next = this.tail
        this.tail.previous = newHead
      }
    }
  }

  addToTail(val) {
    const newTail = new Node(val)
    const currTail = this.tail
    if (!currTail) this.head = this.tail = newTail
    else {
      this.tail = newTail
      if (currTail === this.head) {
        newTail.previous = this.head
        this.head.next = newTail
      } else {
        newTail.previous = currTail
        currTail.next = newTail
      }
    }
  }

  removeHead() {
    const oldHead = this.head
    if (!oldHead) return null

    if (oldHead.next) {
      this.head = oldHead.next
      this.head.previous = null
    } else {
      this.head = this.tail = null
    }

    return oldHead.value
  }

  removeTail() {
    const oldTail = this.tail
    if (!oldTail) return null

    if (oldTail.previous) {
      this.tail = oldTail.previous
      this.tail.next = null
    } else {
      this.tail = this.head = null
    }
    return oldTail.value
  }

  search(query, node = this.head) {
    if (!node) return null
    if (typeof query === 'string') {
      if (query === node.value) return node.value
    } else {
      if (query(node.value)) return node.value
    }
    return this.search(query, node.next)
  }
}
