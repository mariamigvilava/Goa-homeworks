// მომხმარებელს შემოატანინეთ ქულა 100-მდე. თუ შემოტანილი ქულა მეტია 95-ზე alert-ში გამოიტანეთ 'A', თუ 80-ზე მეტია და 95-ზე ნაკლები მაშინ B, 75-80-მდე 'C', 70-75-მდე "D". თუ 70-ზე ნაკლებია მაშინ F.


let num = Number (prompt( "Enter number"))

if (num >= 95 && num < 100){
    alert('A')
}else if (num < 95 && num  > 80){
    alert('B')
}else if (num > 75 && num <= 80 ){
    alert( 'c')
}else if (num >= 70 && num < 75 ){
    alert('D')
}else
{
    alert('F')

}
    


    
    
