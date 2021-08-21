let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Tri [08980361858]
├ Indosat [085854733007]
└────

┌〔 Donasi • Emoney 〕
├ OVO, Dana [08980361858]
├ https://saweria.co/destio
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
