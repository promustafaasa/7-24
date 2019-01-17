const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = (client, message) => {
  var osType = os.type();

  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.RichEmbed()
 .setColor(0x36393F)
.setTitle('**speedtest Sonuçlar**')
.addField('**Anlık İstatistikler**', `İndirme: **${data.speeds.download}**
Yükleme: **${data.speeds.upload}**`)
.addField('**Normal Olarak Ölçülen İstatistikler**', `İndirme: **${data.speeds.originalDownload}**
Yükleme: **${data.speeds.originalUpload}**`)
.addField('**Pingler**', `Discord API Pingi: **${client.ping}**
Speedtestde Ölçülen Ping: **${data.server.ping}**`)
.addField('**Diğer Bilgiler**', `
İşletim Sistemi: **${osType}**
İnternet Sağlayıcısı: **${data.client.isp}**
Host: **${data.server.host}**
Sağlayıcı Lokasyonu: **${data.server.location}**
Sağlayıcı Sponsoru: **${data.server.sponsor}**`)
.setFooter("𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣", "https://i.imgyukle.com/2019/01/14/KGEZM.th.png")
  message.channel.send(embed)
});
 
    test.on('error', err => {
  console.log(err);
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sahip"
};

exports.help = {
  name: 'speedtest',
  description: 'speedtest yapar',
  usage: 'speedtest'
};