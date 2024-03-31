const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen2;
    const str = `
🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮
    
📌 *Hola,* @${m.sender.split('@')[0]}

╭━━━━━━ ◜◌◝ ━━━━━━╮
│ _*< LISTA DE COMANDOS />*_
│
├ • 🏹 _${usedPrefix}letras1_ < 𝙏𝙚𝙭𝙩 >
├ • 📝 _${usedPrefix}letras2_ < 𝐓𝐞𝐱𝐭 >
├ • 🧮 _${usedPrefix}letras3_ < 𝗧𝗲𝘅𝘁 >
├ • 🏔️ _${usedPrefix}letras4_ < 𝘛𝘦𝘹𝘵 >
├ • 🌊 _${usedPrefix}letras5_ < 𝕋𝕖𝕩𝕥 >
├ • 🐿️ _${usedPrefix}letras6_ < 𝑻𝒆𝒙𝒕 >
├ • 🧸 _${usedPrefix}letras7_ < 𝚃𝚎𝚡𝚝 >
├ • 🍄 _${usedPrefix}letras8_ < ᴛᴇxᴛ >
├ • 🍂 _${usedPrefix}letras9_ < Ｔｅｘｔ >
│
╰━━━━━━━━━━━━━━━━╯`.trim();

    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(Menuletras|letras|menuletras)$/i;
export default handler;
