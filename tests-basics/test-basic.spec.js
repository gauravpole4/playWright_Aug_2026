// mostr frequent element
const arr = [1, 2, 3, 2, 4, 2, 5, 3, 2, 6 , 6, 6, 6];

let count = {}

let highestCount = 0;
let mostFrequent = null;

arr.forEach(item => {

    count[item] = (count[item] || 0) + 1

});

for (item in count) {

    if (count[item] >= highestCount) {
        highestCount = count[item]
            mostFrequent = item
        
    }
}

console.log(count)
console.log(`The highestCount no is ${highestCount}`)
console.log(`The frequency is ${mostFrequent}`)