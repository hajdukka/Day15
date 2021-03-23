const sum = (num1, num2) => {
  "use strict";
  if (num2 > 1) {
    let zbir = num1 + num2;
    return zbir;
  } else {
    num2 = 1;
    let zbir = num1 + num2;
    return zbir;
  }
};
console.log(sum(4, 6));
console.log(sum(3));
module.exports = sum;
