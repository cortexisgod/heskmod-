const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
const tags = require('common-tags');
const ready = require('./events/ready');

  //

  var prefix = ayarlar.prefix;//
  //
  const log = message => {//
      console.log(`${message}`);//
  };

  client.commands = new Discord.Collection();//
  client.aliases = new Discord.Collection();//
  fs.readdir('./komutlar/', (err, files) => {//
      if (err) console.error(err);//
      log(`‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      ${files.length} komut yüklenecek.
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);//
      files.forEach(f => {//
          let props = require(`./komutlar/${f}`);//
          log(`[KOMUT] | ${props.help.name} Eklendi.`);//
          client.commands.set(props.help.name, props);//
          props.conf.aliases.forEach(alias => {//
              client.aliases.set(alias, props.help.name);//
          });
      });
  });




  client.reload = command => {
      return new Promise((resolve, reject) => {
          try {
              delete require.cache[require.resolve(`./komutlar/${command}`)];
              let cmd = require(`./komutlar/${command}`);
              client.commands.delete(command);
              client.aliases.forEach((cmd, alias) => {
                  if (cmd === command) client.aliases.delete(alias);
              });
              client.commands.set(command, cmd);
              cmd.conf.aliases.forEach(alias => {
                  client.aliases.set(alias, cmd.help.name);
              });
              resolve();
          } catch (e) {
              reject(e);
          }
      });
  };

  client.load = command => {
      return new Promise((resolve, reject) => {
          try {
              let cmd = require(`./komutlar/${command}`);
              client.commands.set(command, cmd);
              cmd.conf.aliases.forEach(alias => {
                  client.aliases.set(alias, cmd.help.name);
              });
              resolve();
          } catch (e) {
              reject(e);
          }
      });
  };



  client.unload = command => {
      return new Promise((resolve, reject) => {
          try {
              delete require.cache[require.resolve(`./komutlar/${command}`)];
              let cmd = require(`./komutlar/${command}`);
              client.commands.delete(command);
              client.aliases.forEach((cmd, alias) => {
                  if (cmd === command) client.aliases.delete(alias);
              });
              resolve();
          } catch (e) {
              reject(e);
          }
      });
  };

  client.elevation = message => {
      if (!message.guild) {
          return;
      }

      let permlvl = 0;
      if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
      if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
      if (message.author.id === ayarlar.sahip) permlvl = 4;
      return permlvl;
  };

  var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
  // client.on('debug', e => {
  //   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
  // });
  client.on('warn', e => {
      console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
  });
  client.on('error', e => {
      console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
  });


////////----//


 ////

 client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tag') {
    msg.channel.send('∾') 
  }
});

///////////////
client.on('guildMemberAdd', async(member) => {
    let rol = member.guild.roles.cache.find(r => r.name === "Karantina");
    let cezalımı = db.fetch(`cezali_${member.guild.id + member.id}`)
    let sürejail = db.fetch(`süreJail_${member.id + member.guild.id}`)
    if (!cezalımı) return;
    if (cezalımı == "cezali") {
    member.roles.add(ayarlar.JailCezalıRol)
     
    member.send("Cezalıyken Sunucudan Çıktığın için Yeniden Cezalı Rolü Verildi!")
     setTimeout(function(){
        // msg.channel.send(`<@${user.id}> Muten açıldı.`)
    db.delete(`cezali_${member.guild.id + member.id}`)
        member.send(`<@${member.id}> Cezan açıldı.`)
        member.roles.remove('827990583326146622');
      }, ms(sürejail));
    }
    })
    /////
    client.on('guildMemberAdd', async(member) => {
        let mute = member.guild.roles.cache.find(r => r.name === "Muted");
        let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
        let süre = db.fetch(`süre_${member.id + member.guild.id}`)
        if (!mutelimi) return;
        if (mutelimi == "muteli") {
        member.roles.add(ayarlar.MuteliRol)
         
        member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
         setTimeout(function(){
            // msg.channel.send(`<@${user.id}> Muten açıldı.`)
        db.delete(`muteli_${member.guild.id + member.id}`)
            member.send(`<@${member.id}> Muten açıldı.`)
            member.roles.remove('828404929387167744');
          }, ms(süre));
        }
        })


//

        client.on('guildMemberAdd', async member => {
            const data = require('quick.db')
            const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
            if(asd) {
            let data2 = await data.fetch(`jailrol_${member.guild.id}`)
            let rol = member.guild.roles.cache.get(data2)
            if(!rol) return;
            let kişi = member.guild.members.cache.get(member.id)
            kişi.roles.add(rol.id);
            kişi.roles.cache.forEach(r => {
            kişi.roles.remove(r.id)
            data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
                data.set(`${member.guild.id}.jail.${kişi.id}`)
              const wasted = new Discord.MessageEmbed()
              .setAuthor(member.user.tag, member.user.avatarURL({ dynamic : true }))
              .setColor(`#0x800d0d`)
              .setDescription(`Dostum hadi ama !!! Jaildan Kaçamazsın ikimizde birbirimizi kandırmayalım...!`)
              .setTimestamp()
                member.send(wasted)
            } 
              
              
            })
            

//

