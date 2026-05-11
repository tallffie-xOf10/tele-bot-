//user info bot source code
:-
const TelegramBot = require('node-telegram-bot-api');

// আপনার বট টোকেন দিন
const token = '8664180262:AAF3Z424tkMf7qNPnYJAAx1nhVyXm3o72X8';
const bot = new TelegramBot(token, {polling: true});

// আপনার এডমিন ইউজারনেম (অ্যাট @ ছাড়া)
const adminUsername = 'oxifgara'; 

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || "User";
    const username = msg.from.username ? @${msg.from.username} : 'নেই';
    const lang = msg.from.language_code || 'en';

    if (msg.text === '/start') {
        // HTML ফরম্যাট ব্যবহার করা হয়েছে যা Markdown এর চেয়ে বেশি নিরাপদ
        const reply = 
👤 <b>Name:</b> ${firstName}
🆔 <b>Username:</b> ${username}
📱 <b>Chat ID:</b> <code>${chatId}</code>
🉐 <b>Language:</b> ${lang}
----------------------------
🤖 <b>ADMIN:</b> <a href="https://t.me/${adminUsername}">Click to Message</a>
        ;

        bot.sendMessage(chatId, reply, { 
            parse_mode: 'HTML', // এখানে HTML দেওয়া হয়েছে যাতে এরর না আসে
            disable_web_page_preview: true 
        });
    }
});

console.log("Bot is Running...");