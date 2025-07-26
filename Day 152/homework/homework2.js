let num = Number (prompt("Enter number"))

if (num <= 0 ){
    alert("ცივა და თბილად ჩაიცვი")
}else if (num > 0 && num < 20){
    alert("ძაან არ ცივა")
}else if(num < 35 && num >= 20){
    alert("ცხელა")
}else{
    alert("ძალიან ცხელა")
}
