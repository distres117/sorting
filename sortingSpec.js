var testArr = [5,2,1,3];
var timesRun = 0;
var comparisons = 0;

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles array with multiple elements', function(){
      expect(bubbleSort(testArr)).toEqual([1,2,3,5]);
    });
    it ('correctly reports number of comparisons', function(){
      bubbleSort(testArr);
      expect(swap.timesRun).toEqual(4);
      console.log(bubbleSort.comparisons);
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([1,5,10], [2,3,4,6])).toEqual([1,2,3,4,5,6,10]);
    });
    it('is able to subdivide properly', function(){
      var rtn = splitArr([1,2,3,4,5]);
      expect(rtn[0].length).toEqual(2);
      expect(rtn[1].length).toEqual(3);
    });
});
