import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ ππ½ πΏπ°πΈπ, π΄πΉπ΄πΌπΏπ»πΎ ${usedPrefix + command} Mexico*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'PaΓ­s?'
if (json.confirmed) m.reply(`β­βγπππππππ ππππ-πππγββ· 
β β₯βπ PaΓ­s : ${text}
β β₯ββConfirmado : ${json.confirmed.value}
β β₯βπcurado : ${json.recovered.value}
β β₯ββ οΈMuertes : ${json.deaths.value}
β β₯βπInfo Actualizada : ${json.lastUpdate}
β β₯β°βββββββββββ
β°ββββββββββββββ·`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <paΓ­s>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
export default handler
