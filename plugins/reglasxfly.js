const handler = async (m, {conn, text, command}) => {
  const yh = global.lolia;
  const url = yh[Math.floor(Math.random() * yh.length)];
  const mensajes = [
    '*En caso de que se haga incumplido reglas y estén la mayoría de eliminan*',
    '*En caso de que se haga incumplido reglas y estén la mayoría de eliminan*',
  ];
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: mensaje}, {quoted: m});
};
handler.command = /^(reglas)$/i;
handler.tags = ['dormir'];
handler.help = ['dormir'];
export default handler;

global.lolia = [
  'https://i.ibb.co/mFcySDv/Whats-App-Image-2024-04-24-at-3-40-03-AM.jpg',
  'https://i.ibb.co/mFcySDv/Whats-App-Image-2024-04-24-at-3-40-03-AM.jpg',
];
