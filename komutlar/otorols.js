const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));


exports.run = async (bot, message, args) =>
{
  	let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("**Ayarlamam İçin Bir Rol Etiketlemelisin!** \n**Rolü Etiketleyemiyorsan Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**Örnek Kullanım : !oto-rol @rol #kanal \n****Oto Yazı Kapatmak İstiyorsan !kapat oto-rol**");
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**Doğru Kullanım = !otorol @<roladı> #<metinkanalı>**".then(msg => msg.delete(5000)));
      

	if(!profil[message.guild.id]){
    
		profil[message.guild.id] = {
      
			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}
	
	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
	
	fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	const embed = new Discord.RichEmbed()
		.setDescription(`:white_check_mark: Oto-Rol Başarıyla ${args[0]} Olarak Ayarlandı! \n:white_check_mark:Oto-Rol Özelliğini Kapatmak Için otorol-kapat!`)
		.setColor("RANDOM")
        .setFooter("𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣", "https://i.imgyukle.com/2019/01/14/KGEZM.th.png")
	message.channel.send({embed})
}

}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help = {
  name: 'oto-rol',
  description: 'Sunucuya Girenlere Verilecek Olan Oto-Rolü Ayarlar!',
  usage: 'oto-rol'
}