let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}ššš¾ššš½š¼ šš šššššššš¼ šš¼šš¼ ššš šššššššæššæš¼\nššššššš\n*${usedPrefix + command} Hoy va llover?*\n\nššššš šššš šššššššš šš š½š š¼šššššššæ\nššš¼šššš\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `ā­āćššššššš šššš-šššćāā· 
ā ā„ā${['Si','Tal vez sĆ­','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
ā ā„ā ${vs}
ā ā„ā°āāāāāāāāāāā
ā°āāāāāāāāāāāāāā·`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'ššššššš šššš-ššš', null, null, [
['šššš šššš®', `${usedPrefix + command} ${text}`],
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler