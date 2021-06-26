const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = { 
  name: "encuesta",
  alias: ["opciones", "votar"],
  description: "Este comando sirve para hacer encuestas en el servidor.",
  execute: async (client, message, args) => {

 let encuesta = args.join( ' ' ) // Definimos encuesta para el mensaje que la persona escribe.

    if(!encuesta) return message.channel.send(':pencil: Debes escribir una encuesta a mandar, recuerda que la encuesta se mandara conforme tu la escribas.') // Si no escribes una encuesta te enviara esto el bot.

    
      const embed = new Discord.MessageEmbed() // Creamos el embed
      .setTitle(encuesta)
      .setDescription("Vota para determinar si llevar a cabo lo que está arriba!")
      .setFooter(message.guild.name, message.guild.iconURL)
      .setTimestamp()
      .setColor(0x6766cc)
      const msg = await message.channel.send(embed)
      await msg.react("✅")
      await msg.react("❌")

  } 
  }