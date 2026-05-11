const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

// Render এর Environment Variable থেকে টোকেন নেবে
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

// আপনার এডমিন ইউজারনেম (অ্যাট @ ছাড়া)
const adminUsername = 'oxifgara'; 

// কেউ /start দিলে এই মেসেজ যাবে
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || "User";
    const username = msg.from.username ? `@${msg.from.username}` : 'নেই';
    const lang = msg.from.language_code || 'en';

    if (msg.text === '/start') {
        const reply = `
👤 <b>Name:</b> ${firstName}
🆔 <b>Username:</b> ${username}
📱 <b>Chat ID:</b> <code>${chatId}</code>
🉐 <b>Language:</b> ${lang}
----------------------------
🤖 <b>ADMIN:</b> <a href="https://t.me/${adminUsername}">Click to Message</a>
        `;

        bot.sendMessage(chatId, reply, { 
            parse_mode: 'HTML',
            disable_web_page_preview: true 
        });
    }
});

// Render-এর জন্য ভুয়া সার্ভার তৈরি (যাতে Failed Deploy না দেখায়)
http.createServer((req, res) => {
    res.write('Bot is running online!');
    res.end();
}).listen(process.env.PORT || 3000);

console.log("বট সচল আছে...");
