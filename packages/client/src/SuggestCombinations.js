// @flow

// import fetch from 'isomorphic-fetch';

export default async (userTyped: string): Promise<null | string[]> => {
  const res = await fetch('http://127.0.0.1:3000/', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query($numbers: [Int!]!) {
          combinations(pressedNumbers: $numbers)
        }
      `,
      variables: {
        numbers: userTyped.split(''),
      },
    }),
  });

  const { data: { combinations }, errors } = await res.json();
  if (res.status !== 200) {
    // TODO: propagate to the UI (?)
    console.error(res.statusText);
    console.error(errors);
    return null;
  }

  return combinations;
};
