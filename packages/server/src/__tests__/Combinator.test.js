// @flow

import Combinator from '../Combinator';

it('works with zero and one', () => {
  expect(Combinator(0)).toMatchSnapshot();
  expect(Combinator(1)).toMatchSnapshot();
});

it('works with one number', () => {
  expect(Combinator(2)).toMatchSnapshot();
});

it('works with two same numbers', () => {
  expect(Combinator(2, 2)).toMatchSnapshot();
});

it('works with two different numbers', () => {
  expect(Combinator(2, 3)).toMatchSnapshot();
});


it('works with three different numbers', () => {
  expect(Combinator(2, 3, 4)).toMatchSnapshot();
});

it('works with two different numbers with different lengths of letter groups', () => {
  // 2: a, b, c
  // 7: p, q, r, s
  expect(Combinator(2, 7)).toMatchSnapshot();
});

it('works with all the numbers', () => {
  expect(Combinator(8, 0, 1, 9, 2, 3, 7, 4, 5, 6)).toMatchSnapshot();
});
