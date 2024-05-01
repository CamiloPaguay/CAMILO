const handler = async (m, {conn, text, command}) => {
  const yh = global.lolia;
  const url = yh[Math.floor(Math.random() * yh.length)];
  const mensajes = [
    '*Reglas X-FLY*',
    '*Reglas X-FLY*',
  ];
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: mensaje}, {quoted: m});
};
handler.command = /^(reglas)$/i;
handler.tags = ['dormir'];
handler.help = ['dormir'];
export default handler;

global.lolia = [
  'https://i.ibb.co/WVrwnCk/Whats-App-Image-2024-04-30-at-9-52-35-PM.jpg',
  'https://i.ibb.co/WVrwnCk/Whats-App-Image-2024-04-30-at-9-52-35-PM.jpg',
];
