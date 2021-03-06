// Компонентный подход

// Каждый компонент(TypeScript класс) должен быть реализован в отдельной папке, в директории родителя или другой логически обоснованной директории.
// Компонент является изолированным и может быть повторно использован. Все что может быть компонентом, должно им быть.
// Компонент не должен быть громоздким, многофункциональным или стремиться к абсолютной автономности.
// Если возможно выносить в сервисы, в константные файлы или в отдельный компонент все подходящие блоки.







// TypeScript

// Названия переменных и стилей должны быть обоснованы логически и полностью описывать их действия в своем блоке
// Переменные, существующие только внутри блока не обязаны быть подробно описаны, так как должно быть понятно, что происходит в блоке.
// Все переменные в JavaScript именуются с помощью нотации Camel Case и всегда начинаются с маленькой буквы.
// Функции и функциональные выражения также пишутся с маленькой буквы.
// Классы именуются по такому же принципу, но первая буква – заглавная.
// Константы пишутся всеми заглавными буквами через «_».
// Типизация должна быть, как можно точнее.
// Переменные, задействованные только внутри своего блока стоит объявлять с помощью оператора «let»
// Избегать необоснованных пропусков, пробелов и переносов строк.
// По максимуму использовать ES6. Спрэд-операторы, стрелочные функции, import/export и т.п.
// Использовать механизм pipes для повторного использования подходящих действий.






// Стили

// Названия стилей должны быть обоснованы логически и полностью описывать их в своем блоке
// Классы стоит называть по методологии БЭМ(BEM): блок__элемент_модификатор, это позволит избежать наложений стилей из разных блоков, облегчит поддержку кода и, при использовании препроцессора ускорит написание.(Если блок или элемент состоят из двух слов и более их стоит разделять «-» и писать с маленькой буквы.
// Повторяющиеся стили выносятся в специальный файл, откуда потом наследуются.
// Все переменные выносятся в отдельный файл.
