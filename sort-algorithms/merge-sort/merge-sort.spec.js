describe('Merge Sort', function() {
  it('is able to merge and sort an array of a single number', function() {
    expect(mergeSort([ 1 ])).toEqual([ 1 ])
  })

  it('is able to merge and sort an array of multiple numbers', function() {
    expect(mergeSort([ 1, 3, 6, 2, 7, 4, 8, 5 ])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  })

  describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([ 1, 2, 3, 4, 5, 6, 7, 8 ])).toEqual([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ])

      expect(split([ 1, 2, 3, 4, 5, 6, 7 ])).toEqual([ [ 1, 2, 3 ], [ 4, 5, 6, 7 ] ])
    })
  })

  describe('Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
      expect(mergeSort([ 1, 3, 6, 2, 7, 4, 8, 5 ])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8 ])
    })
  })
})
