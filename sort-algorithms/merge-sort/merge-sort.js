const split = arr => {
  const mid = Math.floor(arr.length / 2)
  return [ arr.slice(0, mid), arr.slice(mid) ]
}

const merge = (left, right) => {
  let merged = []

  while (left.length && right.length) {
    left[0] < right[0] ? merged.push(left.shift()) : merged.push(right.shift())
  }

  return merged.concat(left).concat(right)
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr

  const left = split(arr)[0]
  const right = split(arr)[1]

  return merge(mergeSort(left), mergeSort(right))
}
