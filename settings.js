require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "628566534145"
global.namaowner = "Fatt Store"
global.namaowner2 = "Fatt Store"

//======== Setting Bot & Link ========//
global.namabot = "Telkom🇮🇩 Bot😎"
global.namabot2 = "Techsmith 【GENIUS ID】"
global.version = "v5.0.0"
global.foother = "Created By Fatt"
global.waowner = "https://wa.me/628566534145"
global.idsaluran = ""
global.linkgc = ''
global.linksaluran = ""
global.linkyt = ''
global.linktele = ""
global.packname = "Created By Fatt"
global.author = "Fatt Store"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 300
global.delayjpm = 300

//========== Setting Foto ===========//

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://fatoffc.mypanel-ku.my.id"
global.apikey = "ptla_aYrqOADIpS6XY1crXpxx9Rk18CRrDzVShrNuZ6BQz1a"
global.capikey = "ptlc_PKoR6XyOaHbklT7rgfwIReiZOevqnxKHf7vOHkJixsm"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = ""
global.gopay = ""
global.ovo = false
global.qris = fs.readFileSync("./media/qris.jpg")

//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
	"error": "Error terjadi kesalahan",
	"done": "Done ✅",
	"wait": "⏳Memproses . . .",
	"group": "Command Ini Hanya Untuk Didalam Grup",
	"private": "Command Ini Hanya Untuk Di Private Chat",
	"admin": "Command Ini Hanya Untuk Admin Grup",
	"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin",
	"owner": "Maaf Command Ini Hanya Untuk Owner Bot",
	"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})