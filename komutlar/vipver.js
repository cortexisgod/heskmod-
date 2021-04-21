const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('828400895477022740')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `Rol Adı`')
   let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send('Bir kişi etiketlemelisin')
   }
   let vip = message.guild.roles.cache.find(r => r.id === '828399928488755220') //Viprolİd Koy

   if(!vip) {
       return message.channel.send('Vip rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et!')
   }

   let vipyap = message.guild.member(member)


   vipyap.roles.remove(vip)
   let embed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('Vip Üye Geri Alındı')
   .addField('Vip Üyesi Alınan Kullanıcı',member)
   .addField('Komutu Kullanan Yetkili', message.author)
  .setImage('https://cdn.discordapp.com/emojis/815677243988770836.gif?v=1') 
  client.channels.cache.get('828006616460034099').send(embed)///LOG KANAL İD YAZMALISIN
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['vipal','vip-al'],
    permLevel: 3
};

exports.help = {
    name: 'vip-al',
    description: 'vip-al',
    usage: 'vip-al'
}; 