/**
 * @param {string} caption
 * @return {string}
 */

// this is my solution (beats 86.67% and memory 100.00%)
var generateTag = function(caption) {
    let captionArray = caption.trim().split(" ")
    const first = captionArray.shift()
    for(let index = 0; index < captionArray.length ; index++ ){
        captionArray[index] = `${captionArray[index].trim().charAt(0).toUpperCase()}${captionArray[index].trim().slice(1,captionArray[index].length).toLowerCase()}`
    }
    let result = `#${first.toLowerCase()}${captionArray.join("")}`
    if (result.length > 100) result = result.slice(0,100)
    return result
};
// this is the best solution and runtime :
var generateTag = function(caption) {
    const word = caption.match(/[a-zA-Z]+/g)||[];
    const camel = word.map((w,i)=>!i
        ?w.toLowerCase()
        :w[0].toUpperCase()+w.slice(1).toLowerCase()
    )
    .join('');

    return('#' + camel).slice(0,100);

};
console.log(generateTag(" fPysaRtLQLiMKVvRhMkkDLNedQKffPnCjbITBTOVhoVjiKbfSawvpisDaNzXJctQkn"))