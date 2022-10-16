import dotenv from "dotenv";
import { Telegraf } from "telegraf";

dotenv.config();

const bot = new Telegraf(process.env.TOKEN);
bot.command("start", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Selamat datang, EDP REGIONAL IV - BA Notification",
    {}
  );
});

bot.hears(/\/help/, async (ctx) => {
  console.log(ctx.from);
  const resMessage = `
    🚩 Silahkan reply dengan salah satu format di bawah ini:
    1. List BA dalam progress => /ba
    2. History BA => /hisba KODECABANG

  `;

  await ctx.reply(resMessage);
});

bot.hears("ba", async (ctx) => {
  const resMessage = `List BA in Progress`;
  ctx.reply(resMessage);
});

bot.hears(/\/hisba (\S+)/, async (ctx) => {
  const kdcab = ctx.match[1];
  const resMessage = `Last History - 20 BA Cabang ${kdcab} `;
  ctx.reply(resMessage);
});

// method that returns image of a dog

bot.launch();
console.log("Bot EDP REGIONAL IV - BA Notification is running");
