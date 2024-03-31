function handler(m, { text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-zA-Z]/g, v => {
        return {
            'a': '𝕒',
            'b': '𝕓',
            'c': '𝕔',
            'd': '𝕕',
            'e': '𝕖',
            'f': '𝕗',
            'g': '𝕘',
            'h': '𝕙',
            'i': '𝕚',
            'j': '𝕛',
            'k': '𝕜',
            'l': '𝕝',
            'm': '𝕞',
            'n': '𝕟',
            'ñ': 'ñ',
            'o': '𝕠',
            'p': '𝕡',
            'q': '𝕢',
            'r': '𝕣',
            's': '𝕤',
            't': '𝕥',
            'u': '𝕦',
            'v': '𝕧',
            'w': '𝕨',
            'x': '𝕩',
            'y': '𝕪',
            'z': '𝕫',
            'A': '𝔸',
            'B': '𝔹',
            'C': 'ℂ',
            'D': '𝔻',
            'E': '𝔼',
            'F': '𝔽',
            'G': '𝔾',
            'H': 'ℍ',
            'I': '𝕀',
            'J': '𝕁',
            'K': '𝕂',
            'L': '𝕃',
            'M': '𝕄',
            'N': 'ℕ',
            'Ñ': 'Ñ',
            'O': '𝕆',
            'P': 'ℙ',
            'Q': 'ℚ',
            'R': 'ℝ',
            'S': '𝕊',
            'T': '𝕋',
            'U': '𝕌',
            'V': '𝕍',
            'W': '𝕎',
            'X': '𝕏',
            'Y': '𝕐',
            'Z': 'ℤ'
        }[v] || v
    }))
}
handler.help = ['letras5 *<texto>*']
handler.tags = ['fun']
handler.command = ['letras5', 'Letras5']
handler.register = true

export default handler
