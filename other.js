// bot.hears(/\/forecast (\S+) (\S+)/, async ({ match, reply }) =>
//     reply(await weather.getForecastMessage(match[1], match[2], weather.daysEnum.TOMORROW)));

// bot.hears(/\/help/, ({ reply }) =>
//     reply(templates.help));

// bot.on("text", async (ctx) => {
//   // Explicit usage
//   await ctx.telegram.sendMessage(
//     ctx.message.chat.id,
//     `Hello ${ctx.from.first_name}`
//   );
// bot.action("dog", async (ctx) => {
//     await ctx.reply(`Hello this is dog`);
//   });

//   // method that returns image of a cat

//   bot.action("cat", async (ctx) => {
//     await ctx.reply(`Hello this is cat`);
//   });

//   // Using context shortcut
//   // await ctx.reply(`Hello ${ctx.state.role}`);
// });

// const animalMessage = `great, here are pictures of animals you would love`;
//   ctx.deleteMessage();
//   bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
//     reply_markup: {
//       inline_keyboard: [
//         [
//           {
//             text: "dog",
//             callback_data: "dog",
//           },
//           {
//             text: "cat",
//             callback_data: "cat",
//           },
//         ],
//       ],
//     },
//   });
