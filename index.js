"use strict"; // этот код работает в современном режиме
// alert(location.href);
// if (confirm("Перейти на Wikipedia?")) {
// 	location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
//   }


// document.body.style.background = 'red';

// function sayHi() {
// 	alert("Hello");
//   }
  
  // глобальные функции доступны как методы глобального объекта:
//   window.sayHi();

//   alert(window.innerHeight); // внутренняя высота окна браузера


  // заменим цвет фона на красный,
// document.body.style.background = "red";

// а через секунду вернём как было
// setTimeout(() => document.body.style.background = "", 1000);

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// const myBirthday = '18.04.1982';

// let message = 'Hello!'; // определяем переменную и присваиваем ей значение
// alert(message); // Hello!

// let color = COLOR_ORANGE;
// alert(color); // #FF7F00





// alert("Hello World!");

// alert('Привет');
// alert('Мир');


		



// $(function() {
// 	let header = $('.header');
	 
// 	$(window).scroll(function() {
// 	  if($(this).scrollTop() > 1) {
// 	   header.addClass('header_fixed');
// 	  } else {
// 	   header.removeClass('header_fixed');
// 	  }
// 	});
//    });


// function printText() {                   //Определение функции
// 	document.write("Hello World!");        //Тело функции - вывод текста в документ
//   };


// alert("hello world!", "How you doin'?");


// var printText = function(a) {document.write(a);};

// var printText = function(a) {document.write(a);} ("Hello World!");

// var printText = function() {document.write("hi");} ();

// var printText = (function(a) {document.write(a);}("Hello World!"));




// var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
// console.log(factorial(3));
// console.log(" ");

// console.log(factorial(4));
// console.log(" ");

// console.log(factorial(5));
// console.log(" ");

// console.log(factorial(6));


















/* test 1 */

// function my_function(n) {
// 	let str = n;
// 	if (n > 1)
// 		str = my_function(n - 1) + ' ' + str;
// 	return str;
// }

// function my_function2(number) {
//     if (number === 1)
// 		return number.toString();   //Прекращение рекурсии

//     return my_function(number - 1) + ` ${number}`;
// }

// function my_function3(n) {
//     if (n <= 1)
// 		return 1;
//     return my_function(n - 1) + " " + n;
// }

// function my_function4(n) {

// 	if (n > 0) {
// 		if (n == 1) {
// 			return n;
// 		} else {
// 			return "" + my_function(n - 1) + " " + n;
// 		}
// 	} else if (n == 0) {
// 		return n;
// 	} else {
// 		if (n == -1) {
// 			return n;
// 		} else {
// 			return "" + my_function(n + 1) + " " + n;
// 		}
// 	}
// }


// var newStr = my_function(9);
// console.log(newStr);

// var newStr = my_function2(9);
// console.log(newStr);

// var newStr = my_function3(9);
// console.log(newStr);

// var newStr = my_function4(9);
// console.log(newStr);


/* test 2 */

// var textString = "Hello world!";
// console.log(textString.toLowerCase()); 





/* test 3 */

// var person = {
// 	name : "Ivan",
// 	age : 25,
// 	hiredYear : 2017
// }
	
// person.sayAll = function() {
// 	for (var i in this) {
// 		console.log(i + " is " + this[i]);
// 	}
// }
// person.sayAll(); 




// var person = {
// 	name : "Ivan",
// 	age : 25,
// 	hiredYear : 2017
//    }
   
//    person.sayAll = function() {
// 	 for (var i in this) {                                           
// 	   if (!(this[i] instanceof Function))           // Если this[i] не принадлежит типу Function
// 	   console.log(i + " is " + this[i]);   // <br>  -  переход на новую строку
// 	 }
//    }
//    person.sayAll(); // Результат:  name is Ivan
					//             age is 25
					//             hiredYear is 2017



		