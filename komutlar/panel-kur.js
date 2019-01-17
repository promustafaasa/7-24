const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:hata: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  guild.createChannel(`Toplam Kullanıcı Sayısı : ${guild.memberCount}`, 'voice');
  guild.createChannel(`Üye Sayısı : ${guild.members.filter(m => !m.user.bot).size}`, 'voice');
  guild.createChannel(`Bot Sayısı : ${guild.members.filter(m => m.user.bot).size}`, 'voice');

  message.channel.send(`:onay: Sunucudaki üye sayısını kanallarda gösterecek bir sistem kuruldu.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['panelkur'],
  permLevel: 3
};

exports.help = {
  name: 'panel-kur',
  description: 'Sunucudaki üye sayısını kanallarda gösterecek bir sistem kurar.',
  usage: 'panel-kur'
}; 