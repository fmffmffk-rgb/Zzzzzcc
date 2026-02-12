const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7779321083:AAGXCUcSsATm1AH83ef7XExnLx3CaBSS7hE";
const CHAT_ID = "7177443691";

const app = express();
app.use(express.json());

const bot = new TelegramBot(TOKEN, { polling: true });

// لما شخص يدخل الموقع
app.post("/visit", (req, res) => {
  bot.sendMessage(CHAT_ID, "🚨 شخص دخل إلى الموقع");
  res.sendStatus(200);
});

// أمر من تيليجرام لإرسال إشعار
bot.onText(/\/send/, (msg) => {
  bot.sendMessage(msg.chat.id, "📲 تم إرسال الإشعار للمستخدم");
  // هنا نرسل إشارة للموقع (سنبسطها لاحقًا)
});

app.listen(3000, () => console.log("Server running on 3000"));
