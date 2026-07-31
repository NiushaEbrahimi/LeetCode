/**
 * @param {number[]} arr
 * @return {number}
 */

// TODO: the algorythm is right ( try again )

var longestMountain = function(arr) {
    let count  = 0;
    let max = 0;
    let i = 0;
    while(arr[i] > arr[i+1]) i++
    while(i+1 < arr.length){
        console.log("hello")
        console.log(i)
        console.log(arr[i])
        while(arr[i] === arr[i+1]) i++
        while(arr[i] < arr[i+1]){ i++; count++}
        if(arr[i]===arr[i+1]){
            count = 0;
        }else{
            while(arr[i] > arr[i+1]){ i++; count++}
            count++
            console.log(count)
            if(count > max) {max = count; count = 0;}
        }
    }
    return max
};
console.log(longestMountain([2,1,4,7,3,2,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3]))
console.log(longestMountain([2,2,2]))

// best answer

/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  // 1. A valid mountain needs at least 3 elements:
  //    one increasing side, one peak, and one decreasing side.
  if (!arr || arr.length < 3) {
    return 0;
  }

  // 2. This will store the longest mountain length we find.
  let maxLength = 0;

  // 3. I start at index 1 because the first and last elements cannot be peaks.
  let i = 1;

  // 4. We scan while i can still be a valid peak candidate.
  while (i < arr.length - 1) {
    // 5. A peak must be strictly greater than both neighbors.
    //    Equal values do not count because mountains must be strictly increasing then strictly decreasing.
    if (isPeak(arr, i)) {
      // 6. Once I find a peak, I expand left to find where the increasing slope starts.
      let left = i - 1;

      while (left > 0 && arr[left - 1] < arr[left]) {
        left--;
      }

      // 7. I also expand right to find where the decreasing slope ends.
      let right = i + 1;

      while (right < arr.length - 1 && arr[right] > arr[right + 1]) {
        right++;
      }

      // 8. Now left and right represent the full boundaries of this mountain.
      const currentLength = right - left + 1;

      // 9. I update the best answer seen so far.
      maxLength = Math.max(maxLength, currentLength);

      // 10. Since I already processed this entire mountain,
      //     I can jump i to the right boundary instead of rechecking every point inside it.
      i = right;
    } else {
      // 11. If this index is not a peak, move forward and keep searching.
      i++;
    }
  }

  // 12. If no mountain was found, maxLength remains 0.
  return maxLength;
};

/**
 * Helper function to make the main loop easier to read.
 *
 * @param {number[]} arr
 * @param {number} index
 * @return {boolean}
 */
function isPeak(arr, index) {
  // 1. A peak is strictly greater than the value before it
  //    and strictly greater than the value after it.
  return arr[index - 1] < arr[index] && arr[index] > arr[index + 1];
}