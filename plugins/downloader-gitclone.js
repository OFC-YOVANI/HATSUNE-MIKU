import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ π³π΄ πΆπΈππ·ππ±, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://github.com/OFC-YOVANI/HATSUNE-MIKU.git`
if (!regex.test(args[0])) throw '*[βππππβ] π»πΈπ½πΊ πΈπ½π²πΎπππ΄π²ππΎ!*' 
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`β _Cargando..._\nβ°β°β°β±β±β±β±β±β±`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone/i
export default handler
