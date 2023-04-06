// @ts-check
/* eslint-disable import/prefer-default-export */
import fsp from 'fs/promises';

// BEGIN (write your solution here)
export const reverse = (filename) => {
  fsp.readFile(filename, 'utf-8')
    .then((content) => {
      console.log(content);
    });
};
// END

reverse('file.txt');
// two
// one