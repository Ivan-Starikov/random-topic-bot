import Markup from 'telegraf/markup';

export function showKeybord() {
  return Markup.keyboard([
      ['Get a new topic'],
  ]).extra().resize();
};
