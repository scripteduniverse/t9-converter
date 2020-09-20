// @flow

const keyboard = [
  [], // 0
  [], // 1
  ['a', 'b', 'c'], // 2
  ['d', 'e', 'f'], // 3
  ['g', 'h', 'i'], // 4
  ['j', 'k', 'l'], // 5
  ['m', 'n', 'o'], // 6
  ['p', 'q', 'r', 's'], // 7
  ['t', 'u', 'v'], // 8
  ['w', 'x', 'y', 'z'], // 9
];


/**
 * @see https://en.wikipedia.org/wiki/Cartesian_product
 *
 * Input:
 * ['a', 'b', 'c']
 * ['d', 'e', 'f']
 *
 * Output:
 * [ 'aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc' ]
 */
const cartesianProduct = (
  leftArray: string[],
  rightArray: string[],
): string[] =>
  [].concat(
    ...leftArray.map(leftArrayElement =>
      rightArray.map(rightArrayElement => leftArrayElement + rightArrayElement),
    ),
  );

module.exports = (...pressedNumbers: number[]): string[] => {
  const relevantGroups = pressedNumbers
    .map(number => keyboard[number])
    .filter(element => element.length > 0);

  if (relevantGroups.length === 0) {
    // there is nothing to do (pressed "0" or "1")
    return [];
  }

  // combines multiple arrays from left to right using Cartesian product
  return relevantGroups.reduce((acc, curVal) => cartesianProduct(acc, curVal));
};