client.on('guildMemberAdd', async (member) => {

      let cortexkanal = client.channels.cache.get("827982920944975912")
  
    let cortexuser = client.users.cache.get(member.id);
    let cortexkullanıcı = client.users.cache.get(member.id)
    const cortexhesapkurulus = new Date().getTime()- cortexkullanıcı.createdAt.getTime();
    let cortej;
    moment.locale("tr");
    if (cortexhesapkurulus < 1296000000) cortej = ' Güvenilir Değil \<a:hesk_no:834482090996924426> !'
    if (cortexhesapkurulus > 1296000000) cortej = ' Güvenilir \<a:hesk_yes:834482090644078713> !'
    
    cortexkanal.send(`
         \<a:hesk_tag2:834477543573684224>  Aramıza Hoşgeldin ${member} (${member.id}) Seninle Birlikte ${member.guild.memberCount} Kişiyiz
    
    \<a:hesk_tag5:834477674155999232>  **V.Confirmed** Kanalarına Geçip Kayıt Olabilirsin Ayrıca Tagımızı Almalısınız **∾** 
\<@&828398985193979925> Rolundekiler Senle En Kısa Zamanda İlgilenicek

    \<a:hesk_tag5:834477674155999232> <#818177067547754498> Kısmınızı Okumanızı Şiddetle Tavsiye Ediyoruz!

    \<a:hesk_tag2:834477543573684224>  Hesabın Kuruluş Tarihi (${moment(member.user.createdAt).format("``DD MMMM YYYY hh:mm:ss``")})
Hesabın Güvenlik Durumu **${cortej}** 
      
      `)
    })
    
  ///
  client.on("userUpdate", async (oldUser, newUser) => {
    if (oldUser.username !== newUser.username) {
    const tag = '∾'
    const sunucu = '818114335183208448'
    const log = '828006616460034099'
    const rol = '828577248851394580'
  
    try {
  
    if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
    await client.channels.cache.get(log).send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim`));
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim!`)
    }
    if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
    await client.channels.cache.get(log).send(new Discord.MessageEmbed().setColor("RED").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`));
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım!`)
    }
  } catch (e) {
  console.log(`Bir hata oluştu! ${e}`)
   }
  }
  });  
  //


//
client.on('guildMemberAdd', member => {  
    member.setNickname('▪ İsim')
    member.roles.add('833063258692911125')
    member.roles.add('828400350452514837')
    member.roles.add('833063258692911125')
    member.roles.add('828400350452514837')
   })
   //
   client.on("guildMemberAdd", member => {
     let sunucuid = "818114335183208448"; //Buraya sunucunuzun IDsini yazın
     let tag = "∾"; //Buraya tagınızı yazın
     let rol = "828577248851394580"; //Buraya tag alındığı zaman verilecek rolün IDsini yazın
     let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.name == 'bot-log'); //tagrol-log yerine kendi log kanalınızın ismini yazabilirsiniz
   if(member.user.username.includes(tag)){
   member.roles.add(rol)
     const tagalma = new Discord.MessageEmbed()
         .setColor("GREEN")
         .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
         .setTimestamp()
        client.channels.cache.get('828006616460034099').send(tagalma)
   }
   })
   ///


    client.on("guildMemberAdd", member => {

    if(member.user.username.includes("✩")){
      member.roles.add("828400351182061568")
      member.roles.remove("828400349848535080")
      member.roles.remove("828400350452514837")
      member.send("Yasaklı Tagdasın Dostum !")
      }
      })



          


client.on("ready", () => {   
  client.channels.cache.get("832377037872300042").join();
})

           

client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});





client.on("guildMemberRemove", async member => {
  db.set(`roles.${member.id}`, member.roles.cache.map(x => x.id))
  db.set(`isim.${member.id}`, member.displayName) 
    });

client.on("guildMemberAdd", async member => {
let rol = await db.get(`roles.${member.id}`);
let nick = await db.get(`isim.${member.id}`)

member.roles.set(rol).catch(e => { });
member.setNickname(nick)
db.delete(`eskirolleri.${member.id}`);
db.delete(`isim.${member.id}`);
})





// 

client.on("userUpdate", async (oldUser, newUser) => {
    if (oldUser.username !== newUser.username) {
    const tag = '∾'
    const sunucu = '818114335183208448'
    const kanal = '828006616460034099'
    const lightmind = '828577248851394580' // taglı lightmind id
    const reborn = ["828399927054434324", "828399927741644840", "828398984602189824", "833321420117114941"] // reborn rolünü gir ornek erkek rolü veya kadın rolü gidicek tag salınınca.
    const sphere = 'KAYITSIZ ROL' // sphere Rolü parçası
  
    
  
    try {
  
    if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(lightmind)) {
    await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`${newUser} ${tag} Tagımızı Aldığı için <@&${lightmind}> Rolünü kazandı! <a:kayit_:718606678479732746>`));
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(lightmind);
    }
    if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(lightmind)) {
    await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı için <@&${lightmind}> Rolünü kaybetti! <a:onaylandi:741673803838390353>`));
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(lightmind);
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(reborn);
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(sphere);
    }
  } catch (e) {
  console.log(`Bir hata oluştu! ${e}`)
   }
  }
  });
  



client.login(ayarlar.token);