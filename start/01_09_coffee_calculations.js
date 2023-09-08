// Write your code here
// [2,1,3,5] price per cofee is $1.25 .find the total

function total(arr){
    let totalCoffee= arr.reduce((curr,acc)=>(acc+=curr))
    return `The total bill is $${totalCoffee*1.25}`
}

let arr=[2,1,3,5]
console.log(total(arr))
