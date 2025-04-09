require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// نمونه پیام خوش‌آمد
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'سلام! آرمین اینجاست، قراره هر روز فیلم و سریال توپ معرفی کنم!');
});

// تابع شبیه‌سازی ارسال فیلم به کانال
function sendMovieToChannel(movie) {
  const message = `
🎬 *${movie.title}*
📅 سال: ${movie.year}
🌍 ژانر: ${movie.genre}
🗣️ زبان: ${movie.language}
📥 کیفیت‌ها: ${movie.qualities.join(", ")}

${movie.description}

[دانلود با لینک مستقیم](${movie.download_link})
`;
  bot.sendMessage(process.env.CHANNEL_USERNAME, message, { parse_mode: 'Markdown' });
}

// مثال تستی بعد از ۵ ثانیه
setTimeout(() => {
  sendMovieToChannel({
    title: "فیلم تستی دوبله",
    year: "2024",
    genre: "اکشن، درام",
    language: "دوبله فارسی",
    qualities: ["480p", "720p", "1080p"],
    description: "یه فیلم هیجان‌انگیز و خاص که از دستش ندی...",
    download_link: "https://example.com/download"
  });
}, 5000);