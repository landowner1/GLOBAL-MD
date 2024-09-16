

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "NO" //ur yt chanel name
global.socialm = "NO" //ur github or insta name
global.location = "Pakistan, Karachi, Karachi" //ur location

//new
global.botname = 'COMMANDER' //ur bot name
global.ownernumber = ['447551610702'] //ur owner number, dont add more than one
global.ownername = 'COMMANDER' //ur owner name
global.websitex = "https://shawarma.top"
global.wagc = "https://chat.whatsapp.com/CnzDJX5pyuULiIMu4B3dwp"
global.themeemoji = '🪀'
global.wm = "SWAG"
global.botscript = 'https://github.com/GlobalTechInfo/GLOBAL-MD' //script link
global.packname = "COMMANDER"
global.author = "shawarma.top\n\n+447551610702"
global.creator = "447551610702@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923467425834"] // Premium User

//channel id
global.xchannel = {
	jid: 'https://chat.whatsapp.com/CnzDJX5pyuULiIMu4B3dwp'
	}

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v12'
global.typereply = 'v1' // reply type 'v1' => 'v4'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
