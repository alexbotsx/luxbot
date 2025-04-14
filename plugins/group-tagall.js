let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `━━━━━━━━━━━━━━━━━━━━ ${pesan}`
  let teks = `━━━━━━━━━━━━━━━━━━━━
          𝘽𝙤𝙩 𝙡𝙪𝙭

*😼  Venta de bots, plantillas, logos, caligráficos, recargas de diamantes, pases elite, ilustración, etc.*
 *https://chat.whatsapp.com/Galu1Qd1en1Jkritdvbvip*\n\n ${oi}\n\n`
  for (let mem of participants) {
  teks += `￫ 💜 @${mem.id.split('@')[0]}\n`}
  teks += `ㅤㅤㅤㅤ𝘽𝙤𝙩 𝙡𝙪𝙭 💜`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler