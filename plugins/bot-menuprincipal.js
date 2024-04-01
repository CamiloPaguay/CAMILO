import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix }) => {
  try {
    if (usedPrefix == 'a' || usedPrefix == 'A') return;

    const d = new Date();
    const locale = 'es-ES';

    const { money, joincount } = global.db.data.users[m.sender];
    const taguser = '@' + m.sender.split('@')[0];
    const pp = await conn.getProfilePicture(conn.user.jid);

    const str = `🔮 𝙈𝘼𝙔-𝘽𝙊𝙏 🔮\n\n🌩 *Nombre:* ${taguser}\n🌩 *Dólares:* ${joincount}\n🌩 *Nivel:* ${level}\n🌩 *Coins:* ${money}\n🌩 *Xp:* ${exp}`;

    const fkon = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {})
      },
      message: {
        'contactMessage': {
          'displayName': saludo,
          'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
          'jpegThumbnail': imagen1,
          thumbnail: imagen1,
          sendEphemeral: true
        }
      }
    };

    await conn.reply(m.chat, '*ꪹ͜𓂃͡𝑪𝑨𝑹𝑮𝑨𝑵𝑫𝑶 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻...𓏲੭*', m, {
      contextInfo: {
        forwardingScore: 2022,
        isForwarded: true,
        externalAdReply: {
          title: '👋 ¡𝗛𝗼𝗹𝗮!',
          body: '𝖲𝖺𝗄𝗎𝗋𝖺𝖡𝗈𝗍𝖫𝗂𝗍𝖾-𝖬𝖣 🌹🌻',
          sourceUrl: global.channel,
          thumbnail: await (await fetch(pp)).buffer()
        }
      }
    });

    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });
    await conn.sendMessage(m.chat, { text: str.trim() });

  } catch {
    conn.reply(m.chat, '🧸 *Ocurrió Un Error*', m);
  }
};

handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(danimenu|danimenú|daniallmenu|danihelp|danimenucompleto)$/i;
handler.register = true;

export default handler;
