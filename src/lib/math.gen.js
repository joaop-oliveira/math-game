const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const OPERATORS = ['+', '-'];

const randomItem = item => item[Math.floor(Math.random() * item.length)];

const randomNumber = lvl => {
  let output = '';
  for (let i = 0; i < lvl; i++) {
    output = output + randomItem(NUMBERS).toString();
  }
  return output;
};

const numberEngine = lvl => {
  switch (lvl) {
    case 1:
      return randomNumber(lvl);
    case 2:
      return randomNumber(lvl);
    case 3:
      return randomNumber(lvl);
    default:
      console.log('under development!');
  }
};

const challengeGenerator = lvl => {
  switch (lvl) {
    case 1:
      return `${numberEngine(1)} ${randomItem(OPERATORS)} ${numberEngine(1)}`;
    case 2:
      return `(${numberEngine(1)} ${randomItem(OPERATORS)} ${numberEngine(1)}) ${randomItem(OPERATORS)} ${numberEngine(
        lvl
      )}`;
    case 3:
      return `(${numberEngine(1)} ${randomItem(OPERATORS)} ${numberEngine(1)}) ${randomItem(OPERATORS)} (${numberEngine(
        1
      )} ${randomItem(OPERATORS)} ${numberEngine(1)})`;
    default:
      console.log('under development!');
  }
};

export default challengeGenerator;
