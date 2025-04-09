const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/.*/, (msg) => {
  bot.sendMessage(msg.chat.id, "سلام! این ربات ایران‌فیلمه!");
});
