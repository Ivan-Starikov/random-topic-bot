import express from 'express';
import * as dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { getRandomTopic } from './topics.js';
import { showKeybord } from './keyboards.js'

dotenv.config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('The bot is running')
})

bot.hears('Get a new topic', ctx => {
  ctx.reply(getRandomTopic());
});

bot.hears('Delete a topic', ctx => {
  ctx.reply('Delete');
});

bot.start(ctx => {
  ctx.reply('welcome!', showKeybord());
});

bot.launch();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

