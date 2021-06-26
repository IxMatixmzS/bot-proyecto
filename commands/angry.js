  const Discord = require('discord.js');

module.exports = {
  name: "angry",
  alias: [],

execute (client, message, args){

        let nombre = message.author.username;
                 
                    const embed = new Discord.MessageEmbed()
                    .setTitle(`¡Cuidado! ${message.author.username} se enfureció! **¡Corran!**`)
                    .setImage("https://media.giphy.com/media/IbOSaSjJhMSl4qh3cj/giphy.gif") //gift del enojo
                    .setColor("#FF0000")
                    .setFooter("Comando Secreto (3/10)")
                    .setTimestamp()
                  message.channel.send({embed}).then(m => {
                    
                  setTimeout(function () {
                      m.react("😡")}, 2000)}) //Emoji que reacciona el bot al momento de q un usuario se enfade

 }

} 