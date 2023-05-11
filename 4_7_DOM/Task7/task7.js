// BEGIN (write your solution here)
export const fu = (document) => {
  const wrap = (noda, text) => {
    // создаём новый div
    const div = document.createElement('div');
    // создаём новый p
    const p = document.createElement('p');
    // создаём текстовую ноду
    const pText = document.createTextNode(text);
    // и вставляем его в p (оборачиваем текст в <p>)
    p.appendChild(pText);
    // вставляем p в div (оборачиваем <p> в <div>)
    div.appendChild(p);
    // заменяем div
    noda.replaceWith(div);
  };

  // запускаем обработку каждого div, на входе документ
  const checkDiv = (root) => {
    // получаем все div
    const divs = root.querySelectorAll('div');
    const newDivs = divs.forEach((eachDiv) => { // запускаем обработку каждоогоо div
      // а здесь непосредственно прорверяем
      const iter = (nodaDiv) => { // на входе Div из коллекции
        const children = nodaDiv.childNodes; // формируем перечень детей divа
        children.forEach((child) => { // проверяем каждого из детей
          if (child instanceof Text && child.textContent.trim() !== '') { // здесь проверка на текст
            // console.log(`child Text- ${child}`);
            const textDiv = child.textContent.trim(); // читаем текст div
            console.log(`textContent- ${textDiv}, textContent.length- ${textDiv.length}, Потомки есть - ${child.hasChildNodes()}`);
            // создаём новый div с p и текстом внутри, если есть какие-либо стмволы
            // if (textDiv.length > 1) 
            wrap(nodaDiv, textDiv);
          }
        });
      };
      // запускаем первый щаг
      iter(eachDiv);
    });
    return newDivs;
  };

  return checkDiv(document);
};

export default fu;
// END

// доступ к тексту можно получтить через text.textContent

// Попробуйте получить все текстовые ноды и отфильтровать те, которые после удаления пробельных
// символов содержат пустую строку.А потом уже обойти оставшиеся и обернуть текс в теги < p >

// про текстовые узлы есть подсказка в упражнении,
// а на пустые строки просто нужна проверка !== ''.
// То есть вам нужно предварительно выбрать все непустые текстовые ноды,
// а потом их все обработать.

// Если я правильно понимаю суть вопросов, то вы ожидали,
// что глубокое копирование создаст массив элементов,
// которые не привязаны к DOM - дереву, но это не будет работать.
// Со страницы выбираются все элементы по определённому селектору
// и вне зависимости от того в какой массив они записаны,
// элементы массива всё равно ссылаются на те же элементы того же dom - дерева.
// Можно провести другую аналогию - массив url - ов по которым будут производиться сетевые запросы.
// Сколько не копируй, в конечном счёте запросы будут выполнены к тем же сайтам.

// текстовые узлы создаются при помощи конструктора new Text.
// Да, так тоже можно создать текстовый узел,
// но как правило для создания текстового узла используют специальный
// метод document.createTextNode().

// Было бы проще, если бы вы показали свой код. Сам по себе textContent берёт контент
// не только свой, но и своих потомков, так как потомки также являются частью этой ноды.
// И это логичное поведение. Чтобы отбросить потомков, можно создать функцию, которая
// вытаскивает все childNodes из нужной нам ноды и проверяет значение nodeType.
// Если оно равно трём, то это просто текст, а значит он нам и нужен.
// Собираем все такие ноды в единую строку и получаем необходимый текст без значений
// дочерних элементов.

/* heading = document.createElement("h1");
heading_text = document.createTextNode("Big Head!");
heading.appendChild(heading_text);
document.body.appendChild(heading); */

/* const difsType = Array.from(allDifs).map((el) => {
  if (el.nodeType === 3) return `Это текст - ${el}`;
  return `А это не текст - ${el}`;
}); */

/* // получаем все div
const divs = document.querySelectorAll('div');
// запускаем обработку каждого div

const newDivs = divs.forEach((eachDiv) => {
  const children = eachDiv.childNodes;
  // проверяем каждый узел
  children.forEach((child) => {
    // здесь должна быть проверка на текст
    if (child instanceof Text) {
      console.log(`child Text- ${child}`);
      // читаем текст div
      const textDiv = child.textContent;
      // создаём новый div
      wrap(eachDiv, textDiv);
    } else console.log(`child - ${child}`);
    // }
  });
});

return newDivs; */

/* export const fu = (document) => {
  const wrap = (noda, text) => {
    const div = document.createElement('div');
    // создаём новый p
    const p = document.createElement('p');
    // создаём текстовую ноду
    const pText = document.createTextNode(text);
    // и вставляем его в p (оборачиваем текст в <p>)
    p.appendChild(pText);
    // вставляем p в div (оборачиваем <p> в <div>)
    div.appendChild(p);
    // заменяем div
    noda.replaceWith(div);
  };

  // получаем все div
  const divs = document.querySelectorAll('div');

  // запускаем обработку каждого div, на входе коллекция divов
  const checkDiv = (listDivs) => {
    const newDivs = listDivs.forEach((eachDiv) => {
      const iter = (noda) => {
        const children = noda.childNodes;
        // проверяем каждый узел
        children.forEach((child) => {
          // здесь должна быть проверка на текст
          if (child instanceof Text) {
            // console.log(`child Text- ${child}`);
            // читаем текст div
            const textDiv = child.textContent;
            // создаём новый div
            wrap(eachDiv, textDiv);
          }
        });
      };

      iter(eachDiv);
    });
    return newDivs;
  };

  return checkDiv(divs);
};

export default fu; */
