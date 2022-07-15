/* 
values: Numbers, strings, Booleans, Unary operators
*/

let num1 = 100 + 4 * 11;
let num2 = (100 + 4) * 11;
let words1 = "This is the first line\nAnd this is the second"; //for linebreak
let words2 = "This is the first line\tAnd this is the second"; //for tab
console.log(`This is just a simple arithemetic: ${num1} and ${num2}`);
console.log(`${words1}`);
console.log(`${words2}`);
//concatenation
let words3 = "con" + "cat" + "e" + "nate";
console.log(`${words3}`);
let num3 = `half of 100 is ${100 / 2}`; //using the template literals
console.log(`${num3}`);
console.log(typeof 4.5); //number
console.log(typeof "x"); //string
console.log(typeof(2>1? true: false)); //boolean(understand i also used a tenary operator here)
console.log("Aardvark" < "Zoroaster");
// NULL AND undefine
let words4 = '';
let words5 = undefined;
let words6 = null;
console.log(`empty:${words4} undefine:${words5} null:${words6}`)