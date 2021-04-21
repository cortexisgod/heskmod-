const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
    let prefix = ayarlar.prefix;
 
     
      
    if(!['828398985193979925'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
    return message.channel.send(new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setDescription(`${message.author} Bu Komutu Kullanmaya Yetikn Bulunmamaktadır !`)
    .setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));



    let tag = "∾";
    let user = message.mentions.users.first()
    let member = message.guild.member(user)
    if(!user) return message.channel.send('Bir kullanıcı etiketle.')
    let isim = args.slice(0).join(" ")
    if(!isim) return message.channel.send('İsim gir.')
    if(isim.lenght > 32) return message.channel.send('Lütfen 32 kelimeyi geçmicek şekilde isim giriniz.')

    member.setNickname(`${tag} ${isim}`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nick'],
  permLevel: 0
};

exports.help = {
  name: 'isim, i',
  description: 'i',
  usage: 'i'
};