let handler = async m => {

let intro = `𝙕𝙮𝙡𝙖𝙖 𝙊𝙣!! ૮₍ ˶•⤙•˶ ₎ა`
m.reply(intro)
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
