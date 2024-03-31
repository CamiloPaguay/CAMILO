function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-zA-Z]/g, v => {
        return {
            'a': '𝚊',
            'b': '𝚋',
            'c': '𝚌',
            'd': '𝚍',
            'e': '𝚎',
            'f': '𝚏',
            'g': '𝚐',
            'h': '𝚑',
            'i': '𝚒',
            'j': '𝚓',
            'k': '𝚔',
            'l': '𝚕',
            'm': '𝚖',
            'n': '𝚗',
            'ñ': 'ñ',
            'o': '𝚘',
            'p': '𝚙',
            'q': '𝚚',
            'r': '𝚛',
            's': '𝚜',
            't': '𝚝',
            'u': '𝚞',
            'v': '𝚟',
            'w': '𝚠',
            'x': '𝚡',
            'y': '𝚢',
            'z': '𝚣',
            'A': '𝙰',
            'B': '𝙱',
            'C': '𝙲',
            'D': '𝙳',
            'E': '𝙴',
            'F': '𝙵',
            'G': '𝙶',
            'H': '𝙷',
            'I': '𝙸',
            'J': '𝙹',
            'K': '𝙺',
            'L': '𝙻',
            'M': '𝙼',
            'N': '𝙽',
            'Ñ': 'Ñ',
            'O': '𝙾',
            'P': '𝙿',
            'Q': '𝚀',
            'R': '𝚁',
            'S': '𝚂',
            'T': '𝚃',
            'U': '𝚄',
            'V': '𝚅',
            'W': '𝚆',
            'X': '𝚇',
            'Y': '𝚈',
            'Z': '𝚉'
        }[v] || v
    }))
}
handler.help = ['letras7 *<texto>*']
handler.tags = ['fun']
handler.command = ['letras7', 'Letras7']
handler.register = true

export default handler
