describe('Insertion Sort', function() {
  // checks that insertionSort can handle an empty array
  it('handles an empty array', function() {
    expect(insertionSort([])).toEqual([])
  })

  // test case for single items
  it('can handle an array of a single item', function() {
    expect(insertionSort([ 1 ])).toEqual([ 1 ])
  })

  it('sorts an array with elements', function() {
    expect(insertionSort([ 1, 3, 2, 5, 4 ])).toEqual([ 1, 2, 3, 4, 5 ])
  })

  // test case for multiple items
  it('can handle an array of multiple items', function() {
    expect(insertionSort([ 1, 5, 3, 4, 2 ])).toEqual([ 1, 2, 3, 4, 5 ])
  })
})
