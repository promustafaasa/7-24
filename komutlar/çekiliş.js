const Discord = require('discord.js');
exports.run = function(client, message, args) {
    message.channel.send(`<@${message.guild.members.random().id}>`).then(async msg => {
        setTimeout(() => {
            message.react(`<@${message.guild.members.random().id}>`);
        }, 500);
          setTimeout(() => {
            message.react(`<@${message.guild.members.random().id}>`);
        }, 500);
        setTimeout(() => {
            msg.edit(`<@${message.guild.members.random().id}>`);
        }, 1000);
        setTimeout(() => {
            msg.edit(`<@${message.guild.members.random().id}>`);
        }, 1500);
        setTimeout(() => {
            msg.edit(`<@${message.guild.members.random().id}>`);
        }, 2000);
        setTimeout(() => {
            msg.edit(`<@${message.guild.members.random().id}>`);
        }, 2500);
        setTimeout(() => {
            msg.edit(`<@${message.guild.members.random().id}>`);
        }, 3000);
        setTimeout(() => {
            msg.edit(`<@${message.guild.members.random().id}>`);
        }, 3500);
        setTimeout(() => {
            msg.edit(`<@${message.guild.members.random().id}>`);
        }, 4000);
        setTimeout(() => {
            msg.edit(`<@${message.guild.members.random().id}>`);
        }, 4500);
        setTimeout(() => {
            msg.delete()
        }, 5000);
    });
    setTimeout(() => {
    const çekiliş = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Çekiliş!", true)
    .addField("Çekilişi Yapan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField(`Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
    .setColor("RANDOM")
    .setDescription('', true)
    return message.channel.send(çekiliş);
    }, 5000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekilişyap"],
  permLevel: 2
};

exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş yapar.',
  usage: 'çekiliş'
};