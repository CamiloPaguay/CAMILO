const handler = async (m, { conn, text, participants }) => {
  const users = participants.map((u) => conn.decodeJid(u.id));
  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted.msg || quoted).mimetype || '';
  const isMedia = /image|video|sticker|audio/.test(mime);
  const more = String.fromCharCode(8206);
  const masss = more.repeat(850);
  const htextos = `📜• Mensaje fijo: Esto es un mensaje fijo que el bot enviará siempre`;
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
    await conn.relayMessage(m.chat, { extendedTextMessage: { text: `${masss}\n${htextos}\n`, ...{ contextInfo: {externalAdReply: {title: '*[ ⚠ ] Advertencia*', body: '𝙈𝙖𝙮-𝘽𝙤𝙩', thumbnail: imagen1, sourceUrl: 'https://github.com/Anksawhs'}}}}, aa);
  }
};
handler.command = /^(refran)$/i;
export default handler;
