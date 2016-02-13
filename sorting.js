function bubbleSort(arr, count){
count = count || 0;
  var swapped = false;
  for(var i=0;i<arr.length - count;i++){
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

}


function merge(left,right){
  var arr = [];
  if (!left.length || !right.length)
    return arr.concat( (!left.length ? right : left) );
  if (left[0] > right[0])
    arr.push(right.shift())
  else 
    arr.push(left.shift())
  return arr.concat(merge(left, right));
  

}

function mergeSort(arr){
  if (arr.length <= 1)
    return arr;
  var length = Math.floor(arr.length /2);
  var left = mergeSort(arr.splice(0, length));
  var right = mergeSort(arr);
  var rtn = merge(left,right);
  return rtn;
}
//Not in-place
// function quickSort(arr){
//   debugger;
//   if (!arr.length)
//     return [];
//   var left = [], right = [], pivot = arr[0];
//   for (var i =1;i<arr.length;i++){
//     if (arr[i]< pivot)
//       left.push(arr[i]);
//     else
//       right.push(arr[i]);
//   }
//   return quickSort(left).concat(pivot,quickSort(right));
// }

//Sort of in place
function quickSort(arr){
  if (!arr.length)
    return arr;
  var pivot = 0;
  for (var i =1;i<arr.length;i++){
    if (arr[i]< arr[pivot])
      swap.call(arr,i,pivot++);
  }
  return quickSort(arr.slice(0, pivot)).concat(arr[pivot],quickSort(arr.slice(pivot+1)));
}

function insertSort(arr){
  for (var i in arr){
    var temp = arr[i];
    for (var j=i-1;j>=0 && (arr[j]>temp); j--)
      arr[j+1] = arr[j];
    arr[j+1] = temp;
  }
  return arr;
}

function heapSort(arr){
  var last = arr.length -1;
  var first = 0;
  while (last-- > first++){
    console.log(last,first);
  }
}