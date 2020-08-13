// SOLUTION 1
/*
function selectionSort(arr) {
  // find the minimum element in unsorted arr and place at beginning
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        let temp = arr[j]
        arr[j] = min
        min = temp
      }
    }
    arr[i] = min
  }
  return arr
}
*/

// SOLUTION 2 w/ SWAP
function swap(arr, smallerIdx, largerIdx) {
  let temp = arr[smallerIdx]
  arr[smallerIdx] = arr[largerIdx]
  arr[largerIdx] = temp
  return arr
}

function selectionSort(arr) {
  // iterate through the arr; w/ each iteration separating sorted on left from unsorted on right
  for (let i = 0; i < arr.length; i++) {
    // find the min el in unsorted arr and place at leftmost idx
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) arr = swap(arr, i, min)
  }
  return arr
}

console.log(selectionSort([ 7, 8, 5, 2, 4, 6, 3 ]))
