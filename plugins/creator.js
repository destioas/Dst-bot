function handler(m) {
  this.sendContact(m.chat, '628980361858', this.getName('DestioGanz@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
