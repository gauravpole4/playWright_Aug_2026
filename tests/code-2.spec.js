//C Question 4 — Find the second largest number

let numbers = [10, 5, 20, 8, 15, 20, 3];

let largest = numbers[0];
let secondLargest = numbers[0];

numbers.forEach((num) => {

    if (num > largest) {

        secondLargest = largest;
        largest = num;
    }
    else if (num > secondLargest && num < largest) {
        secondLargest = num

    }

});


console.log(`The second largest number is : ${secondLargest}`)
