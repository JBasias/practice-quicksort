
//function Pivot()


function quicksort(A) {

  //console.log(A);

  if(A.length <=1) return A;


  let piv = A[0]; let L=[]; let R=[];


  for(let i=1;i<A.length ;i++)
  {

    if(A[i]<piv) L.push(A[i]);
    else R.push(A[i]);

  }

  //console.log(L + " -- " + piv + " ---" + R)

  const sortedL = quicksort(L);
  const sortedR = quicksort(R);

  return sortedL.concat([piv], sortedR);

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick the first value as the pivot

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order

}




module.exports = [quicksort];
