function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-zA-Z]/g, v => {
        return {
            'a': '𝐚',
            'b': '𝐛',
            'c': '𝐜',
            'd': '𝐝',
            'e': '𝐞',
            'f': '𝐟',
            'g': '𝐠',
            'h': '𝐡',
            'i': '𝐢',
            'j': '𝐣',
            'k': '𝐤',
            'l': '𝐥',
            'm': '𝐦',
            'n': '𝐧',
            'ñ': 'ñ',
            'o': '𝐨',
            'p': '𝐩',
            'q': '𝐪',
            'r': '𝐫',
            's': '𝐬',
            't': '𝐭',
            'u': '𝐮',
            'v': '𝐯',
            'w': '𝐰',
            'x': '𝐱',
            'y': '𝐲',
            'z': '𝐳',
            'A': '𝐀',
            'B': '𝐁',
            'C': '𝐂',
            'D': '𝐃',
            'E': '𝐄',
            'F': '𝐅',
            'G': '𝐆',
            'H': '𝐇',
            'I': '𝐈',
            'J': '𝐉',
            'K': '𝐊',
            'L': '𝐋',
            'M': '𝐌',
            'N': '𝐍',
            'Ñ': 'Ñ',
            'O': '𝐎',
            'P': '𝐏',
            'Q': '𝐐',
            'R': '𝐑',
            'S': '𝐒',
            'T': '𝐓',
            'U': '𝐔',
            'V': '𝐕',
            'W': '𝐖',
            'X': '𝐗',
            'Y': '𝐘',
            'Z': '𝐙'
        }[v] || v
    }))
}
handler.help = ['letras2 *<texto>*']
handler.tags = ['fun']
handler.command = ['letras2', 'Letras2']
handler.register = true

export default handler

export default handler
