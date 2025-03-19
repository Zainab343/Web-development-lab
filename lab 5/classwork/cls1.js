let age = 25;
console.log(age); // Output: 25

age = 30; // Updating allowed
console.log(age); // Output: 30

if (true) {
    let insideBlock = "Hello";
    console.log(insideBlock); // Output: Hello
}
// console.log(insideBlock); 
var name = "Nayab";
console.log(name); // Output: Nayab

var name = "Ali"; // Redeclaring allowed
console.log(name); // Output: Ali

name = "Sara"; // Updating allowed
console.log(name); // Output: Sara

if (true) {
    var test = "Inside block";
    console.log(test); 
}
//console.log(test); 
const pi = 3.1416;
console.log(pi); // Output: 3.1416

// pi = 3.14;  Error: Assignment to constant variable

if (true) {
    const city = "Lahore";
    console.log(city); // Output: Lahore
}
// console.log(city); //  Error: city is not defined
