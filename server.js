import dotenv from "dotenv";
import { Telegraf } from "telegraf";
// eslint-disable-next-line import/no-unresolved
import * as cron from "node-cron";
import * as Modules from "./modules/index.js";

dotenv.config();

const bot = new Telegraf(process.env.TOKEN);

bot.command("start", (ctx) => {
  console.log(ctx.message.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Selamat datang, EDP REGIONAL IV - BA Notification",
    {}
  );
});

bot.hears(/\/help/, async (ctx) => {
  console.log(ctx);
  const resMessage = `
    🚩 Silahkan reply dengan salah satu format di bawah ini:
    1. List BA ber-schedule - in progress => /ba KODECABANG
    2. Last 20 History BA - (Approve) => /hisba KODECABANG
    3. Pending BA => /pendingba KODECABANG
  `;

  await ctx.reply(resMessage);
});

bot.hears(/\/ba (\S+)/, async (ctx) => {
  const kdcab = ctx.match[1];
  const data = await Modules.dataBaAktif(kdcab);
  const pesan = `📚 List BA Aktif Hingga Hari ini \nCabang - ${kdcab} \n${data.join(
    "\n"
  )}`;
  bot.telegram.sendMessage(process.env.IDGROUP, pesan, {
    parse_mode: "Markdown",
  });
});

bot.hears(/\/hisba (\S+)/, async (ctx) => {
  const kdcab = ctx.match[1];
  const resMessage = `Last 20 History BA - (Approve) :: Cabang${kdcab}`;
  ctx.reply(resMessage);
});

bot.hears(/\/pendingba (\S+)/, async (ctx) => {
  const kdcab = ctx.match[1];
  const resMessage = `Pending BA :: Cabang ${kdcab} `;
  ctx.reply(resMessage);
});

cron.schedule("00 6,7,8 * * *", async () => {
  const data = await Modules.dataBaAktif("REG4");
  const pesan = `🔔 Reminder BA Aktif Hingga Hari ini: \n${data.join("\n")}`;
  bot.telegram.sendMessage(process.env.IDGROUP, pesan, {
    parse_mode: "Markdown",
  });
});

cron.schedule("00 6,7,8,15,16 * * *", async () => {
  const data = await Modules.dataBaNonAktif("REG4");
  const pesan = `🔔 Reminder BA Non Aktif Per Hari ini: \n${data.join("\n")}`;
  bot.telegram.sendMessage(process.env.IDGROUP, pesan, {
    parse_mode: "Markdown",
  });
});

bot.launch();
console.log("Bot EDP REGIONAL IV - BA Notification is running");
