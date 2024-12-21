const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

_*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*_

     _*${pushname}*_
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      _*ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴘᴀɴʜᴡᴀʀ ᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*_
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

_*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀɴsᴀʀ ᴋɪɴɢ*_

_*┌─〈 ${config.BOT_NAME} 〉─◆*_
*│╭─────────────···▸*
*┴│▸*
*❖│▸* _*ʀᴜɴᴛɪᴍᴇ*_ : ${runtime(process.uptime())}
*❖│▸* _*ᴍᴏᴅᴇ*_ : _*[${config.MODE}]*_
*❖│▸* _*ᴘʀᴇғɪx*_ : _*[${config.PREFIX}]*_
*❖│▸* _*ʀᴀᴍ ᴜsᴇ*_ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* _*ɴᴀᴍᴇ ʙᴏᴛ*_ : _*Pᴀɴʜᴡᴀʀ Mᴅ*_
*❖│▸* _*ᴄʀᴇᴀᴛᴏʀ*_ : _*Aɴsᴀʀ*_
*❖│▸* _*ᴠᴇʀsɪᴏɴs*_ : _*ᴠ.2.0.0*_
*❖│▸* _*ᴍᴇɴᴜ ᴄᴍᴅ*_ : _*ᴍᴇɴᴜ ʟɪsᴛ*_
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*

*╭────❒⁠⁠⁠⁠* _*📥 DOWNLOADER-CMD 📥*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ғʙ <ᴜʀʟ>*_

*┋* _*🇵🇰💀.ɪɴꜱᴛᴀ <ᴜʀʟ>*_

*┋* _*🇵🇰💀.ᴠɪᴅᴇᴏ <ᴜʀʟ>*_

*┋* _*🇵🇰💀.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*_

*┋* _*🇵🇰💀.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*_

*┋* _*🇵🇰💀.ᴛᴛ<ᴜʀʟ>*_

*┋* _*🇵🇰💀.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*_

*┋* _*🇵🇰💀.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*_

*┋* _*🇵🇰💀.ᴘʟᴀʏ <ᴜʀʟ>*_

*┋* _*🇵🇰💀.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*_

*┋* _*🇵🇰💀.ᴠɪᴅᴇᴏ <ᴜʀʟ>*_

*┋* _*🇵🇰💀.ɪᴍɢ <ϙᴜᴇʀʏ>*_

*┋* _*🇵🇰💀.ᴀᴘᴋ <ɴᴀᴍᴇ>*_

*┋* _*🇵🇰💀.ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*_

*┋* _*🇵🇰💀.ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*🔎 SEARCH-CMD 🔍*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ʏᴛꜱ  <ᴛᴇxᴛ>*_

*┋* _*🇵🇰💀.ʟᴏʟɪ <ᴛᴇxᴛ>*_

*┋* _*🇵🇰💀.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*_

*┋* _*🇵🇰💀.ɪᴍɢ <ᴛᴇxᴛ>*_

*┋* _*🇵🇰💀.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*🧠 AI-CMD 🧠*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ɢᴘᴛ <ᴛᴇxᴛ>*_

*┋* _*🇵🇰💀.ᴀɪ <ᴛᴇxᴛ>*_

*┋* _*🇵🇰💀.ᴜʀʟ <ᴘɪᴄ ᴀɴᴅ ᴠɪᴅᴇᴏ>*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*👨‍💻 OWNER-CMD 👨‍💻*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*_

*┋* _*🇵🇰💀.ᴏᴡɴᴇʀ*_

*┋* _*🇵🇰💀.ʀᴇᴘᴏ*_

*┋* _*🇵🇰💀.ꜱʏꜱᴛᴇᴍ*_

*┋* _*🇵🇰💀.ꜱᴛᴀᴛᴜꜱ*_

*┋* _*🇵🇰💀.ʙʟᴏᴄᴋ*_

*┋* _*🇵🇰💀.ᴜɴʙʟᴏᴄᴋ*_

*┋* _*🇵🇰💀.sʜᴜᴛᴅᴏᴡɴ*_

*┋* _*🇵🇰💀.ᴄʟᴇᴀʀᴄʜᴀᴛs*_

*┋* _*🇵🇰💀.sᴇᴛᴘᴘ*_

*┋* _*🇵🇰💀.ʙʀᴏᴀᴅᴄᴀsᴛ*_

*┋* _*🇵🇰💀.ᴊɪᴅ*_

*┋* _*🇵🇰💀.ɢᴊɪᴅ*_

*┋* _*🇵🇰💀.ʀᴇꜱᴛᴀʀᴛ*_

*┋* _*🇵🇰💀.ɢɪᴛᴄʟᴏɴᴇ*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*👥 GROUP-CMD 👥*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*_

*┋* _*🇵🇰💀.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*_

*┋* _*🇵🇰💀.ᴀᴅᴅ*_

*┋* _*🇵🇰💀.ᴋɪᴄᴋ*_

*┋* _*🇵🇰💀.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*_

*┋* _*🇵🇰💀.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*_

*┋* _*🇵🇰💀.ᴘʀᴏᴍᴏᴛᴇ*_

