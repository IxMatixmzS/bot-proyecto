const Discord = require('discord.js');

module.exports = {
  name: "say",
  alias: ["decir"],

execute (bot, message, args){

      //console.log(args[0]);// user
    //console.log(args[1]);// role
    //console.log(args[2]);//time
    
    message.delete();
    
    if(!args.join(" ")){
      return message.channel.send(":x: " + "| escribe algo.")
    }
    message.channel.send(args.join(" "));
    }
    

 }