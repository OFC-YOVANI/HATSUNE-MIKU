import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './src/Miku/Hola.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/CD6MbGV.jpeg')).buffer()
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
let str = `β­βγπππππππ ππππ-πππγ
β β₯β­ββββββββββββββ      
β β₯βΰΉΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· ${taguser}πβ¨ 
β β₯ββππππππ ππππππ ${uptime}
β β₯βππππππ ${week}, ${date}
β β₯βπππππππππ ${rtotalreg}
β β₯βπ€΄πππππππ πππ πππ 
β β₯βhttp://wa.me/5212411719888  
β β₯β°βββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----πππππππππ----β¦Ώ
β β₯β­βββββββββββββ
β β₯β/Hades
β β₯β/Miku
β β₯β/canta miku
β β₯β/canta miku2
β β₯β/instagramβenlaceβlink
β β₯β/mediafireβenlaceβlink
β β₯β/gitcloneβenlaceβlink
β β₯β/gdriveβenlaceβlink
β β₯β/tiktokβenlaceβlink
β β₯β/xvideosdlβenlaceβlink
β β₯β/twitterβenlaceβlink
β β₯β/Facebookβenlaceβlink
β β₯β/ytmp3βenlaceβlink
β β₯β/ytmp4βenlaceβlink
β β₯β/ytmp3docβenlaceβlink
β β₯β/ytmp4docβenlaceβlink
β β₯β/stickerpackβenlaceβlink
β β₯β/playβtexto
β β₯β/play.1βtexto
β β₯β/play.2βtexto
β β₯β/playdocβtexto
β β₯β/playlistβtexto
β β₯β/playlist2βtexto
β β₯β/spotifyβtexto
β β₯β/stickerlyβtexto
β β₯β/ringtoneβtexto
β β₯β/soundcloudβtexto
β β₯β/imagenβtexto
β β₯β/pinteretβtexto
β β₯β/wallpaperβtexto
β β₯β/wallpaper2βtexto
β β₯β/pptiktokβnombre de usuario
β β₯β/igstalkβnombre de usuario
β β₯β/igstoryβnombre de usuario
β β₯β/tiktokstalkβusername
β β₯β°ββββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----ππππππππ----β¦Ώ
β β₯β­βββββββββββββ
β β₯β/emojimixβemoji 1β&βemoji 2
β β₯β/attpβtexto
β β₯β/ttpβtexto
β β₯β/patβ@tag
β β₯β/slapβ@tag
β β₯β/kissβ@tag
β β₯β/dado
β β₯β/wmβpacknameβauthor
β β₯β/stickermarkerβefecto βresponder a imagen
β β₯β/stickerfilterβefectoβresponder a imagen
β β₯β/searchstickerβlinks
β β₯β/toimgβresponde a un sticker
β β₯β°ββββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----ππππππ----β¦Ώ
β β₯β­βββββββββββββ 
β β₯β/matesβnoobβeasyβmediumβhardβextremeβimpossibleβimpossible2>
β β₯β/pptβpapelβtijeraβpiedra>
β β₯β/prostitutoβnombreβ@tag>
β β₯β/prostitutaβnombreβ@tag>
β β₯β/gay2βnombreβ@tag>
β β₯β/lesbianaβnombreβ@tag>
β β₯β/pajeroβnombreβ@tag>
β β₯β/pajeraβnombreβ@tag>
β β₯β/putoβnombreβ@tag>
β β₯β/putaβnombreβ@tag>
β β₯β/mancoβnombreβ@tag>
β β₯β/mancaβnombreβ@tag>
β β₯β/rataβnombreβ@tag>
β β₯β/loveβnombreβ@tag>
β β₯β/Follarβnombreβ@tag>
β β₯β/doxearβnombreβ@tag>
β β₯β/preguntaβtexto>
β β₯β/suitpvpβ@tag>
β β₯β/slotβapuesta>
β β₯β/tttβnombre sala>
β β₯β/delttt
β β₯β/simiβtexto>
β β₯β/topβtexto>
β β₯β/topgays_
β β₯β/topotakus_
β β₯β/formarpareja_
β β₯β/verdad_
β β₯β/reto_
β β₯β/cancion_
β β₯β/pista_
β β₯β°ββββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----ππππππππππππ πππ----β¦Ώ
β β₯β­βββββββββββββ 
β β₯β/bass_
β β₯β/blown_
β β₯β/deep_
β β₯β/earrape_
β β₯β/fast_
β β₯β/fat_
β β₯β/nightcore_
β β₯β/reverse_
β β₯β/robot_
β β₯β/slow_
β β₯β/smooth_
β β₯β/tupai_
β β₯β°ββββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----πππππππππππππ----β¦Ώ
β β₯β­βββββββ
β β₯β/togifaudβvideo>
β β₯β/toimgβsticker>
β β₯β/tomp3βvideo>
β β₯β/tomp3βnota de voz>
β β₯β/topttβvideo / audio>
β β₯β/tovideoβsticker>
β β₯β/tourlβvideoβimagenβaudio>
β β₯β/tts es βtexto>
β β₯β°ββββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----ππππππ----β¦Ώ
β β₯β­βββββββββββββ 
β β₯β/mensajefalsoβnombre|mensaje>
β β₯β/phmakerβopcionβimagen>
β β₯β/logosβefectoβtexto>
β β₯β/logochristmasβtexto>
β β₯β/logocorazonβtexto>
β β₯β/ytcommentβtexto>
β β₯β/hornycardβ@tag>
β β₯β/simpcardβ@tag>
β β₯β/loliceβ@tag>
β β₯β/itssostupid_
β β₯β/pixelar_
β β₯β/blur_
β β₯β°ββββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―----ππππππππ----β¦Ώ
β β₯β­βββββββββββββ 
β β₯β/stickersearchβtexto>
β β₯β/stickersearch2βtexto>
β β₯β/xnxxsearchβtexto>
β β₯β/animeinfoβtexto>
β β₯β/googleβtexto>
β β₯β/letraβtexto>
β β₯β/wikipediaβtexto>
β β₯β/ytsearchβtexto>
β β₯β/apkdoneβtexto>
β β₯β/apkgoogleβtexto>
β β₯β/apkmodyβtexto>
β β₯β/apkshubβtexto>
β β₯β/happymodβtexto>
β β₯β/hostapkβtexto>
β β₯β/revdlβtexto>
β β₯β/toraccinoβtexto>
β β₯β/uapkproβtexto>
β β₯β/playstoreβtexto>
β β₯β°ββββββββββββ
β°ββββββββββββββ·
β­ββββββββββββββ 
ββ―--ππππππππ ππππ πππππππ---β¦Ώ
β β₯β­βββββββββββββ 
β β₯β/setprefixβprefijo>
β β₯β/resetprefix>
β β₯β/autoadmin>
β β₯β/leavegc>
β β₯β/disableβantitraba>
β β₯β/enableβantiarabes>
β β₯β/disableβantiarabes>
β β₯βοΈοΈ/enableβmodoadmin>
β β₯β/disableβmodoadmi>
β β₯β/enableβantilink>
β β₯β/disableβantilink>
β β₯β/enableβantilink2>
β β₯β/disableβantilink2>
β β₯β/enableβwelcome>
β β₯β/disableβwelcome>
β β₯β/enableβrestrict>
β β₯β/disableβrestrict>
β β₯β/enableβautoread>
β β₯β/disableβautoread>
β β₯β/enableβantiToxic
β β₯β/disableβantiToxi
β β₯β/enableβautosticker
β β₯β/disableβautosticker
β β₯β/enableβautolevelup
β β₯β/disableβautolevelup
β β₯β/enableβpublic>
β β₯β/disableβpublic>
β β₯β/enableβpconly>
β β₯β/disableβpconly>
β β₯β/enableβgconly>
β β₯β/disableβgconly>
β β₯β/enableβanticall>
β β₯β/disableβanticall>
β β₯β/enableβantiprivado>
β β₯β/disableβantiprivado>
β β₯β/banchat>
β β₯β/unbanchat>
β β₯β/banuserβ@tag>
β β₯β/unbanuserβ@tag>
β β₯β/banuserβ@tag>
β β₯β/bcβtexto>
β β₯β/bcchatsβtexto>
β β₯β/bcgcβtexto>
β β₯β/bcbotβtexto>
β β₯β/cleartpm>
β β₯β/restart>
β β₯β/update>
β β₯β/banlist>
β β₯β/addpremβ@tag>
β β₯β/delpremβ@tag>
β β₯β/listprem>
β β₯β/listcmd>
β β₯β/setppbotβresponderβaβimagen>
β β₯β/addcmdβtextoβresponderβaβstickerβimagen>
β β₯β/delcmdβresponderβaβstickerβimagenβconβcomandoβoβtextoβasignado>
β β₯β°ββββββββββββ
β°ββββββββββββββ·`.trim()
let buttons = [
{ buttonId: '/yovani', buttonText: { displayText: 'ππππππππ' }, type: 1 },
{ buttonId: '/grupos', buttonText: { displayText: 'ππππππ' }, type: 1 }]
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
title: 'π?πππππππ ππππ-ππππ',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
}}
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
