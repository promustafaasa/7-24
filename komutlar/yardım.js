const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {

  let pages = [
              '**Bot Hakkında Kısa Bilgi**\n' + 'Sunucunuzda Resimli Giriş Çıkışın Çalışması İçin \n``𝓖𝓘𝓡𝓘𝓢-𝓒𝓘𝓚𝓘𝓢`` Adında Bir Metin Kanalı Olmalıdır.',
              '**Moderasyon**\n' + '``-`` !kick = Bir kullanıcıyı sunucudan atmanızı sağlar\n``-`` !rolinfo = Rol bilgisini gösterir\n``-`` !duyur = Duyuru yapmanızı sağlar\n``-``!panel-kur = Sunucu paneli kurmanızı sağlar',
              '**Genel**\n' + '``-`` !hesapla = Toplama - Çıkarma - Çarpma ve Bölme işlemi yapar \n``-`` Toplama işlemi + iledir \n``-`` Çıkarma işlemi - iledir\n``-`` Bölme işlem / iledir\n``-`` Çarpma işlemi * iledir\n``-`` !speedtest = İnternet Hızınızı ölçer\n``-`` !şifre = Rastgele bir şife oluşturur\n ``-``!ping = Botun pingini gösterir\n``-``!otorol-ayarla = Otorolü ayarlamanızı sağlar\n``-``!profil = Profilinizi Gösterir\n``-`` !avatar = Avatarınızı gösterir\n``-`` !kayitol = Kayıt olmanızı sağlar',
              '**Kullanıcı Ve Eğlence**\n' + '``-``  !resim = Rastgele Cool ve Rahatlatıcı Resim Atar \n``-``  !cooltext = Yazdığınız Metni Güzel Bir Şekilde Yazar\n``-`` !nitro = Profil fotoğrafınıza nitro efekti ekler\n``-`` !yazıtura = Sizin için yazı tura atar\n``-`` !8ball = 8ball Komutudur\n``-`` !çekiliş = Çekiliş yapar\n``-`` !slots = Slot çevirir\n``-`` !atatürkçerçeve = Profilinize ATATÜRK çerçevesi ekler\n``-`` !tersavatar = Avatrınızın rengini ters çevirir\n``-`` !pixel = Profil fotoğrafınızı pixelleştirir\n``-`` !hacked = Profil fotoğrafınıza hacklenmiş görüntüsü ekler\n``-``',
              '**Müzik**\n' + '\n``-`` !ekle = Sıraya müzik ekler\n``-`` !çal = Sıraya eklediğiniz şarkıyı çalmayı sağlar\n``-`` !ayrıl = Şarkıları bitirir \n``-`` !bağlan = Olduğunuz kanala bağlanmasını sağlarsınız',
              '**Bot Bilgi**\n' + '``-``  !istatistik = Botun bilgilerini görürsünüz\n',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter("𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣", "https://i.imgyukle.com/2019/01/14/KGEZM.th.png")
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setAuthor(` ${page} / ${pages.length}`)
        embed.setFooter("𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣", "https://i.imgyukle.com/2019/01/14/KGEZM.th.png")
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setAuthor(` ${page} / ${pages.length}`)
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter("𝓜𝓘𝓝𝓔𝓟𝓛𝓐𝓝𝓣", "https://i.imgyukle.com/2019/01/14/KGEZM.th.png")
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};