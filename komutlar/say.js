const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {


let guild = "818114335183208448"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `\<a:hesk_0:828583298300641340>`,
'1': `\<a:hesk_1:828583298258173983>`,
'2': `\<a:hesk_2:828583297298858015>`,
'3': `\<a:hesk_3:828583305984344105>`,
'4': `\<a:hesk_4:828583305951313920>`,                       
'5': `\<a:hesk_5:828583306127343636>`,
'6': `\<a:hesk_6:828583306021961758>`,
'7': `\<a:hesk_7:828583306756096003>`,
'8': `\<a:hesk_8:828583297382481930>`,
'9': `\<a:hesk_9:828583306907091014>`}[d];})}
    
  
  
var sessayı = count.toString().replace(/ /g, " ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `\<a:hesk_0:828583298300641340>`,
'1': `\<a:hesk_1:828583298258173983>`,
'2': `\<a:hesk_2:828583297298858015>`,
'3': `\<a:hesk_3:828583305984344105>`,
'4': `\<a:hesk_4:828583305951313920>`,                       
'5': `\<a:hesk_5:828583306127343636>`,
'6': `\<a:hesk_6:828583306021961758>`,
'7': `\<a:hesk_7:828583306756096003>`,
'8': `\<a:hesk_8:828583297382481930>`,
'9': `\<a:hesk_9:828583306907091014>`}[d];})}

var taglılar = 0;
let tag = "∾";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `\<a:hesk_0:828583298300641340>`,
'1': `\<a:hesk_1:828583298258173983>`,
'2': `\<a:hesk_2:828583297298858015>`,
'3': `\<a:hesk_3:828583305984344105>`,
'4': `\<a:hesk_4:828583305951313920>`,                       
'5': `\<a:hesk_5:828583306127343636>`,
'6': `\<a:hesk_6:828583306021961758>`,
'7': `\<a:hesk_7:828583306756096003>`,
'8': `\<a:hesk_8:828583297382481930>`,
'9': `\<a:hesk_9:828583306907091014>`}[d];})}
    

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `\<a:hesk_0:828583298300641340>`,
'1': `\<a:hesk_1:828583298258173983>`,
'2': `\<a:hesk_2:828583297298858015>`,
'3': `\<a:hesk_3:828583305984344105>`,
'4': `\<a:hesk_4:828583305951313920>`,                       
'5': `\<a:hesk_5:828583306127343636>`,
'6': `\<a:hesk_6:828583306021961758>`,
'7': `\<a:hesk_7:828583306756096003>`,
'8': `\<a:hesk_8:828583297382481930>`,
'9': `\<a:hesk_9:828583306907091014>`}[d];})}
    

  
  
  
var booster = message.guild.roles.cache.get("828259678374330429").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
    '0': `\<a:hesk_0:828583298300641340>`,
    '1': `\<a:hesk_1:828583298258173983>`,
    '2': `\<a:hesk_2:828583297298858015>`,
    '3': `\<a:hesk_3:828583305984344105>`,
    '4': `\<a:hesk_4:828583305951313920>`,                       
    '5': `\<a:hesk_5:828583306127343636>`,
    '6': `\<a:hesk_6:828583306021961758>`,
    '7': `\<a:hesk_7:828583306756096003>`,
    '8': `\<a:hesk_8:828583297382481930>`,
    '9': `\<a:hesk_9:828583306907091014>`}[d];})}
    
  
  

  var etiket =  message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator === "1895").size;
  var etiket = etiket.toString().replace(/ /g, "    ")
var üs6 = etiket.match(/([0-9])/g)
etiket = etiket.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs6) {
  etiket = etiket.replace(/([0-9])/g, d => {
return {
    '0': `\<a:hesk_0:828583298300641340>`,
    '1': `\<a:hesk_1:828583298258173983>`,
    '2': `\<a:hesk_2:828583297298858015>`,
    '3': `\<a:hesk_3:828583305984344105>`,
    '4': `\<a:hesk_4:828583305951313920>`,                       
    '5': `\<a:hesk_5:828583306127343636>`,
    '6': `\<a:hesk_6:828583306021961758>`,
    '7': `\<a:hesk_7:828583306756096003>`,
    '8': `\<a:hesk_8:828583297382481930>`,
    '9': `\<a:hesk_9:828583306907091014>`}[d];})}
          
    
  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
\<a:hesk_yldz:828583333449039892> Sunucuda Toplam ${üyesayısı} Üye bulunmakta.
\<a:hesk_yldz:828583333449039892> Sunucuda Toplam ${cevirimici} Üye Çevrimiçi.
\<a:hesk_yldz:828583333449039892> Ses Kanallarında ${sessayı} Üye Sohbet Ediyor.
\<a:hesk_yldz:828583333449039892> Tagımızda Toplam  ${taglılar} Toplam BulunanÜye Bulunmakta.
\<a:hesk_yldz:828583333449039892> İsminde #1985 Taşıyan Toplam ${etiket} Üye Bulunmaktadır.
\<a:hesk_yldz:828583333449039892> Sunucuda Toplam ${booster} Booster Üye Bulunmakta.`)
.setFooter('Cortex <3 Hesk')
msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}