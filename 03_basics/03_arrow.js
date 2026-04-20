//1. The this Keyword: "Current Context"
// What it is: The this keyword refers to the current context, telling the code which values or variables to look at right now
// ,
// .
// In Objects: Inside an object, this helps you access its properties. For example, this.username refers to the username within that specific object's scope
// ,
// .
// Context Changes: If you change a value (like a username), this will pick up the new "current" value because the context has changed
// ,
// .
// 2. Global Context: Node vs. Browser
// In Node.js: If you print this globally (outside any function/object), you get an empty object {} because there is no global context yet
// .
// In Browsers: If you print this globally, you get the Window object. This is the most common global object in a browser environment
// .
// 3. Arrow Functions: Syntax and Returns
// Arrow functions were introduced in ES6 (2015) to make writing functions simpler
// ,
// .
// Basic Syntax: Remove the function keyword and use an arrow => after the parentheses
// ,
// .
// Explicit Return: If you use curly braces { }, you must use the return keyword
// .
// Implicit Return: If it is a one-line function, you can skip the curly braces and the return keyword. The code "assumes" you want to return that line
// .
// Returning Objects: To return an object implicitly, you must wrap the object in parentheses ( ), like this: () => ({username: "hitesh"})
// .
// 4. this in Functions
// In regular functions, this behaves differently than in objects. Often, trying to use this.username inside a standalone function will result in undefined because the function doesn't have its own "context" in the same way an object does
// ,
// .
// While many people say arrow functions "don't have this," it is more accurate to say they handle context differently than regular functions
// .
// Quick Recall Tip:
// Curly braces { } = Must use return.
// Parentheses ( ) = No return needed



const user = {
    username: "debojeet",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "debo"
//     console.log(this.username);
    
// }

// chai()

//  const chai = function(){
//      let username = "debo"
//      console.log(this.username);
    
//  }

// chai()


const chai = () => {
    let username = "debo"
    console.log(this.username);
    
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"Debo"})

console.log(addTwo(3, 4));


