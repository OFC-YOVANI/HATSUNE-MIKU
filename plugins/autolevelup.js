import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {

let user = global.db.data.users[m.sender]
if (!user.autolevelup) 
  return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
 
conn.sendButton(m.chat, 'โ' + wm, `โญโใ๐๐๐๐๐๐๐ ๐๐๐๐-๐๐๐ใโโท 
โ โฅโโ๐ฅณาแดสษชแดษชแดแดแดแดs สแด sแดสษชแดแด แดแด ษดษชแด แดส 
โ โฅโโ๐ธษดษชแด แดส แดษดแดแดสษชแดส:${before}
โ โฅโโโฌ๏ธษดษชแด แดส แดแดแดแดแดส${user.level}
โ โฅโโโ๏ธสแดษดษขแด${user.role}
โ โฅโโ๐าแดแดสแด${new Date().toLocaleString('id-ID')}
โ โฅโฐโโโโโโโโโโโ
โฐโโโโโโโโโโโโโโท`, null, [['๐แดแดษดแดโด๏ธ', `/menu`]], m)
}}		

