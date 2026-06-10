/**
 * A sentence consists of lowercase letters ('a' to 'z'),
 * digits ('0' to '9'), hyphens ('-'), punctuation marks
 * ('!', '.', and ','), and spaces (' ') only. Each sentence
 * can be broken down into one or more tokens separated by one
 * or more spaces ' '.
 * A token is a valid word if all three of the following are true:
 * It only contains lowercase letters, hyphens, and/or
 * punctuation (no digits).There is at most one hyphen
 *  '-'. If present, it must be surrounded by lowercase
 * characters ("a-b" is valid, but "-ab" and "ab-" are
 * not valid).There is at most one punctuation mark 
 * If present, it must be at the end of the token
 * ("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid).
 * Examples of valid words include "a-b.", "afad", "ba-c", "a!", and "!".
 * Given a string sentence, return the number of valid
 *  words in sentence.
 * 
 * @param {string} sentence
 * @return {number}
 */

// this is my solution with runtime : 30.30%
// i had regex in mind but wanted to not use it :)
var countValidWords = function(sentence) {
    const wordsArray = sentence.split(" ")
    let valid = 0;
    for(let word of wordsArray){
        if(word===""){
            continue
        }
        let validWord = true
        if(word[0]==="-" || word[(word.length)-1]==="-"){
            continue
        }
        let numberOfHiphen = 0 ;
        for(let index =0 ; index < word.length; index++){
            if(word[index]==="-"){
                if( word.charCodeAt(index-1)>=97 && word.charCodeAt(index-1)<=122 
                    &&
                    word.charCodeAt(index+1)>=97 && word.charCodeAt(index+1)<=122
                ){
                    numberOfHiphen++
                    if(numberOfHiphen>1){
                        validWord = false
                    }
                }else{
                    validWord = false
                }
            }
            if(word.charCodeAt(index)>=48 && word.charCodeAt(index)<=57 ){
                validWord = false
            }
            if(index!==(word.length-1) && ".,!".includes(word[index])){
                validWord = false
            }
        }
        if(!validWord){
            continue
        }
        valid++
    }
    return valid
};

// best solution:
var countValidWords = function(sentence) {
    const regex = /^[a-z]*([a-z]-[a-z])?[a-z]*[!.,]?$/;
    const words = sentence.split(" ");
    let validCount = 0;
    for(const word of words){
        if(word !== "" && regex.test(word.trim())){
            validCount++;
        }
    }
    return validCount;
};

console.log(countValidWords(" 62   nvtk0wr4f  8 qt3r! w1ph 1l ,e0d 0n 2v 7c.  n06huu2n9 s9   ui4 nsr!d7olr  q-, vqdo!btpmtmui.bb83lf g .!v9-lg 2fyoykex uy5a 8v whvu8 .y sc5 -0n4 zo pfgju 5u 4 3x,3!wl  fv4   s  aig cf j1 a i  8m5o1  !u n!.1tz87d3 .9    n a3  .xb1p9f  b1i a j8s2 cugf l494cx1! hisceovf3 8d93 sg 4r.f1z9w   4- cb r97jo hln3s h2 o .  8dx08as7l!mcmc isa49afk i1 fk,s e !1 ln rt2vhu 4ks4zq c w  o- 6  5!.n8ten0 6mk 2k2y3e335,yj  h p3 5 -0  5g1c  tr49, ,qp9 -v p  7p4v110926wwr h x wklq u zo 16. !8  u63n0c l3 yckifu 1cgz t.i   lh w xa l,jt   hpi ng-gvtk8 9 j u9qfcd!2  kyu42v dmv.cst6i5fo rxhw4wvp2 1 okc8!  z aribcam0  cp-zp,!e x  agj-gb3 !om3934 k vnuo056h g7 t-6j! 8w8fncebuj-lq    inzqhw v39,  f e 9. 50 , ru3r  mbuab  6  wz dw79.av2xp . gbmy gc s6pi pra4fo9fwq k   j-ppy -3vpf   o k4hy3 -!..5s ,2 k5 j p38dtd   !i   b!fgj,nx qgif "))