//Question 6 — Count the frequency of each element.
let numbers = [1, 2, 2, 3, 1, 4, 2, 3, 5];

let count = 0
let frequency = {} //we want to store as an object



numbers.forEach((num) => {

    if (frequency[num]) {
        frequency[num]++

    } else {
        frequency[num] = 1
    }

}
)

for (let num in frequency) {
    console.log(`${num} → ${frequency[num]}`);
}




