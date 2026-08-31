//Question 7 — Find the first non-repeating character

let str = "swiss"
let newStr = ""
let frequency = {}
//w

for (let j of str) {


    if (frequency[j]) {
        frequency[j]++

    }

    else
        frequency[j] = 1

}

for (let k of str) {
    if (frequency[k] === 1) {
        newStr = k;
        break;
    }
}


console.log(`The first non repeating character is: ${newStr}`);