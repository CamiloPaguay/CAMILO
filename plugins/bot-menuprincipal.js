import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import * as fs from 'fs';
const handler = async (m, {conn, text, participants, isOwner, isAdmin}) => {
  if (m.text.trim().toLowerCase() === 'danihidetag') { // Se agrega esta línea
    const users = participants.map((u) => conn.decodeJid(u.id));
    const htextos = 'Este es mi mensaje constante'; // Aquí está tu mensaje constante
    const more = String.fromCharCode(8206);
    const masss = more.repeat(850);
    await conn.relayMessage(m.chat, {extendedTextMessage: {text: `${masss}\n${htextos}\n`, ...{contextInfo: {mentionedJid: users, externalAdReply: {thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'}}}}}, {});
  }
};
handler.command = /^(danihidetag)$/i; // Se modifica esta línea
handler.group = true;
handler.admin = true;
export default handler;
