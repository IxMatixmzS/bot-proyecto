const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');



module.exports = {
  name: "ban",
  alias: ["banear"],

  execute (client, message, args){

   if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Flaco no tengo permisos, configurame bien y ahi si baneo a la pipol")

   let user = message.mentions.members.first();

   let banReason = args.join(' ').slice(22);

   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Flaco para un toque, no sos admin pa")

   if(!user) return message.channel.send("Menciona al simp q queres  banear")

   if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedes banear a una persona de un rol igual o mayor que vos")

   if(user === message.author) return message.channel.send("No te podes banear a vos misma pa")

   if(!banReason) return message.channel.send("Escribi una razon pa banear al simp este")

   user.ban({ reason: banReason})

const embedDatos = new Discord.MessageEmbed()
  .setTitle("BANEOS")
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor("#FF0000")
  .setImage(client.user.avatarURL())
  .setThumbnail(message.author.displayAvatarURL())
  .setTimestamp()
  .setURL("https://www.youtube.com/channel/UCt7GNv0mKwyu3SzltispROw")
  .addField("Usuario sancionado:", `${user}`)
  .addField("Motivo de su baneo:", `${banReason}`)

  message.channel.send({ embed: embedDatos });

  }
}