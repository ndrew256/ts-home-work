// let vs var
// also: use ES6 for contrast
var app = function () {
  var withVar = function () {
      for (var index = 0; index < 10; index += 1) {
          setTimeout(function () { return console.log("var idx = " + index); }, 0);
          console.log("var index withOutSetTimeOut = " + index);
      }
  };
  var withLet = function () {
      var _loop_1 = function (index) {
          setTimeout(function () { return console.log("let index = " + index); }, 0);
          console.log("let index withOutSetTimeOut = " + index);
      };
      for (var index = 0; index < 10; index += 1) {
          _loop_1(index);
      }
  };
  withVar();
  withLet();
};
setTimeout(app, 0);
var maxRows = 1000;
//maxRows = 12;
if (100 < maxRows) {
  console.log("It is within range!");
}


// 1. Мы объявляем переменную app и присваиваем ей анонимную функцию
// 2. line 22 - мы объявляем setTimeout и отдаем его нашему WepApi и складываем в Callback Queue
// 3. Мы переходим к if блоку, т.к условие истинно, срабатывает console.log("It is within range!");
// 4. Call stack пуст, поэтому вызывается наша функция app из Callback Queue
// 5. Далее происходит вызов функции withVar();
// 6. После этого мы входим в наш цикл for. setTimeout передается в WepApi и складывается в Callback Queue,
//    в консоль выводится var index withOutSetTimeOut = 0.
// 7. Так происходит 10 раз. Когда цикл закончит свое выполнение наша переменная index будет ровна 10. ЗАПОМНИМ ЭТО!
// 8. Далее происходит вызов функции withLet();
// 9. Мы входим в наш цикл for. Внутри него мы вызываем функцию _loop_1(index). setTimeout передается в WepApi и складывается в Callback Queue,
//    в консоль выводится var index withOutSetTimeOut = 0. Вся суть в том, что на каждой итерации в цикле мы вызываем нашу функцию _loop_1(index)
//    по новой и для каждого setTimeout будет разное значиение переменной index.
// 10. Функция app прекращает свое выполнение. Call Stack пуст и начинается вызов из Callback Queue. Как мы отметили выше, в функции withVar переменная index 
//     сохранила в себе значение 10. Поэтому в консоль 10 раз выведется var idx со значением 10. Продолжается вызов функций из Callback Queue.
//     В консоль выведется 10 раз let index, но значения будут каждый раз разные (от 0 до 9). Объяснение в пункте 9.