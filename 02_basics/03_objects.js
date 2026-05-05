// singleton



Object.create

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Debo",
    "full name":"Debojeet Mitra",
    "mySym": "myKey1",
    age: 22,
    location: "Jaipur",
    email: "debo@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 
// console.log((JsUser.email));
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "debojeet@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

