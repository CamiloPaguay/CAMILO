import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import * as fs from 'fs';

const handler = async (m, {conn, text, participants, isOwner, isAdmin}) => {
  try {
    const users = participants.map((u) => conn.decodeJid(u.id));
    const q = m.quoted ? m.quoted : m || m.text || m.sender;
    const c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender;
    const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, {[m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : {text: '' || c}}, {quoted: m, userJid: conn.user.id}), text || q.text, conn.user.jid, {mentions: users});
    await conn.relayMessage(m.chat, msg.message, {messageId: msg.key.id});
  } catch {
    const users = participants.map((u) => conn.decodeJid(u.id));
    const more = String.fromCharCode(8206);
    const masss = more.repeat(850);
    const htextos = `
╭──═[ *𝙈𝙊𝘿𝙀𝙍𝘼𝘿𝙊𝙍𝘼* ]═─⋆
│╭───────────────···
││• *🗳️ ɴᴏᴍʙʀᴇ* : 𝘈𝘕𝘈
││•  𝙉𝙧𝙤 : 
││• wa.me/573145914910
││•  ᴇʟʟᴀ ᴇꜱ ᴍɪ ᴍᴏᴅ
││• 💫 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙖𝙧 𝙘𝙤𝙣 𝙚𝙡𝙡𝙖 
││• 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙞𝙣𝙘𝙤𝙣𝙛𝙤. 
││• 𝙤 𝙥𝙧𝙤𝙗𝙡𝙚𝙢𝙖 𝙘𝙤𝙣 𝙚𝙡 𝙗𝙤𝙩 
│╰───────────────···
╰───────═┅═───────
`;
    await conn.relayMessage(m.chat, {extendedTextMessage: {text: `${masss}\n${htextos}\n`, ...{contextInfo: {mentionedJid: users}}}}, {});
  }
};

handler.command = /^(danimoderadora|danimd|danimod)$/i;
handler.group = true;
handler.admin = true;

export default handler;
