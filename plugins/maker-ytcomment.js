import _translate from "./_translate.js"
const tradutor = _translate.plugins.maker_ytcomment

const handler = async (m, {conn, text}) => {
  if (!text) throw 'No Text';
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', tradutor.texto1, m);
};
handler.help = ['ytcomment <comment>'];
handler.tags = ['maker'];
handler.command = /^(ytcomment)$/i;
export default handler;
