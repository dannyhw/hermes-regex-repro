import {Text} from 'react-native';
import React from 'react';

const MESSAGE_REPEAT_AMOUNT = 1000;

const MESSAGE_TO_REPEAT = `Labore ad cupidatat dolor dolor officia consectetur voluptate veniam aute nisi fugiat pariatur. Tempor culpa quis non duis cillum. Aliquip enim consectetur commodo occaecat commodo id deserunt exercitation magna dolor elit in duis culpa. Esse aliqua excepteur ipsum non non occaecat voluptate et consequat veniam aliquip qui ipsum.`;
const LONG_MESSAGE = MESSAGE_TO_REPEAT.repeat(MESSAGE_REPEAT_AMOUNT);

export default () => {
  // @ts-ignore (hermes internal global variable not in global type)
  const isHermes = !!global.HermesInternal;
  console.error(LONG_MESSAGE);
  return (
    <Text style={{marginTop: 80}}>is it hermes? {isHermes ? 'yes' : 'no'}</Text>
  );
};
