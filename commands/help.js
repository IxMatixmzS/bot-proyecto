const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  alias: ["ayuda"],

  execute (client, message, args){

   message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
      },
      title: "COMANDOS",
      url: "https://www.youtube.com/channel/UCt7GNv0mKwyu3SzltispROw",
      description: "A continuación encontrarás todos los comandos disponibles del bot hasta el momento.",
      fields: [{
          name: "Diversión",
          value: "-8balls | -meme | -pesca | -say | -avatar "
        },
        {
          name: "Administración",
          value: "-setsug | -clear | -poll | -ban"
        },
        {
          name: "PRÓXIMAMENTE",
          value: "|| EN DESARROLLO ||"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
      }
    }
});

  }
}