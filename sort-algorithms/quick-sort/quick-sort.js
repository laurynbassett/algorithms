// divide and conquer algorithm
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr
  const pivot = arr[Math.floor(arr.length / 2)]
  // pick an el as pivot and partition arr around the pivot
  const idx = partition(arr, left, right, pivot)
  const leftArr = quickSort(arr, left, idx - 1)
  const rightArr = quickSort(arr, idx, right)
  return leftArr.concat(rightArr)
}

function partition(arr, left, right, pivot) {
  // given a pivot el, place pivot at its correct position in sorted arr
  // place all smaller els before pivot, put all greater els after pivot

  while (left <= right) {
    while (arr[left] < pivot) left++
    while (arr[right] > pivot) right--
    if (left <= right) {
      arr = swap(arr, left, right)
      left++
      right--
    }
  }
  return left
}

function swap(arr, left, right) {
  let temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
  return arr
}

console.log(quickSort([ 7, 8, 5, 2, 4, 6, 3 ]))
