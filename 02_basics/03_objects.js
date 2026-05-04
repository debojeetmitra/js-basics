// singleton



Object.create

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Debo",
    "full name":"Debojeet Mitra",
    [mySym]: "myKey1",
    age: 22,
    location: "Jaipur",
    email: "debo@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 
console.log((JsUser.email));
console.log(JsUser["email"])
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
