function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-zA-Z]/g, v => {
        return {
            'a': 'ａ',
            'b': 'ｂ',
            'c': 'ｃ',
            'd': 'ｄ',
            'e': 'ｅ',
            'f': 'ｆ',
            'g': 'ｇ',
            'h': 'ｈ',
            'i': 'ｉ',
            'j': 'ｊ',
            'k': 'ｋ',
            'l': 'ｌ',
            'm': 'ｍ',
            'n': 'ｎ',
            'ñ': 'ñ',
            'o': 'ｏ',
            'p': 'ｐ',
            'q': 'ｑ',
            'r': 'ｒ',
            's': 'ｓ',
            't': 'ｔ',
            'u': 'ｕ',
            'v': 'ｖ',
            'w': 'ｗ',
            'x': 'ｘ',
            'y': 'ｙ',
            'z': 'ｚ',
            'A': 'Ａ',
            'B': 'Ｂ',
            'C': 'Ｃ',
            'D': 'Ｄ',
            'E': 'Ｅ',
            'F': 'Ｆ',
            'G': 'Ｇ',
            'H': 'Ｈ',
            'I': 'Ｉ',
            'J': 'Ｊ',
            'K': 'Ｋ',
            'L': 'Ｌ',
            'M': 'Ｍ',
            'N': 'Ｎ',
            'Ñ': 'Ñ',
            'O': 'Ｏ',
            'P': 'Ｐ',
            'Q': 'Ｑ',
            'R': 'Ｒ',
            'S': 'Ｓ',
            'T': 'Ｔ',
            'U': 'Ｕ',
            'V': 'Ｖ',
            'W': 'Ｗ',
            'X': 'Ｘ',
            'Y': 'Ｙ',
            'Z': 'Ｚ'
        }[v] || v
    }))
}
handler.help = ['letras9 *<texto>*']
handler.tags = ['fun']
handler.command = ['letras9', 'Letras9']
handler.register = true

export default handler
