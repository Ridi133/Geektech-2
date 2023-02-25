// 1) Написать функцию, которая принимает 2 параметра (числа) и возвращает в консоли самый минимальный из них.

let numeq = Number(prompt("Введите число"));
let numeq2 = Number(prompt("Введите число"));
function min(numeq, numeq2) {
    if (numeq > numeq2) {
        console.log(numeq2 + "smaller");
    }
    else if (numeq < numeq2) {
        console.log(numeq + "smaller");  
    }
    else if (numeq == numeq2) {
        console.log("equal");
        
    }
    else{
        console.log("error");
    }
    
}
min(numeq, numeq2);

// 2) Написать функцию которая принимает 1 параметр в который попадает promt() и вернуть длину строки в консоли.

let stroka = prompt("Введите строку");
function stlength (stroka) {
    console.log("Длина строки " + stroka.length);
}

stlength(stroka);

// 3) Написать простой калькулятор при помощи функции и его параметров. Функция должна уметь вычислять: деление "/",  умножение "*", вычитание "-", сложение "+"

let num = Number(prompt("Введите число"));
let symbol = prompt("Введите символ");
let num2 = Number(prompt("Введите число"));

function calc(num, symbol, num2) {
    if(symbol === "+"){
        console.log(num + num2)
    }
    else if(symbol === "-"){
        console.log(num - num2)
    }
    else if(symbol === "*"){
        console.log(num * num2)
    }
    else if(symbol === "/"){
        if(num2 == 0){
            console.log("на ноль делить нельзя")
        }
        else{
            console.log(num / num2)
        }
    }
    else{
        console.log("попробуйте ещё раз")
    }
}
calc(num, symbol, num2);