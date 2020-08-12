function swap(arr, left, right) {
  let temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
  return arr
}

function bubbleSort(arr) {
  if (arr.length <= 1) return arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[j] > arr[j + 1]) {
          arr = swap(arr, j, j + 1)
        }
      }
    }
  }
  return arr
}
