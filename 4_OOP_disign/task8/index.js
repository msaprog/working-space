/* eslint-disable no-param-reassign */

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект
// и позволяет обращаться только к "публичным" свойствам и методам.
// При попытке прочитать или перезаписать приватное или несуществующее свойство
// должно выбрасываться исключение.

// BEGIN (write your solution here)

// Ответ для себя нашел - я не вызвал оригинальный "публичный метод",
// оригинального класса в set и ошибочно, считал что все присваиваемые
// значения должны выбрасывать ошибку, хотя это касалось только приватных свойств.

// Вы правы, ошибку нужно выбрасывать только при попытке перезаписать несуществующее
// или приватное свойство, остальные нужно перезаписывать

// В том случае, если значением свойства является функция, нам нужно привязать эту
// функцию к контексту исходного объекта при помощи bind(), а затем вернуть.
// Это позволит вызывать метод в контексте исходного объекта, а не объекта прокси

// Обратите внимание, что на вход в ловушку get приходит имя свойства,
// к которому идет обращение. Это строка, и она не может быть функцией.
// Функцией может быть значение этого свойства в исходном объекте.
// То есть сначала нужно получить значение этого свойства и уже его проверить,
// является ли оно функцией.

// Владислав, когда есть "матрёшка" объектов, то вызов метода на верхнем объекте
// приводит к обращению объекту верхнего уровня.И если там не было getName(),
// то оно упадёт с ошибкой.Поэтому до того, как отдать свойство наружу,
// надо через typeof проверить - это метод или нет
// и отдать его либо со связыванием, либо без.

export default (obj) => {
  // console.log(`obj - ${JSON.stringify(obj)}`);

  const checkProp = (prop) => (prop.slice(0, 1) === '_');

  const secret = new Proxy(obj, {
    set(target, prop, value) {
      // если свойство есть в объекте, proxy позволяет нам его переписать
      // console.log(`target - ${JSON.stringify(target)}, prop - ${prop}, value - ${value}`);
      if (checkProp(prop)) {
        // console.log(`Сработала защита - ${prop}, first - ${prop.slice(0, 1)}`);
        throw new Error(`Cannot write '${prop}'`);
      }
      if (prop in target) {
        // console.log(`value - ${value}`);
        // const newTarget = obj.prop.bind(prop);
        // console.log(`Защита пройдена - ${newTarget.value}`);
        target[prop] = value;
        // при успешной записи, метод set() должен вернуть true (target[prop])
        return true;
        // return true;
      }
      // если свойства нет в объекте, то выбросится ошибка, либо можем вернуть false
      throw new Error(`Cannot rewrite non-existed property '${prop}'`);
    },
    get(target, prop) {
      if (checkProp(prop)) {
        // console.log(`Сработала защита prop - ${prop}`);
        throw new Error(`Cannot write '${prop}'`);
      }
      if (prop in target) {
        if (typeof (target[prop]) === 'function') {
          console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! prop fun - ${target[prop]}`);
          const newTarget = obj[prop].bind(obj[prop]);
          // newTarget.bind(newTarget);
          console.log(`44444444444444 - ${typeof (newTarget) === 'function'}`);
          console.log(`newTarget[prop] - ${newTarget}`);
          return newTarget;
          // при успешной записи, метод get() должен вернуть значение
        }
        // console.log(`2222222222222222222222222222222222  prop fun - ${prop}`);
        return target[prop];
      }
      // если свойства нет в объекте, то выбросится ошибка, либо можем вернуть false
      throw new Error(`Cannot rewrite non-existed property '${prop}'`);
    },

  });
  return secret;
};
// END
