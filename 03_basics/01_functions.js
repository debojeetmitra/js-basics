
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



function calculateCartPrice(val1, val2,...num1){
    return num1
}

//console.log(calculateCartPrice(2,3,4, 3 ,4 ,5));


const user = {
    username: "Debo",
    prices: 200
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and user price is ${anyobject.price}`);
    
}

//handleObject(user)

handleObject({
    username: "debo",
    price: 4000
})



const myNewArray = [200, 300, 400]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue([2,3,4,5,5]))