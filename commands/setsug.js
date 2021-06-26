const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "setsug",
  alias: ["setsugerencia"],

execute (client, message, args){

      let lasmenciones = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) //Establecemos para las menciones y la ID del canal.
    
    if(!message.member.hasPermission("MANAGE_CHANNELS")) { //Abrimos condición para la falta de permisos del usuario.
      return message.channel.send(`**${message.author.username}**, no tienes permisos para seleccionar el canal de sugerencias.`) //Retornamos y un mensaje de aviso.
    } //Cerramos la condición.
    
    if(!lasmenciones) { //Abrimos condición si no menciona o pone la ID de un canal.
      return message.channel.send(`**${message.author.username}**, por favor, menciona o pone la ID del canal para las sugerencias.`) //Retornamos y un mensaje de aviso.
    } //Cerramos la condición.
        
    if(lasmenciones.type == "voice" || lasmenciones.type == "category") {  //Abrimos condición si menciona o pone la ID de un canal de VOZ y de CATEGORÍA.
      return message.channel.send(`**${message.author.username}**, por favor, menciona o pone la ID de un canal de TEXTO.`) //Retornamos y un mensaje de aviso.
    } //Cerramos la condición.
    
    if(!lasmenciones.permissionsFor(message.guild.me).has("VIEW_CHANNEL")) { //Abrimos condición si en el canal que menciono o poner la ID le falta permisos de "Ver canal". 
      return message.channel.send(`**${message.author.username}**, no tengo permisos de "Ver canal" por el canal ${lasmenciones} para ver poder ver el canal y hacer mi trabajo.`) //Retornamos y un mensaje de aviso.
    } //Cerramos la condición.
    
    if(!lasmenciones.permissionsFor(message.guild.me).has("EMBED_LINKS")) { //Abrimos condición si en el canal que menciono o poner la ID le falta permisos al bot de "Insertar enlaces". 
      return message.channel.send(`**${message.author.username}**, no tengo permisos de "Insertar enlaces" por el canal ${lasmenciones} para mandar las sugerencias.`) //Retornamos y un mensaje de aviso.
    } //Cerramos la condición.
    
    if(!lasmenciones.permissionsFor(message.guild.me).has("ADD_REACTIONS")) { //Abrimos condición si en el canal que menciono o poner la ID le falta permisos al bot de "Añadir reacciones". 
      return message.channel.send(`**${message.author.username}**, no tengo permisos de "Añadir reacciones" por el canal ${lasmenciones} para agregar las reacciones en las sugerencias.`) //Retornamos y un mensaje de aviso.
    } //Cerramos la condición.
    
    if(!lasmenciones.permissionsFor(message.guild.me).has("READ_MESSAGE_HISTORY")) { //Abrimos condición si en el canal que menciono o poner la ID le falta permisos al bot de "Leer el historial de mensajes".
      return message.channel.send(`**${message.author.username}**, no tengo permisos de "Leer el historial de mensajes" por el canal ${lasmenciones} para poder ver las sugerencias y agregar las reacciones.`) //Retornamos y un mensaje de aviso.
    } //Cerramos la condición.
    
    //Ahora, empezamos con "quick.db".
    
    db.set(`847850367285723199_${message.guild.id}`, lasmenciones.id) //Ahora, establecemos el canal con la ID a la clave de "suggestchannel_${message.guild.id}"
    message.channel.send(`El nuevo canal de sugerencias es ${lasmenciones}.`) //Un mensaje de aviso
  } //Cerramos
} 