/**
 * @param {number[]} arr
 */

// IMP
// first approach (slow)

var minimumAbsDifference = function(arr) {
    const sorted = arr.sort((a,b)=>a-b)
    const hash = new Map()
    let min = Infinity;
    for(let i = 0; i < sorted.length-1; i++){
        if(Math.abs(sorted[i]-sorted[i+1]) < min) min = Math.abs(sorted[i]-sorted[i+1])
        if(!hash.has(Math.abs(sorted[i]-sorted[i+1]))){
            hash.set(Math.abs(sorted[i]-sorted[i+1]),[])            
        }
        hash.set(Math.abs(sorted[i]-sorted[i+1]),[...hash.get(Math.abs(sorted[i]-sorted[i+1])), [sorted[i],sorted[i+1]]])
    }
    return hash.get(min)
};

/**
 * @param {number[]} arr
 */

// second approach (faster)

var minimumAbsDifference = function(arr) {
    const sorted = arr.sort((a,b)=>a-b)
    let min = Infinity;
    for(let i = 0; i < sorted.length-1; i++){
        if(Math.abs(sorted[i]-sorted[i+1]) < min) min = Math.abs(sorted[i]-sorted[i+1])
    }
    let result = [];
    for(let i = 0; i < sorted.length-1; i++){
        if(Math.abs(sorted[i]-sorted[i+1]) === min) result.push([sorted[i],sorted[i+1]])
    }
    return result
};
console.log(minimumAbsDifference([4,2,1,3]))
console.log(minimumAbsDifference([1,3,6,10,15]))

// better
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
   arr = arr.sort((a,b)=>a-b)

   let minDiff = Infinity
    let result = []
   for(let i=1 ; i<arr.length ; i++){
         let diff = arr[i]-arr[i-1]
         if(diff<minDiff){
            result = [];
            minDiff = diff
         }
         if(minDiff === diff){
            result .push([arr[i-1],arr[i]])
         }
   }
   return result;
};

// best 
var partition = function(arr, low, high) {
    const pivot = arr[high]
    let i = low - 1
    for (let j = low; j <= high; j++) {
        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    
    return i
}

var quickSort = function(arr, low, high) {
    if (low < high) {
        const pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
    }
}

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    quickSort(arr, 0, arr.length - 1)
    
    let minDiff = Infinity
    for (let i = 1; i < arr.length; i++) {
        const a = arr[i - 1]
        const b = arr[i]
        
        minDiff = Math.min(minDiff, b - a)
    }
    
    console.log(arr, minDiff)
    
    const result = []
    for (let i = 1; i < arr.length; i++) {
        const a = arr[i - 1]
        const b = arr[i]
        
        if (b - a === minDiff) result.push([a, b])
    }
    
    return result
};