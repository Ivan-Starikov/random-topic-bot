import express from "express";
import * as dotenv from "dotenv";
import { Telegraf } from "telegraf";
import { getQuestion } from "./question.js";
import { showKeybord } from "./keyboards.js";

dotenv.config();
const app = express();
const bot = new Telegraf(
  process.env.NODE_ENV === "dev"
    ? process.env.DEV_BOT_TOKEN
    : process.env.BOT_TOKEN,
);

let currentWord;

app.get("/", (req, res) => {
  res.send("The bot is running");
});

bot.hears("Новая тема", async (ctx) => {
  currentWord = await getQuestion();
  await ctx.reply(String(currentWord));
});

bot.start((ctx) => {
  ctx.reply("welcome!", showKeybord());
});

bot.launch();

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`),
);
