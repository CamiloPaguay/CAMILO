function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-zA-Z]/g, v => {
        return {
            'a': '𝒂',
            'b': '𝒃',
            'c': '𝒄',
            'd': '𝒅',
            'e': '𝒆',
            'f': '𝒇',
            'g': '𝒈',
            'h': '𝒉',
            'i': '𝒊',
            'j': '𝒋',
            'k': '𝒌',
            'l': '𝒍',
            'm': '𝒎',
            'n': '𝒏',
            'ñ': 'ñ',
            'o': '𝒐',
            'p': '𝒑',
            'q': '𝒒',
            'r': '𝒓',
            's': '𝒔',
            't': '𝒕',
            'u': '𝒖',
            'v': '𝒗',
            'w': '𝒘',
            'x': '𝒙',
            'y': '𝒚',
            'z': '𝒛',
            'A': '𝑨',
            'B': '𝑩',
            'C': '𝑪',
            'D': '𝑫',
            'E': '𝑬',
            'F': '𝑭',
            'G': '𝑮',
            'H': '𝑯',
            'I': '𝑰',
            'J': '𝑱',
            'K': '𝑲',
            'L': '𝑳',
            'M': '𝑴',
            'N': '𝑵',
            'Ñ': 'Ñ',
            'O': '𝑶',
            'P': '𝑷',
            'Q': '𝑸',
            'R': '𝑹',
            'S': '𝑺',
            'T': '𝑻',
            'U': '𝑼',
            'V': '𝑽',
            'W': '𝑾',
            'X': '𝑿',
            'Y': '𝒀',
            'Z': '𝒁'
        }[v] || v
    }))
}
handler.help = ['letras6 *<texto>*']
handler.tags = ['fun']
handler.command = ['letras6', 'Letras6']
handler.register = true

export default handler
