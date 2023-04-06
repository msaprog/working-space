// @ts-check
/* eslint-disable import/prefer-default-export */
import fsp from 'fs/promises';

// отлажен, работает. Для возврата промиса необходим первый return.

// BEGIN (write your solution here)
export const reverse = (fileName) => {
  return fsp.readFile(fileName, 'utf-8')
    .then((content) => {
      console.log
      console.log('------------текст--------------------');
      console.log(content);
      console.log('------------перевёртыш--------------------');
      const newContent = content.split('\n').reverse().join('\n');
      console.log(newContent);
      console.log('------------имя файла--------------------');
      console.log(fileName);
      return fsp.writeFile(fileName, newContent);
    });
};
// END

console.log(reverse('./__fixtures__/example9'));


/* fs.readFile(filename, 'utf-8')
  .then((content) => {
    return fs.unlink(filename).then(() => {
      return content;
    });
  })
  .then((content) => {
  // где-то тут создаем новый файл, с обновленным контентом
  });
 */

/* export const reverse = (fileName) => {
  fsp.readFile(fileName, 'utf-8')
    .then((content) => content.split('\n').reverse().join('\n'))
    .then((newContent) => fsp.writeFile(fileName, newContent));
}; */

/* .then((newContent) => {
  return fsp.writeFile(fileName, newContent).then(() => {
    return newContent;
  });
}); */

/* .then((newContent) => {
  fsp.writeFile(fileName, newContent)
    .then(() => newContent);
}); */

/* export const reverse = (fileName) => {
  fsp.readFile(fileName, 'utf-8')
    .then((content) => content.split('\n').reverse().join('\n'))
    .then((newContent) => { return fsp.writeFile(fileName, newContent) });
}; */
