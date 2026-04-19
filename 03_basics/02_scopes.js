
// Here are the most important points about JavaScript Scope in a shorter format:
// Scope Definition: Scope determines where a variable is available, usually marked by curly braces {} in functions or if-else blocks
// .
// Global Scope: Code written outside curly braces is "global." These values can be accessed inside any block
// .
// Block Scope: Code inside the curly braces is "local." Variables declared here should stay inside and not be accessible from the outside
// .
// The Problem with var: You should avoid var because it does not respect block scope. It "leaks" out of the block, which can cause bugs and overwrite other variables by accident
// .
// Use let and const: These are preferred because they are block-scoped. They stay independent of the global scope, keeping your code safe from unexpected changes
// .
// Environment Matters: Note that the global scope is different when you run code in a web browser versus a Node.js environment




// a= 300

// if (true) {

//     let a = 10
//     const b = 20
//     //  c = 30
//     console.log("Inner:",a);
    
// }


// // console.log(a);
// //console.log(b);
// console.log(a);



// Here are the key points from the video regarding JavaScript scope and hoisting:
// Scope Definition: In JavaScript, curly braces {} (used in functions, if-else statements, or loops) define a scope
// . Variables declared inside these blocks should not "leak" out or be accessible from the outside
// .
// The "Ice Cream" Analogy: In nested scopes, child functions can access variables of their parent function, but parents cannot access variables of their children
// . It is like a child being able to take ice cream from an adult, but not the other way around
// .
// Block Scope in if-else: Similar to functions, variables declared inside an if block are restricted to that block
// . Attempting to access them outside results in an error
// .
// Function Declarations vs. Expressions:
// Standard Declaration: Functions declared normally (e.g., function addOne() {}) can be called before they are defined in the code
// .
// Function Expressions: When a function is assigned to a variable (e.g., const addTwo = function() {}), it cannot be called before its declaration, as this will trigger an error
// .
// Introduction to Hoisting: This difference in how JavaScript treats declarations versus variables during the creation of the execution context is a fundamental part of hoisting
// .




// function one(){
//     const username = "debojeet"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
    
//     two()
// }

// one()


if(true){
    const username = "debojeet"
    if(username === "debojeet"){
        const website = " youtube"
        //console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


//    INTERESTING


console.log(addone(5));


function addone(num){
    return num + 1
}


// hoisting
addTwo(3)
const addTwo = function(num){
    return num + 2
}
