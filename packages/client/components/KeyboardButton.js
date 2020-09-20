// @flow

import * as React from 'react';

type Props = {
  character: string,
  onPress: number => void,
  lettersGroup?: string,
};

const style = {
  container: {
    border: 'none',
    borderRadius: '2px',
    color: '#fff',
    fontSize: '20px',
    background: '#3498db',
    padding: '5px 20px 5px 20px',
    margin: '2px',
    textDecoration: 'none',
    width: '80px',
    height: '70px',
    textAlign: 'center',
    float: 'left',
  },
  lettersGroup: {
    fontSize: 'smaller',
    fontWeight: 100,
  },
};

export default ({ character, onPress, lettersGroup }: Props) => (
  <button
    style={style.container}
    value={character}
    onClick={event => onPress(event.currentTarget.value)}
  >
    {character}
    {lettersGroup && <div style={style.lettersGroup}>{lettersGroup}</div>}
  </button>
);
