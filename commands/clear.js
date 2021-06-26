  const Discord = require('discord.js');

module.exports = {
  name: "clear",
  alias: ["borrar"],

execute (client, message, args){

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para usar este comando :no_entry:!")  
  let messages = args.join(" ");
    
  if (!messages) return message.channel.send("Ingresa la cantidad de mensajes a ser eliminada!")
  if (messages > 50) return message.channel.send("No puedes elminar más de 50 mensajes!");
  if(messages <= 1) return message.channel.send("No puedes eliminar menos de 2 mensajes!");
message.channel.bulkDelete(messages)

 }

} 