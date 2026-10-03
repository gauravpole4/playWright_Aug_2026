//Question 9 — Find the largest word in a sentence
let str = "I am learning JavaScript for automation testing ";

//JavaScript
let longestWord = ""
const arrStr = str.split(' ')

for (let word of arrStr) {

    if (word.length > longestWord.length) {
        longestWord = word;
    }
}

console.log(longestWord)

//console.log(arrStr)


//Reverse a string
//Question 10 — Reverse a string without using reverse()


let s1 = "JavaScript";
let reverse = "";

for (let j = s1.length - 1; j >= 0; j--) {
    reverse += s1[j];
}

console.log(reverse);