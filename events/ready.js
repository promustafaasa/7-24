const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
    var Activity = [
        "Küfürlerini",
        "𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣",
        ` ${client.guilds.size} Sunucu`,
        `  ${client.users.size} Kulanıcı`,
    ];
  

    setInterval(function() {

      var random = Math.floor(Math.random()*(Activity.length-0+1)+0);
      client.user.setActivity(Activity[random], { type: 'WATCHING'});
      }, 4 * 1000);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
