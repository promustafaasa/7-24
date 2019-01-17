const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let isim = args.slice(0).join(' ');
  if (!isim) return message.channel.send('Lütfen adını yaz.')
  message.channel.send('İsmin ``'+ isim +'`` olarak ayarlandı!')
  
   };
;
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'p-i-ayarla',
 description: 'kral oldun ho',
 usage: 'kralol'
};