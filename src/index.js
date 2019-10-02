module.exports = function zeros(expression) {
  expression = expression.split("*");
  let countTwo = 0;
  let countFive = 0;

  expression.forEach(element => {
    let step = element.includes("!!") ? 2 : 1;
    let numElement = parseInt(element);

    while (numElement > 0) {
      
      let thisNum = numElement;
      while (thisNum % 5 === 0) {
        countFive++;
        thisNum = thisNum / 5;
      }

      thisNum = numElement;
      while (thisNum % 2 === 0) {
        countTwo++;
        thisNum = thisNum / 2;
      }

      numElement -= step;
    }
  });
  return Math.min(countFive, countTwo);
};
