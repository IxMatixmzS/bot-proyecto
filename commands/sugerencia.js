const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "sugerencia",
  alias: ["suggest", "sugerir", "sugiero"],

execute (client, message, args){

     let canal = db.get(`847850367285723199_${message.guild.id}`); //Establecemos para el canal que este establecido en la base de datos.

    if(canal === null) { //Abrimos condiciçon en el caso que mande un "null".
    return message.channel.send(`**${message.author.username}**, no hay ningún canal establecido.`) //Retornamos y un mensaje de aviso.
  } //Cerramos condición.
    
   let razon = args.join(" ") //Establecemos para los argumentos
    
    if(!razon) return message.channel.send(`**${message.author.username}**,  pone tu sugerencia.`) //Abrimos condición en el caso que no mande ningún mensaje ("razon"). Retornamos y un mensaje de aviso.
             
   let sugerencia = new Discord.MessageEmbed() //Un EMBED parecido al de Chocolat.
   .setAuthor(message.author.tag, message.author.avatarURL()) //El tag del usuario y el avatar (opcional).
   .addField("**Mi sugerencia es**", razon) //Un mensajito de parte del usuario con la sugerencia.
   .setColor("RANDOM") //El color del EMBED sea RANDOM (opcional).
   .setFooter(`Sugerencia para ${message.guild.name}`) //Footer basico (opcional).
   .setTimestamp()//Para el tiempo (opcional).

client.channels.cache.get(canal).send(sugerencia).then(m => { //Establecemos que el mensaje del bot se mande por el canal establecido en la base de datos y las reacciones en el EMBED.
            m.react("✅") //Agreagmos a que reaccione al emoji.
            m.react("❌") //Agregamos a que reaccione al emoji.
         })//Cerramos.
  }//Cerramos.
}//Cerramos.

 