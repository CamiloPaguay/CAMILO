//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/AzamiJs | @Azami

import fs from 'fs'
import { parsePhoneNumber } from 'libphonenumber-js'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import moment from 'moment-timezone'
import translate from '@vitalets/google-translate-api'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

var handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
  try {
    let user = conn.getName(m.sender)
    let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

    let menu = `*👋 Hola, ${user}*`
    await conn.reply(m.chat, menu, a, { contextInfo: { externalAdReply: {title: '👋 ¡Hola!', body: saludo, sourceUrl: ig, thumbnail: await (await fetch(pp)).buffer() }}})

  } catch (e) {
    conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, '', )
    console.log(e)
  }
}
handler.help = ['menu']
handler.tags = ['bot']
handler.command = /^(danimenu)$/i
handler.register = true

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
