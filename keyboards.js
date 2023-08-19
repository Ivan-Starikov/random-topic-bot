import { Keyboard } from 'telegram-keyboard';

export const showKeybord = () => {
  return Keyboard.reply([
    ['Get a new topic']
  ]);
}
