const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`

*╭━━〔 P A N H W A R - M D 〕━━┈⊷*

*[ •  B O T - O W N E R ‎ • ]*
*╭┈───────────────•*
*│  ◦* *A N S A R - P A N H W A R*
*╰┈───────────────•*

*[ •  PANHWAR-MD - REPO ‎ • ]*
*╭┈───────────────•*
*│  ◦* *https://github.com/Panhwar110/Panhwar-MD*
*╰┈───────────────•*

*[ •  SUPPORT - GROUP‎ • ]*
*╭┈───────────────•*
*│  ◦* *https://whatsapp.com/channel/0029ValASu1IN9ifummBKW1U*
*╰┈───────────────•*
*╰──────────────┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀɴsᴀʀ-ᴘᴀɴʜᴡᴀʀ
*•────────────•⟢*

`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321103874131@newsletter',
      newsletterName: "ᴀɴsᴀʀ-ᴘᴀɴʜᴡᴀʀ",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'PANHWAR MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Panhwar110/Panhwar-MD" ,
thumbnailUrl: "https://i.imgur.com/UfzyhWN.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
