const Discord = require('discord.js');

const harfler = {
    'a':'𝓐',
    'b':'𝓑',
    'c':'𝓒',
    'ç':'𝓒 ',
    'd':'𝓓',
    'e':'𝓔',
    'f':'𝓕',
    'g':'𝓖',
    'ğ':'𝓖',
    'h':'𝓗',
    'ı':'𝓘',
    'i':'𝓘',
    'j':'𝓙',
    'k':'𝓚',
    'l':'𝓛',
    'm':'𝓜',
    'n':'𝓝',
    'o':'𝓞',
    'ö':'𝓞',
    'p':'𝓟',
    'r':'𝓡',
    's':'𝓢',
    'ş':'𝓢',
    't':'𝓣',
    'u':'𝓤',
    'ü':'𝓤',
    'v':'𝓥',
    'y':'𝓨',
    'z':'𝓩',
    'w':'𝓦',
    'x':'𝓧',
    'q':'𝓠',
    'A':'𝓐',
    'B':'𝓑',
    'C':'𝓒',
    'Ç':'𝓒 ',
    'D':'𝓓',
    'E':'𝓔',
    'F':'𝓕',
    'G':'𝓖',
    'Ğ':'𝓖',
    'H':'𝓗',
    'I':'𝓘',
    'İ':'𝓘',
    'J':'𝓙',
    'K':'𝓚',
    'L':'𝓛',
    'M':'𝓜',
    'N':'𝓝',
    'O':'𝓞',
    'Ö':'𝓞',
    'P':'𝓟',
    'R':'𝓡',
    'S':'𝓢',
    'Ş':'𝓢',
    'T':'𝓣',
    'U':'𝓤',
    'Ü':'𝓤',
    'V':'𝓥',
    'Y':'𝓨',
    'Z':'𝓩',
    'W':'𝓦',
    'X':'𝓧',
    'Q':'𝓠',
};

exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Yazı", args.join('').split('').map(asd => harfler[asd] || asd).join(''))
  .setFooter("𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣", "https://i.imgyukle.com/2019/01/14/KGEZM.th.png")

	if (args.length < 1) return message.reply('Lütfen Mesaj Yaz **Doğru Kullanım: !cooltext <mesaj>**')
		
	message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'cooltext', 
  description: 'Güzel bi yazı çıkartır',
  usage: 'cooltext <mesaj>'
};