*┋* _*🇵🇰💀.ᴅᴇᴍᴏᴛᴇ*_

*┋* _*🇵🇰💀.ᴛᴀɢᴀʟʟ*_

*┋* _*🇵🇰💀.ɢᴇᴛᴘɪᴄ*_

*┋* _*🇵🇰💀.ɪɴᴠɪᴛᴇ*_

*┋* _*🇵🇰💀.ʀᴇᴠᴏᴋᴇ*_

*┋* _*🇵🇰💀.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*_

*┋* _*🇵🇰💀.ᴀʟʟʀᴇǫ*_

*┋* _*🇵🇰💀.ᴍᴜᴛᴇ*_

*┋* _*🇵🇰💀.ᴜɴᴍᴜᴛᴇ*_

*┋* _*🇵🇰💀.ʟᴏᴄᴋɢᴄ*_

*┋* _*🇵🇰💀.ᴜɴʟᴏᴄᴋɢᴄ*_

*┋* _*🇵🇰💀.ʟᴇᴀᴠᴇ*_

*┋* _*🇵🇰💀.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*_

*┋* _*🇵🇰💀.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*_

*┋* _*🇵🇰💀.ᴊᴏɪɴ*_

*┋* _*🇵🇰💀.ʜɪᴅᴇᴛᴀɢ*_

*┋* _*🇵🇰💀.ɢɪɴғᴏ*_

*┋* _*🇵🇰💀.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*_

*┋* _*🇵🇰💀.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*_

*┋* _*🇵🇰💀.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*_

*┋* _*🇵🇰💀.sᴇɴᴅᴅᴍ*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*📃 INFO-CMD 📃*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ᴍᴇɴᴜ*_

*┋* _*🇵🇰💀.ᴍᴇɴᴜ2*_

*┋* _*🇵🇰💀.ᴍᴇɴᴜ3*_

*┋* _*🇵🇰💀.ᴀʙᴏᴜᴛ*_

*┋* _*🇵🇰💀.sᴄʀɪᴘᴛ*_

*┋* _*🇵🇰💀.ʀᴇᴘᴏ*_

*┋* _*🇵🇰💀.ᴀʟɪᴠᴇ*_

*┋* _*🇵🇰💀.ʙᴏᴛɪɴꜰᴏ*_

*┋* _*🇵🇰💀.ꜱᴛᴀᴛᴜꜱ*_

*┋* _*🇵🇰💀.ꜱᴜᴘᴘᴏʀᴛ*_

*┋* _*🇵🇰💀.ᴘɪɴɢ*_

*┋* _*🇵🇰💀.ᴘɪɴɢ2*_

*┋* _*🇵🇰💀.ꜱʏꜱᴛᴇᴍ*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*🎡 CONVERTER-CMD 🎡*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.sᴛɪᴄᴋᴇʀ*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*⛱️ RANDOM-CMD ⛱️*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ᴋɪɴɢ*_

*┋* _*🇵🇰💀.ᴅᴏɢ*_

*┋* _*🇵🇰💀.ᴀɴɪᴍᴇ*_

*┋* _*🇵🇰💀.ᴀɴɪᴍᴇɢɪʀʟ*_

*┋* _*🇵🇰💀.ᴀɴɪᴍᴇɢɪʀʟ1*_

*┋* _*🇵🇰💀.ᴀɴɪᴍᴇɢɪʀʟ2*_

*┋* _*🇵🇰💀.ᴀɴɪᴍᴇɢɪʀʟ3*_

*┋* _*🇵🇰💀.ᴀɴɪᴍᴇɢɪʀʟ4*_

*┋* _*🇵🇰💀.ᴀɴɪᴍᴇɢɪʀʟ5*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*🏜️ WALLPAPERS-CMD 🏜️*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ɪᴍɢ*_

*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* _*🌐 OTHER-CMD 🌐*_ *❒⁠⁠⁠⁠* 

*┋* _*🇵🇰💀.ᴛʀᴛ*_

*┋* _*🇵🇰💀.ᴊᴏᴋᴇ*_

*┋* _*🇵🇰💀.ᴍᴏᴠɪᴇ*_

*┋* _*🇵🇰💀.ꜰᴀᴄᴛ*_

*┋* _*🇵🇰💀.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*_

*┋* _*🇵🇰💀.ɢᴘᴀꜱꜱ*_

*┋* _*🇵🇰💀.ʜᴀᴄᴋ*_

*┋* _*🇵🇰💀.ǫᴜᴏᴛᴇ*_

*┋* _*🇵🇰💀.ꜱʀᴇᴘᴏ*_

*┋* _*🇵🇰💀.ᴅᴇꜰɪɴᴇ*_

*┕───────────────────❒*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

┏━━━━━━━━━━━━━━━━━━━
 _*ᴘᴀɴʜᴡᴀʀ-ᴍᴅ-ʙᴏᴛ*_
_*https://whatsapp.com/channel/0029ValASu1IN9ifummBKW1U*_
┗━━━━━━━━━━━━━━━━━━━


> _*POWERED BY PANHWAR MD*_
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
