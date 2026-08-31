// first non repeating number
const arr = [4, 5, 1, 2, 1, 4, 5, 3];


const frequency = {}
const counter = []


arr.forEach(num => {

    frequency[num] = (frequency[num] || 0) + 1
    console.log(frequency)



})
for (item in frequency) {
    if (frequency[item] === 1) {
       console.log(item);
        break;
    }
}



console.log(`The first non repeating nos is ${item}`)