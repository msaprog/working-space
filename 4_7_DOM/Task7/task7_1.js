// @ts-check

// BEGIN (write your solution here)
export default (document) => {
  const wrap = (noda, text) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const pText = document.createTextNode(text);
    p.appendChild(pText);
    div.appendChild(p);
    noda.replaceWith(div);
  };

  const divs = document.querySelectorAll('div'); // getElementsByTagName('div');
  divs.forEach((elDiv) => {
    const childElDiv = elDiv.childNodes;
    return [...childElDiv]
      .filter((node) => {
        // console.log(`node - ${node}, node.textContent - ${node.textContent},
        // node.textContentTrim() - ${node.textContent.trim()}`);
        const nodeText = node.textContent.trim();
        if (node instanceof Text && nodeText !== '') {
          console.log(`node.textContent instanceof Text true - ${node instanceof Text && nodeText !== ''}`);
          return true;
        }
        console.log(`node.textContent instanceof Text false - ${node instanceof Text && nodeText !== ''}`);
        return false;
      })
      .map((nodeText) => {
        console.log(`elDiv - ${elDiv}, elDiv.textContent - ${elDiv.textContent}, nodeText - ${nodeText}, nodeText.textContent - ${nodeText.textContent}`);
        return wrap(elDiv, nodeText.textContent);
      });
  });
};
// END
