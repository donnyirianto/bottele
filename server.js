import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.TOKEN);
bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Selamat datang, EDP REGIONAL IV - BA Notification",
    {}
  );
});
bot.on("text", async (ctx) => {
  // Explicit usage
  await ctx.telegram.sendMessage(
    ctx.message.chat.id,
    `Hello ${ctx.from.first_name}`
  );

  // Using context shortcut
  // await ctx.reply(`Hello ${ctx.state.role}`);
});
bot.hears("animals", (ctx) => {
  console.log(ctx.from);
  const animalMessage = `great, here are pictures of animals you would love`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "dog",
            callback_data: "dog",
          },
          {
            text: "cat",
            callback_data: "cat",
          },
        ],
      ],
    },
  });
});

// method that returns image of a dog

bot.action("dog", async (ctx) => {
  await ctx.reply(`Hello this is dog`);
});

// method that returns image of a cat

bot.action("cat", async (ctx) => {
  await ctx.reply(`Hello this is cat`);
});
bot.launch();
console.log("Bot EDP REGIONAL IV - BA Notification is running");
