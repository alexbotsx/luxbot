let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:BOTLUX;;\nFN:BOTLUX\nORG:BOTLUX\nTITLE:\nitem1.TEL;waid=51982004738:51982004738\nitem1.X-ABLabel:BOTLUX\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:BOTLUX\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '@Alexnsnk7⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
