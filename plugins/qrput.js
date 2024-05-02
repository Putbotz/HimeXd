let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(https://telegra.ph/file/10d188d36dcb48999ae0f.jpg).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'putxd.jpg', *SILAKAN DISCAN YA BOSSKU.*, m)
}

handler.help = handler.command = ['qrtng']
handler.tags = ["owner"]
module.exports = handler
