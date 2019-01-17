const Discord = require('discord.js');


exports.run = function(client, message, args) {
    var isim = args.join('')
    const embed = new Discord.RichEmbed()
        .setAuthor("id", isim.tag)
        .setImage("id", isim.avatarURL)
        .setFooter("𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣", "https://i.hizliresim.com/y6NPmN.png")

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['avatarım'],
  permLevel: 0 
};

exports.help = {
  name: 'avatar', 
  description: 'Avatarınızı gösterir',
  usage: 'avatar <isim>'
};
