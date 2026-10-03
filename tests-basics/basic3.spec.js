//sum of all arrays

const numbers = [10, 20, 30, 40, 50];

let total = numbers.reduce(( total, num)=>{
   return  total + num

}, 0)

console.log(total);

array.reduce((accumulator, currentValue) => {
    return NEW_VALUE;
}, initialValue);