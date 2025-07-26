let player1 = prompt("Enter paper rock or scissor")
let player2 = prompt("Enter paper rock or scissor")


if (player1 === player2){
    alert("tie")
}
else if ( player1 === "paper"){
    if (player2 === "rock"){
        alert("player1 won")
    }
    else  {
        alert("player2 won")
    }

}else if (player1 === "scissor"){
    if (player2 === "paper"){
        alert("player1 won")
    }

    else{
        alert("player2 won")
    }
}else if (player1 === "rock"){
    if (player2 === "paper"){
        alert("player2 won")
    }else{
        alert("player1 won")
    }
}else{
    alert("incorrect operation")
}