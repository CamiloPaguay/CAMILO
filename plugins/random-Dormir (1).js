const handler = async (m, {conn, text, command}) => {
  const yh = global.loli;
  const url = yh[Math.floor(Math.random() * yh.length)];
  const mensajes = [
    '_*Descansa, mañana será un mejor día*_',
    '_*Que tengas un buen descanso*_',
    '_*Espero que tengas dulces sueños*_',
    '_*Descansa y recarga energías para mañana*_',
    '_*Que tengas un reparador descanso*_',
    '_*Buenas noches, que descanses*_',
  ];
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: mensaje}, {quoted: m});
};
handler.command = /^(dormir|Dormir|Mimir|mimir|sueño)$/i;
handler.tags = ['dormir'];
handler.help = ['dormir'];
export default handler;

global.loli = [
  'https://i.ibb.co/PZvZgnd/Whats-App-Image-2024-02-18-at-5-11-51-PM-1.jpg',
  'https://i.ibb.co/gJx2Fvx/Whats-App-Image-2024-02-18-at-5-11-51-PM-2.jpg',
  'https://i.ibb.co/Yk9QjtR/Whats-App-Image-2024-02-18-at-5-11-51-PM-3.jpg',
  'https://i.ibb.co/frCwjry/Whats-App-Image-2024-02-18-at-5-11-51-PM.jpg',
  'https://i.ibb.co/WgqjWJT/Whats-App-Image-2024-02-18-at-5-11-52-PM-1.jpg',
  'https://i.ibb.co/CW8yNhF/Whats-App-Image-2024-02-18-at-5-11-52-PM-3.jpg',
  'https://i.ibb.co/4NkxtJ1/Whats-App-Image-2024-02-18-at-5-11-52-PM.jpg',
  'https://i.ibb.co/wyCWw0w/Whats-App-Image-2024-02-18-at-5-11-53-PM-3.jpg',
  'https://i.ibb.co/1GQgqVr/Whats-App-Image-2024-02-18-at-5-11-53-PM-4.jpg',
  'https://i.ibb.co/n05tNqk/Whats-App-Image-2024-02-18-at-5-11-53-PM.jpg',
  'https://i.ibb.co/x3d0fDc/Whats-App-Image-2024-04-10-at-6-29-49-PM-1.jpg',
  'https://i.ibb.co/KbZyB4t/Whats-App-Image-2024-04-10-at-6-29-49-PM.jpg',
  'https://i.ibb.co/gJx2Fvx/Whats-App-Image-2024-02-18-at-5-11-51-PM-2.jpg',
  'https://i.ibb.co/WPrH0bB/Whats-App-Image-2024-04-10-at-6-29-50-PM-1.jpg',
  'https://i.ibb.co/Ld4QbtK/Whats-App-Image-2024-04-10-at-6-29-50-PM-2.jpg',
];
