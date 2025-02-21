let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('تم حظرك من استعمال البوت يا عزيزي لانك تخالف سياسة استعمالهن')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['بان']
handler.tags = ['owner']
handler.command = /^ban$/i

handler.admin = true

export default handler
