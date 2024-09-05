//by put
global.owner = ['601169466091','601115141235']  
global.mods = ['601169466091'] 
global.prems = ['601169466091']
global.nameowner = 'Putbotz'
global.numberowner = '601169466091' 
global.mail = 'putbot604@gmai.com' 
global.dana = '601169466091'
global.pulsa = '601169466091'
global.gopay = '601169466091'
global.namebot = 'Putbotz'
global.gc = 'https://chat.whatsapp.com/Ln2vHjRrRayAbzalRMB56r'
global.web = 'https://github.com/Putbotz'
global.instagram = 'https://instagram.com/whooputt'
global.wm = '© iYeen by Putbotz'
global.watermark = wm
global.wm2 = '⫹⫺ iYeen by Putbotz'
global.wm3 = '© iYeen by Putbotz'
global.wm4 = '© iYeen by Putbotz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made by'
global.author = 'iYeen by Putbotz'
global.alpiskey = 'YOUR_APIKEY_HERE' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'putxd' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'YOUR_APIKEY_HERE' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'putxd' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
