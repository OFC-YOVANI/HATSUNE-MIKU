import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
//let vn = './media/naa.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `â­ââãððððððð ðððð-ðððãâââ·
â â¥â­ââââââââââââââ   
â â¥âà¹Û£ÛÍ¡ÍÛðð¨ð¥ðà¦à§£Í¡Íá·Ö³á· ${taguser} ðâ¨ 
â â¥â ð ðµð´ð²ð·ð°: ${week}, ${date}
â â¥âððð¸ð´ð¼ð¿ð¾ ð°ð²ðð¸ðð¾: ${uptime}
â â¥âð ðððð°ðð¸ð¾ð: ${rtotalreg}
â â¥â°âââââââââââ
â°ââââââââââââââ·
â­ââãððð_ðððð_ðððãâââ·
â â¥â­ââââââââââââââ 
â â¥âãð½ðð¼ð´ðð¾ ð³ð´ð ð¼ð¸ ð²ðð´ð°ð³ð¾ðã
â â¥âââï¸http://wa.me/5212411719888
â â¥âãðððððððð: ðððð¢ :ã
â â¥ââðhttps://youtu.be/HoxZuQokeMM
â â¥âãð¶ð¸ð ð²ð»ð¾ð½ð´ã
â â¥ââð±git clone https://github.com/OFC-YOVANI/HADES-BOT-MD.git
â â¥âãðð«ð®ð©ð¨ ðð ðððððð¨ð¨ð¤:ã
â â¥ââðhttps://www.facebook.com/groups/987464505464904/
â â¥âãÑÑÎ½ÑâÎ±Â¢Î¹ÃÐ¸:ã
â â¥âââ¨https://chat.whatsapp.com/LGvb0X9GJM0LXE6yvWIE6x
â â¥âãðð´ððð¸ð³ð¾ð ð³ð´ ð¼ð¸ð½ð´ð²ðð°ðµð ã
â â¥ââðhttp://add.aternos.org/YOVANIBOT
â â¥âãðððð_ðððã
â â¥âââï¸https://github.com/OFC-YOVANI/HATSUNE-MIKU.git
â â¥ââð§¿ððððððð§¿
â â¥âðhttps://vm.tiktok.com/ZMFPmR8y9/
â â¥â°âââââââââââ
â°ââââââââââââââ·`.trim()
let buttons = [
{ buttonId: '/donar', buttonText: { displayText: 'ððððð' }, type: 1 },
{ buttonId: '/yovani', buttonText: { displayText: 'ðððððððð' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'âððððððð ðððð-ðððð',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[âððððâ] ð´ð» ð¼ð´ð½ð ðð¸ð´ð½ð´ ðð½ ð´ððð¾ð ð ð½ð¾ ðµðð´ ð¿ð¾ðð¸ð±ð»ð´ ð´ð½ðð¸ð°ðð»ð¾, ðð´ð¿ð¾ððð´ð»ð¾ ð°ð» ð¿ðð¾ð¿ð¸ð´ðð°ðð¸ð¾ ð³ð´ð» ð±ð¾ð*', m)
}}
handler.command = /^cuentasoficiales|cuentasoficiales\$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
