// მომხმარებელს შემოატანინეთ ორი რიცხვი და შეასრულეთ ყველა მოქმედება. (+, -, *, /, **, % ) და alert-ში გამოიტანეთ შედეგი ასეთი სახით. 'ჯამი არის: {ჯამი}'

let num =  Number (prompt("Enter Number"));
let num2 =  Number (prompt("Enter Number"));

alert ("ჯამი არის" + String( num + num2 ));
alert(" სხვაობა არის" +String(num - num2 ));
alert("ნამრავლი არის" + String(num * num2));
alert("გაყოფის შედეგი არის" + String(num / num2));
alert("ხარისხში  აყვანის შედეგი არის " + String(num ** num2 ));
alert("ნაშთის არის"+ String(num % num2));



