// function CreateCalcFunction (n) {
//     return function (){
//         console.log (1000 * n);
//     }
// }

// const calc = CreateCalcFunction(42);
// calc();


// function createIncrementor(n) {
//     return function (num) {
//         return n + num;
//     }
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));

// function vladMultiplyingBy (n){
//     return function (num){
//         return n * num
//     }
// }

// const multipliedBy3 = vladMultiplyingBy(3);

// console.log(multipliedBy3(33))


// function urlGenerator (domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator("com");


// const uaUrl = urlGenerator("ua");

// console.log(uaUrl("kozak"));
// console.log(uaUrl("kalina"));



// console.log(comUrl("JavaScript"));
// console.log(comUrl("google"));
// console.log(comUrl("twitch"));
// console.log(comUrl("codewars"));


// function vBind (obj, fn){
//     return function (...args){
//         return fn.apply(obj, args);
//     }
// }

// dog = {name : "Coco", legs : 4, tail : 1, bark : "bark-bark"};
// person = {momCalled: "Vlad", job: "none=(", married: "yes"}

// function logDog () {
//     console.log(`Info about our dog: her name is ${this.name = "some"}, she has ${this.legs} legs and ${this.tail} tail, she barks like this "${this.bark}" `)
// }

// vBind(person, logDog)();


 //                                     Замикання = ефект якого можна досягти, якщо створити функцію, яка повертає іншу функцію, але з урахуванням аргументів, які були передані у верхню функцію. Після декларації такої дворівневої функції, ми можемо створити змінну, яка викликає верхню функцію з певним аргументом, дана змінна по факту буде повертати нам функцію, яку ми можемо викликати пізніше, якщо потрібно з додаванням інших аргументів. Але саме ця змінна "замкне" в собі аргумент, який був застосований при створенні цієї змінної. Оскільки ця змінна буде функцією, аргумент "замкнеться" в функції.