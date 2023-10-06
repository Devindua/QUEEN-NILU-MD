/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;knQSWQ7J#vhV6Ka2RzsF9mFOWNM5oYAi0VIRAwjF53tIdg7v4LoE' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://devindu_user:gP0axixzX3lths3qEyE8HxEs9TWPkAEq@dpg-ckg1s36ct0pc739kpapg-a.frankfurt-postgres.render.com/devindu'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94705754420'

global.OWNER_NAME = 'Devindu_X'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝙳𝙴𝚅𝙸𝙽𝙳𝚄 𝙱𝙾𝚃'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@𝙳𝙴𝚅𝙸𝙽𝙳𝚄 🤹‍♂️' //sticker

global.FOOTER = '𝙳𝙴𝚅𝙸𝙽𝙳𝚄 𝙰𝙱𝙴𝚈𝙽𝙰𝚈𝙰𝙺𝙰'

global.LANG = 'SI' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '© `𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝙴𝚅𝙸𝙽𝙳𝚄 𝙱𝙾𝚃´' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'true' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/DzBCnbNXbarLLq1rWUjLj3' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: DEVINDUBRO" //ur yt chanel name
global.socialm = "GitHub: DEINDUBRO" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

