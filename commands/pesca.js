const Discord = require('discord.js');

module.exports = {
  name: "pesca",
  alias: ["fish"],

execute (client, message, args){

  let rollfish = Math.floor(Math.random() * 7) +1;//hace que salga un numero random entre 0.001 y 1 y luego lo multiplica por 7 y agrega 1
if(rollfish === 1) return message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste un tremendo: :tropical_fish:'); // si el numero random es 1 esta es la respuesta
if(rollfish === 2) return message.channel.send('mas fps mi rey, ' + message.author.username + '! pescaste un pez RGB: :fish:'); //si el numero random es 2 esta es la respuesta
if(rollfish => 3) return message.channel.send('HERMANO, DOOOU, ' + message.author.username + '! pescaste una 2060 fuera de stock: :shopping_cart:'); //si el numero es mas grande que 3 esta es la respuesta

}

 } 

 //Dooou hermano, atrapaste una 2060 fuera de stock