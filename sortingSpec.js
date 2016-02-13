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
  
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([1,5,10], [2,3,4,6])).toEqual([1,2,3,4,5,6,10]);
    });
    
    it('is able to merge sort', function() {
        //spyOn(window, 'merge');
        expect(mergeSort([2,1,5,10,3])).toEqual([1,2,3,5,10]);
        //console.log(merge.callCount);
        
    });
});

describe('Quick sort', function(){
    it('is able to quicksort', function() {
        expect(quickSort([2,1,10,5,3,8,7])).toEqual([1,2,3,5,7,8,10]);
    });
});

describe("Insert sort", function(){
   it('is able to insert sort properly', function(){
      expect(insertSort([2,1,5,10,3])).toEqual([1,2,3,5,10]); 
   });
});

describe("Heap sort", function(){
   it("is able to heap sort", function(){
      expect(heapSort([2,1,5,10,3])).toEqual([1,2,3,5,10]); 
   }); 
});
