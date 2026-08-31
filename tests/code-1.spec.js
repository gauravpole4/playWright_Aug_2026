// A. Check for Palindrome from an array
let arr = ["121", "hello", "1331", "javascript", "1221", "test"];

for (let str of arr) {

    let reverse = str.split("").reverse().join("");
    //  String → Array → Reverse → String
    if (str === reverse) {
        console.log(str);
    }
}

//B Find duplicate elements
let numbers = [1, 2, 3, 4, 2, 5, 3, 6, 2];

let newArr = [];

numbers.forEach((num, index) => {

    for (let j = 0; j < numbers.length; j++) {

        if (numbers[index] === numbers[j] && index !== j) {

            if (newArr.includes(num)) 
                continue
            else
            newArr.push(num);
        }

    }

});

console.log(newArr);



