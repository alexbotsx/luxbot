import axios from 'axios';
const handler = async (m, { command, conn, usedPrefix }) => {
    const res = (await axios.get(`https://raw.githubusercontent.com/alexbotsx/alexnn/master/src/JSON/anime-${command}.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendFile(m.chat, haha, 'error.jpg', `🌟 *${command}*`, m, null);
};
handler.command = handler.help = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura',];
handler.tags = ['anime'];
export default handler;
