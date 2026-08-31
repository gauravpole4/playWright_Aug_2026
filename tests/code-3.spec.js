//Question 5 — Find the missing number

let numbers = [1, 2, 3, 4, 5, 6, 7,8,9, 11];
// 4
let missingNo= 0



numbers.forEach((num, index) => {

    if(numbers[index+1] - numbers[index] > 1 ){
        
        missingNo = num+1


    
    }}
)

if (missingNo === 0) {
    console.log("There is no missing number!!");
} else {
    console.log(`The missing number is ${missingNo}`);
}
   // console.log(`The missing number is ${missingNo}`)

