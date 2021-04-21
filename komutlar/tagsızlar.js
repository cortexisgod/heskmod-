const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args) => {

    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setFooter(`Cross was here.`)
    let tag = "∾"
    let boosterRol = "828259678374330429"
    let kayıtsızRol = "833063258692911125"
    let kayıtsızRol2 = "828400350452514837"
 
    message.guild.members.cache.filter(s => !s.user.username.includes(tag) && !s.roles.cache.has(boosterRol) && !s.roles.cache.has(kayıtsızRol)).forEach(async(member) => {
        setTimeout(async() => {
            member.roles.set([kayıtsızRol])
            member.roles.set([kayıtsızRol2])
        }, 1000)
    })
    message.channel.send(embed.setDescription(`Kullanıcı adında tag bulunmayan kullanıcılar kayıtsıza atılıyor.`))

 }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tagsızlar', 'tgs'],
    permLevel: 0,
}

exports.help = {
      name: "tagsız"  
  
}