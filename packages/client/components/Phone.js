// @flow

import * as React from 'react';

import Keyboard from '../components/Keyboard';
import SuggestCombinations from '../src/SuggestCombinations';

type State = {
  userTyped: string,
  suggestedCombinations: string[],
};


export default class Phone extends React.PureComponent<{}, State> {
  state: State = {
    userTyped: '',
    suggestedCombinations: [],
  };

  _handleInputChange = (newValue: string) => {
    this.setState({ userTyped: newValue }, async () => {
      const combinations = await SuggestCombinations(newValue);
      if (combinations) {
        this.setState({ suggestedCombinations: combinations });
      }
    });
  };

  _handleKeyboardPress = (pressedNumber: number) => {
    this._handleInputChange(this.state.userTyped + String(pressedNumber));
  };

  render = () => (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <div style={{ margin: '20px', width: '252px' }}>
        <input
          type="number"
          value={this.state.userTyped}
          onChange={event => this._handleInputChange(event.currentTarget.value)}
          style={{
            borderColor: '#eee',
            borderWidth: '1px',
            fontSize: '40px',
            width: '246px',
            margin: '2px',
          }}
        />
        <Keyboard onPress={number => this._handleKeyboardPress(number)} />
      </div>
      <div style={{ backgroundColor: '#eee', padding: '20px', flexGrow: 4 }}>
        {this.state.suggestedCombinations.join(', ') ||
          'Waiting for your input...'}
      </div>
    </div>
  );
}
