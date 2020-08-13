/*
function insertionSort(arr) {
  // set a marker for the sorted section after first el
  // repeat following until unsorted section empty:
  //  select first unsorted el
  //  swap other els to the right to create correct position and shift unsorted el
  //  advance market to the right one el
  for (let i = 1; i < arr.length; i++) {
    let sorted = arr.slice(0, i)
    let currUnsorted = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      let currSorted = sorted[j]
      if (currUnsorted < currSorted) {
        arr[j + 1] = currSorted
        if (j === 0) arr[j] = currUnsorted
      } else if (currUnsorted > currSorted) {
        arr[j + 1] = currUnsorted
        break
      }
    }
  }
  return arr
}
*/

function insertionSort(arr) {
  // iterate through arr (left to right)
  for (let i = 1; i < arr.length; i++) {
    let sorted = arr.slice(0, i)
    let currUnsorted = arr[i]
    let j = i - 1
    // w/ each iteration, loop through the sorted els on the left (right to left)
    // starting at idx i-1, shift els one to the right until the sorted
    // position is found for the curr el at which point it's inserted
    while (j >= 0 && arr[j] > currUnsorted) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currUnsorted
  }
  return arr
}

console.log(insertionSort([ 7, 8, 5, 2, 4, 6, 3 ]))
