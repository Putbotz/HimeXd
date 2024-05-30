let handler = async(m, { conn, text, participants }) => {
  let teks = `┌─「 Tag All 」\n`
		      	for (let mem of participants) {
		            teks += `│◦❒ @${mem.id.split('@')[0]}\n`
				}
                teks += `└────`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(ta)$/i

handler.group = true
handler.admin = true

module.exports = handler
