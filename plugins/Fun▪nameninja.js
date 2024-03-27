function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-zA-Z]/g, v => {
        return {
            'a': 'ka',
            'b': 'tsu',
            'c': 'mi',
            'd': 'te',
            'e': 'ku',
            'f': 'hi',
            'g': 'ji',
            'h': 'ri',
            'i': 'ki',
            'j': 'zu',
            'k': 'me',
            'l': 'ta',
            'm': 'rin',
            'n': 'to',
            'o': 'mo',
            'p': 'no',
            'q': 'ke',
            'r': 'shi',
            's': 'ari',
            't': 'chi',
            'u': 'do',
            'v': 'ru',
            'w': 'mei',
            'x': 'na',
            'y': 'fu',
            'z': 'mori',
            'A': '𝘼',
            'B': '𝘽',
            'C': '𝘾',
            'D': '𝘿',
            'E': '𝙀',
            'F': '𝙁',
            'G': '𝙂',
            'H': '𝙃',
            'I': '𝙄',
            'J': '𝙅',
            'K': '𝙆',
            'L': '𝙇',
            'M': '𝙈',
            'N': '𝙉',
            'Ñ': 'Ñ',
            'O': '𝙊',
            'P': '𝙋',
            'Q': '𝙌',
            'R': '𝙍',
            'S': '𝙎',
            'T': '𝙏',
            'U': '𝙐',
            'V': '𝙑',
            'W': '𝙒',
            'X': '𝙓',
            'Y': '𝙔',
            'Z': '𝙕'
        }[v] || v
    }))
}
handler.help = ['letrasbonitas *<texto>*']
handler.tags = ['fun']
handler.command = ['letras1', 'letrasbonitas']
handler.register = true

export default handler
