const Discord = require('discord.js');

module.exports = {
  name: "ticket",
  alias: ["soporte"],

execute (client, message, args){

  let everyone = message.guild.roles.cache.find(rol => rol.name == "@everyone");

let e = message.guild.channels.cache.find(canal => canal.name == `ticket${message.author.username}`)
if(e) return message.channel.send("No puedes crear un ticket, ya tienes otro abierto")

const razon = args.join(" ")
if(!razon) return message.channel.send("Debes escribir una razón")

const embed = new Discord.MessageEmbed()
.setTitle("Soporte General")
.setDescription("A continuación estarás en una sala privada donde solo vos y nuestro equipo de soporte tienen acceso\ndeja tu problema en cuestion y intentaremos resolverlo lo más rápido posible")
.addField("Ticket creado por", `**${message.author.tag}**\n\nMotivo: **${razon}**`)
.addField("En caso de desear cerrar el ticket", "Reacciona al emoji '🔐' debajo de este mensaje.")
.setTimestamp()
.setColor("#FF0000")

message.guild.channels.create(`ticket-${message.author.username}`, {
    permissionOverwrites: [
        {
            id: everyone.id,
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
        },
        {
            id: message.author.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
        }
    ],
    parent: "847850367622709287"
}).then((c) =>c.send(embed)).then((msg) => {
    msg.react("🔐")

    msg.awaitReactions((reaction, user) => {
        if(message.author.id !== user.id) return;
        if(reaction.emoji.name === '🔐'){
            msg.channel.delete()
        }
    })
})

message.channel.send("Ticket creado.")

}

 } 