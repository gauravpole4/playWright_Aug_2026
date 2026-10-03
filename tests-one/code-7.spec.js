
const numbers = [10, 5, 20, 8, 15];

// print the second largest no

var largNo = numbers[0]
var secondLarNo = numbers[0]


numbers.forEach(num => {
    if(num > largNo ){
        largNo = secondLarNo
        largNo = num
    }

else if( num > secondLarNo && num!== largNo){
    secondLarNo = num

}
})
console.log(`The largest no is : ${largNo}`);
console.log(`The second largest no is : ${secondLarNo}`);
