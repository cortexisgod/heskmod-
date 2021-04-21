const db = require('quick.db');
const { MessageEmbed } = require('discord.js');



exports.run = async(client, message, args) => {


    if(!['832193272251154444'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} Bu Komutu Kullanmaya Yetikn Bulunmamaktadır !`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
    let tag = "∾"

    const kızrol = message.guild.roles.cache.find(r => r.id === '828398984602189824')
    const kızrol2 = message.guild.roles.cache.find(r => r.id === '833321420117114941')
    const unreg = message.guild.roles.cache.find(r => r.id === '833063258692911125')
    const unreg2 = message.guild.roles.cache.find(r => r.id === '828400350452514837')
    const chat = message.guild.channels.cache.find(r => r.id === '827981836911116319')

    const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

    let name = args[1]

    if(!name) return message.channel.send('Başarısız Lütfen Bir İsim Giriniz !')
    if(member.id === message.author.id) return message.channel.send('Kendini Kayıt Edemesin !')

    member.setNickname(`${tag} ${name}`)
    member.roles.remove(unreg)
    member.roles.remove(unreg2)
    member.roles.add(kızrol)
    member.roles.add(kızrol2)
    message.react('✅')
    message.channel.send('Başarı İle Kayıt Ettim!')
  
   
    chat.send(`${member} Aramıza Hoşgeldin Taga Buyur Çekinme **${tag}** .`)
 
    db.push(`isim.${message.guild.id}`, {userID: member.id, isim: name, role: erkekrol.id})
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kız", "k", "girl"],
    permLevel: 0,
    name: "kız"
  }
  
  exports.help = {
    name: "kız"
  };
  
  