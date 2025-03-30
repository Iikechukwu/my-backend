require('dotenv').config();
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Telegram Bot (replace with your bot token from @BotFather)
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Express middleware to parse JSON
app.use(express.json());

// Telegram Bot Logic
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `You said: "${msg.text}"`); // Echo back messages
});

// Optional: Set up a webhook (alternative to polling)
app.post(`/bot${process.env.TELEGRAM_BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.setWebHook(`https://your-render-url.onrender.com/bot${process.env.TELEGRAM_BOT_TOKEN}`);

// Start Express server (for other APIs/webhooks)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});