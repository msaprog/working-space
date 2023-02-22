const objects = [
  { name: 'Karl' },
  { name: 'Mia' },
];

function each(objS, callBack) {
  console.log(objS);
  console.log(`Контекст - ${this}`);
  // console.log(`Контекст objS - ${this.objS}`);
  console.log();
  /* const print = printer.print;
  print.bind(printer)('hi'); // => "hi, Hexlet"
 */

  /* // func.call([thisArg[, arg1, arg2, ...argN]])
  print.call(printer, 'hi'); // hi, Hexlet
 */
  // console.log(`Вот это да ${callBack.call(this, objS)}`);
  // objS.forEach(callBack());
  // console.log(`Вот это да ${objS.call(objS, forEach(callBack()))}`);
  // console.log(`Вот это да ${objS.forEach.call(objS, callBack())}`);
  // console.log(`Вот это да ${callBack.call(objS).forEach(objS)}`);
  // console.log(`Вот это да ${objS.forEach.call(callBack(), objS)}`);
  // console.log(`Вот это да ${callBack.call(objS, objS.forEach())}`);

  console.log(`Вот это да ${objS.forEach((item) => callBack.call(item))}`);

  /*   function sayHi() {
      return `Hi, ${this.name} ${this.surname}!`;
    };

    console.log(sayHi.call(obj1)); // => Hi, Vasiliy Pupkin!
    console.log(sayHi.call(obj2)); // => Hi, John Smith!
   */

  // const temp = objS.forEach(callBack.call(objS));
}

each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];
