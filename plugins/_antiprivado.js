// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('CAMILOPIEDRA') || m.text.includes('CAMILOPAPEL') || m.text.includes('CAMILOTIJERA') || m.text.includes('CAMILOserbot') || m.text.includes('CAMILOjadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await this.updateBlockStatus(m.sender, 'block'); // Solo bloquea al remitente del mensaje privado
  }
  return !1;
}
