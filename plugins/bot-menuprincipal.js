let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let name2 = conn.getName(m.sender)
  if (!Reg.test(text)) throw `${mg}✳️ 𝙐𝙨𝙤 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix + command} nombre.edad*\n📌𝙀𝙟𝙚𝙢𝙥𝙡𝙤 : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ 𝐄𝐥. 𝐧𝐨𝐦𝐛𝐫𝐞 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐞𝐬𝐭𝐚𝐫 𝐯𝐚𝐜𝐢𝐨'
  if (!age) throw '✳️ 𝐋𝐚 𝐞𝐝𝐚𝐝 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐞𝐬𝐭𝐚 𝐯𝐚𝐜𝐢𝐚'
  if (name.length >= 30) throw '✳️ 𝐅𝐮𝐚𝐚𝐚, 𝐪𝐮𝐞 𝐧𝐨𝐦𝐛𝐫𝐞 𝐭𝐚𝐥 𝐥𝐚𝐫𝐠𝐨𝐨𝐨𝐨𝐨' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 𝐏𝐚 𝐞𝐬𝐭𝐚 𝐯𝐢𝐞𝐣𝐨𝐬'
  if (age < 5) throw '🚼  𝐕𝐫𝐠 𝐥𝐨𝐬 𝐛𝐞𝐛𝐞𝐬 𝐬𝐚𝐛𝐞𝐧 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫? ✍️😳 '
  let sn = createHash('md5').update(m.sender).digest('hex')
  await conn.reply(m.chat,  `⧼⧼⧼ *𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎* ⧽⧽⧽

• *𝐍𝐨𝐦𝐛𝐫𝐞:* ${name}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
• *𝐄𝐝𝐚𝐝:* ${age} 𝐚𝐧̃𝐨𝐬
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`, null, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎`, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: [nna, nn, md, yt, tiktok].getRandom()}}})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']
handler.command = /^(daniverify|daniverificar|daniregistrar|danireg(ister)?)$/i
export default handler
