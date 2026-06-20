var input = readline().split(' ');

let a = parseInt(input[0])
let b = parseInt(input[1])
let n = parseInt(input[2])

function isChampion(a,b,n){
    if(2*(a+n)>=b)return"Yes"
    else return "No"
}

console.log(isChampion(a,b,n))