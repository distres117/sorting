function bubbleSort(arr, count){
count = count || 0;
  var swapped = false;
  for(var i=0;i<arr.length - count;i++){
    bubbleSort.comparisons++;
    if (arr[i] > arr[i+1]){
      swap.call(arr,i, i+1);
      swapped = true;
    }
  }
  count++;
  if (swapped)
    bubbleSort(arr,count);
  return arr;
}

function swap(n1,n2){
    var oldN1 = this[n1];
    this[n1] = this[n2];
    this[n2] = oldN1;
    swap.timesRun++;

}

swap.timesRun = 0;
bubbleSort.comparisons = 0;

function mergeSort(arr1,arr2,rtn){
  rtn = rtn || [];
  if (rtn.length === 4)
    return rtn;
  if (arr1[0] > arr2[0])
    rtn.push(arr2.shift());
  else
    rtn.push(arr1.shift());
  return mergeSort(arr1, arr2, rtn);

}

function splitArr(arr){
  var length = Math.floor(arr.length /2);
  return [arr.splice(0, length), arr];
}
