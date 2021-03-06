describe('Selection Sort', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough()
  })

  // checks that selectionSort can handle an empty array
  it('handles an empty array', function() {
    expect(selectionSort([])).toEqual([])
  })

  // check how many times swap is called on an empty array
  it('calls swap zero times in an empty array', function() {
    selectionSort([])
    expect(swap.calls.count()).toEqual(0)
  })

  // test case for single items
  it('can handle an array of a single item', function() {
    expect(selectionSort([ 1 ])).toEqual([ 1 ])
  })

  // check how many times swap is called on an array of 1 number
  it('calls swap zero times in an array of 1', function() {
    selectionSort([ 1 ])
    expect(swap.calls.count()).toEqual(0)
  })

  it('sorts an array with elements', function() {
    expect(selectionSort([ 1, 3, 2, 5, 4 ])).toEqual([ 1, 2, 3, 4, 5 ])
  })

  it('swaps an array with multiple elements the correct number of times', function() {
    selectionSort([ 1, 3, 2, 5, 4 ])
    expect(swap.calls.count()).toEqual(2)
  })

  // test case for multiple items
  it('can handle an array of multiple items', function() {
    expect(selectionSort([ 1, 5, 3, 4, 2 ])).toEqual([ 1, 2, 3, 4, 5 ])
  })

  // check how many times swap is called on an array of 5 numbers
  it('calls swap multiple times in an array of 5', function() {
    selectionSort([ 1, 5, 3, 4, 2 ])
    expect(swap.calls.count()).toEqual(1)
  })

  it('swaps the expected number of times', () => {
    selectionSort([ 8, 3, 7, 1, 5 ])
    expect(swap.calls.count()).toEqual(3)
  })
})
