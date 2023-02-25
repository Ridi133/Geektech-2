// 1.  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите в консоль только те числа из массива, которые начинаются на цифру 1, 2 или 5.

var numbers = [10, 20, 30, 50, 235, 3000];

for (var i = 0; i < numbers.length; i++) {
  var num = String(numbers[i]);
  var char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}

// 2.  При помощи цикла выводить цифры в убывающем порядке от 20 до 0 

for(j = 20; j > -1; j--){
    console.log(j);
}

// 3.  Написать светофор используя условную конструкцию (if else или switch case).

var enterColor = prompt("Введите Красный, Жёлтый или Зелёный");

function trafficLight() {
    switch (enterColor) {
        case "Красный":
            alert("стоп");
            break;
        case "Жёлтый":
            alert("подождите");
            break;
        case "Зелёный":
            alert("движение разрешенно");
            break;
        default:
            alert("ТОЛЬКО ЦВЕТА (Красный, Жёлтый, Зелёный.)");
            break;
    }
}
trafficLight();