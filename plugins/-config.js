let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `β­βγπππππππ ππππ-πππγββ· 
β β₯β*[β] π΅πΎππΌπ°ππΎ π΄πππΎπ½π΄πΎ!!*
β β₯ββ¨π΄πΉπ΄πΌπΏπ»πΎβ¨ 
β β₯β${usedPrefix + command} abrir*
β β₯β${usedPrefix + command} cerrar*
β β₯β°βββββββββββ
β°ββββββββββββββ·`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ β ] πΆπππΏπΎ π²πΎπ½π΅πΈπΆπππ°π³πΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄*')}
}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
