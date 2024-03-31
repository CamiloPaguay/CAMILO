function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-zA-Z]/g, v => {
        return {
            'a': 'ᴀ',
            'b': 'ʙ',
            'c': 'ᴄ',
            'd': 'ᴅ',
            'e': 'ᴇ',
            'f': 'ꜰ',
            'g': 'ɢ',
            'h': 'ʜ',
            'i': 'ɪ',
            'j': 'ᴊ',
            'k': 'ᴋ',
            'l': 'ʟ',
            'm': 'ᴍ',
            'n': 'ɴ',
            'ñ': 'Ñ',
            'o': 'ᴏ',
            'p': 'ᴘ',
            'q': 'Q',
            'r': 'ʀ',
            's': 'ꜱ',
            't': 'ᴛ',
            'u': 'ᴜ',
            'v': 'ᴠ',
            'w': 'ᴡ',
            'x': 'x',
            'y': 'ʏ',
            'z': 'ᴢ',
            'A': 'ᴀ',
            'B': 'ʙ',
            'C': 'ᴄ',
            'D': 'ᴅ',
            'E': 'ᴇ',
            'F': 'ꜰ',
            'G': 'ɢ',
            'H': 'ʜ',
            'I': 'ɪ',
            'J': 'ᴊ',
            'K': 'ᴋ',
            'L': 'ʟ',
            'M': 'ᴍ',
            'N': 'ɴ',
            'Ñ': 'Ñ',
            'O': 'ᴏ',
            'P': 'ᴘ',
            'Q': 'Q',
            'R': 'ʀ',
            'S': 'ꜱ',
            'T': 'ᴛ',
            'U': 'ᴜ',
            'V': 'ᴠ',
            'W': 'ᴡ',
            'X': 'x',
            'Y': 'ʏ',
            'Z': 'ᴢ'
        }[v] || v
    }))
}
handler.help = ['letras8 *<texto>*']
handler.tags = ['fun']
handler.command = ['letras8', 'Letras8']
handler.register = true

export default handler
