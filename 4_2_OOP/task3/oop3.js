#!/usr/bin/env node

/* const make = (numer, denom) => {
  const obj = {
    setNumer() {
      this.numer = numer;
    },
    setDenom() {
      this.denom = denom;
    },
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.numer}/${this.denom}`;
    },
    add() {
      // Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
      return this;
    },
  };
  obj.numer = numer;
  obj.denom = denom;
  return obj;
};

const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
console.log(`${rat1.getNumer()}`); // 3
console.log(`${rat1.getDenom()}`); // 8

const rat2 = make(10, 3);

console.log(`${rat2.getNumer()}`);
console.log(`${rat2.getDenom()}`);

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
rat3.toString(); // '89/24' */
