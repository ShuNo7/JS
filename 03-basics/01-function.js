function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(7, 10)

// console.log("Result:", result);


function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// sayMyName()

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    else{
    return `${username} just logged in`
    }

}

// console.log(loginUserMessage("aryan"))

const user = {
    username : "Aryan",
    price : "199",
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)

}

// handleObject(user)

handleObject({
    username: "sam",
    price : "230"
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([100, 200, 300, 400]));

