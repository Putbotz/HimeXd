let fs = require('fs')

let handler = async (m, { conn, command }) => {
    let buffer = fs.readFileSync('img/put.png')  // Reading the local file
    conn.sendFile(m.chat, buffer, 'putxd.png', '*SILAKAN DISCAN YA BOSSKU.*', m)
}

handler.help = handler.command = ['qrtng']
handler.tags = ["owner"]
module.exports = handler
