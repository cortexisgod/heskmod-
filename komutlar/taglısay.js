const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  
if(!['828398983424507914'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\  
  

let tag = "∾";
const cortejj = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size

const cortsex = new MessageEmbed()
.setColor('RANDOM')
message.channel.send(cortsex.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(`Taglı Üye ・ **${cortejj}**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tag-say"],
  permLvl: 0,
}

  exports.help = {
  name: 'taglı'
}
