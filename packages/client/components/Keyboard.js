// @flow

import * as React from 'react';

import Button from './KeyboardButton';

const Row = ({ children }: { children: React.Node }) => (
  <div style={{ clear: 'both' }}>{children}</div>
);

export default ({ onPress }: { onPress: number => void }) => (
  <div>
    <Row>
      <Button character="1" onPress={onPress} />
      <Button character="2" onPress={onPress} lettersGroup="abc" />
      <Button character="3" onPress={onPress} lettersGroup="def" />
    </Row>
    <Row>
      <Button character="4" onPress={onPress} lettersGroup="ghi" />
      <Button character="5" onPress={onPress} lettersGroup="jkl" />
      <Button character="6" onPress={onPress} lettersGroup="mno" />
    </Row>
    <Row>
      <Button character="7" onPress={onPress} lettersGroup="pqrs" />
      <Button character="8" onPress={onPress} lettersGroup="tuv" />
      <Button character="9" onPress={onPress} lettersGroup="wxyz" />
    </Row>
    <Row>
      <Button character="*" onPress={() => {}} />
      <Button character="0" onPress={onPress} />
      <Button character="#" onPress={() => {}} />
    </Row>
  </div>
);
