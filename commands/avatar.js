const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatar",
  alias: ["icono"],

execute (client, message, args){

  if(message.author.bot) return; //detecta si es un bot y evita bucle dou
let miembro = message.mentions.users.first() //Agarra a la primera menci�n 
if (!miembro) { //Si no hay menci�n mandara el avatar del autor del mensaje
const embed = new Discord.MessageEmbed()
    .setImage(`${message.author.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor("#FF0000")
    .setFooter(`Avatar de ${message.author.tag}`);
    
message.channel.send(embed);

} else { //Si hay menci�n dar� el avatar del mencionado.
const embed = new Discord.MessageEmbed()
    .setImage(`${miembro.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor("#FF0000")
    .setFooter(`Avatar de ${miembro.tag}`);

message.channel.send(embed);

}}

 }