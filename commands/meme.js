const red = require('reddit-fetch')
const {MessageEmbed} = require('discord.js')

module.exports = {
  name: "meme",
  alias: ["random"],

execute (client, message, args){

  red({ //hay que pasarle unas opciones
 subreddit: 'SpanishMeme', //se puede poner cualquier subreddit, yo pongo SpanishMeme porque es el unico que conozco xd
 sort: 'hot',
 allowNSFW: false, //por si queremos que tambien entren posts con la etiqueta de NSFW, yo le pongo false 
 allowModPost: false, // ni idea que es esto pero el comando funciona, asi que pongamoslo en false xd
 allowCrossPost: false, //tampoco se que es
 allowVideo: false // si queremos que salga videos, como es un embed pues hay que ponerle que no
}).then(post => {
 const embed = new MessageEmbed()
 .setColor("RANDOM")
 .setTitle(post.title)
 .setImage(post.url)
 if(!post.url){
 return message.channel.send("No encontre memes :(")
 } else {
 message.channel.send(embed)
}
}).catch(() => message.channel.send("Hubo un error"))

 }

} 