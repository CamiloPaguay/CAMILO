const handler = async (m, { conn, text, participants, isPrems }) => {
  const users = participants.map((u) => conn.decodeJid(u.id));
  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted.msg || quoted).mimetype || '';
  const isMedia = /image|video|sticker|audio/.test(mime);
  const more = String.fromCharCode(8206);
  const masss = more.repeat(850);
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const level = global.db.data.users[m.sender].level || 1;
  const exp = global.db.data.users[m.sender].exp || 0;
  const role = global.db.data.users[m.sender].role || '';
  const limit = global.db.data.users[m.sender].limit || 0;
  const money = global.db.data.users[m.sender].money || 0;
  const joincount = global.db.data.users[m.sender].joincount || 0;
  const user = global.db.data.users[m.sender];
  const readMore = more.repeat(850);

  const htextos = `🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮

 📌 *Hola,* ${taguser}

 📊 _*< TUS ESTADÍSTICAS />*_

 🎖️ •  *Nivel:* ${level}
 📈 •  *Experiencia:* ${exp}
 🏅 •  *Rango:* ${role}
 💎 •  *Diamantes:* ${limit}
 💰 •  *MayCoins:* ${money}
 🎟️ •  *Tokens:* ${joincount}
 🎁 •  *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''} ${readMore}
 🏖️ •  *Adquiere el bot con:* ㅤㅤㅤㅤㅤㅤ+573239900113
`;

  if ((isMedia && quoted.mtype === 'imageMessage') && htextos) {
    var mediax = await quoted.download?.();
    conn.sendMessage(m.chat, { image: mediax, mentions: users, caption: htextos, mentions: users }, { quoted: m });
  } else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) {
    var mediax = await quoted.download?.();
    conn.sendMessage(m.chat, { video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos }, { quoted: m });
  } else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) {
    var mediax = await quoted.download?.();
    conn.sendMessage(m.chat, { audio: mediax, mentions: users, mimetype: 'audio/mpeg', fileName: `Hidetag.mp3` }, { quoted: m });
  } else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) {
    var mediax = await quoted.download?.();
    conn.sendMessage(m.chat, { sticker: mediax, mentions: users }, { quoted: m });
  } else {
    await conn.relayMessage(m.chat, { extendedTextMessage: { text: `${masss}\n${htextos}\n`, ...{ contextInfo: { externalAdReply: { title: '*[ ⚠ ] Advertencia*', body: '𝙈𝙖𝙮-𝘽𝙤𝙩', thumbnail: imagen1, sourceUrl: 'https://github.com/Anksawhs' } } } } }, { quoted: m });
  }
};
handler.command = /^(refran)$/i;
export default handler;
