class BinarySearchTree {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
    this.magnitude = 1
  }

  insert(val) {
    const direction = val < this.value ? 'left' : 'right'
    if (this[direction]) this[direction].insert(val)
    else this[direction] = new BinarySearchTree(val)
    this.magnitude++
  }

  contains(val) {
    if (this.value === val) return true
    const direction = val < this.value ? 'left' : 'right'
    if (this[direction]) return this[direction].contains(val)
    return false
  }

  size() {
    return this.magnitude
  }

  depthFirstForEach(cb, order = 'in-order') {
    if (order === 'pre-order') cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (order === 'in-order') cb(this.value)
    if (this.right) this.right.depthFirstForEach(cb, order)
    if (order === 'post-order') cb(this.value)
  }

  breadthFirstForEach(cb) {
    let queue = [ this ]
    while (queue.length) {
      let curr = queue.shift()
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
      cb(curr.value)
    }
  }
}
