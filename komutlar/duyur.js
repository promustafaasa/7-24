const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed)
    const bitisembed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("RANDOM")
    .setDescription(`:loudspeaker: Mesaj Basariyla 5 Kullaniciya Gonderildi! :loudspeaker:`)
    .setFooter("𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣", "https://i.hizliresim.com/y6NPmN.png")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyurUYAP'],
  permLevel: 2
};

exports.help = {
  name: 'duyuruyap',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};