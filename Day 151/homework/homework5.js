let num1 = Number (prompt  ("Enter first number"))

let num2 = Number (prompt  ("Enter second number"))

let op= prompt ( " Enter + - * /")

if (op === "+" ){
    result = num1 + num2
} else if (op === "-"){
    result = num1 - num2
}else if (op === "*"){
    result = num1 * num2 
}else if (op ==="/"){
    result = num1 / num2
}else {
    result = "არასწორი ოპერატორი"
}

alert(result)
