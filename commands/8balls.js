 const Discord = require('discord.js');
 
module.exports = {
  name: "8balls", //Aquí ponemos el nombre del comando
  alias: ["8ball"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

   let mensaje = args.slice().join(" ")//Definimos el mensaje.
 if(!mensaje) return message.channel.send("Necesito que me digas una pregunta pa, sino tipo no puedo viste pa, por que no se cual es tu duda");//Si no dice ninguna pregunta, devolverï¿½ este mensaje.
 let respuestas = ["En mi opinion, si","Es cierto","Es decididamente si","Probablemente","Buen pronostico","Todo apunta a que si","Sin duda","Si","Si - definitivamente","Debes confiar en ello","Vaga, vuelve a intentarlo","Pregunta en otro momento","Sera mejor que no te lo diga ahora","No puedo predecirlo ahora","Concentrate y vuelve a preguntar","Puede ser","No cuentes con ello","Mi respuesta es no","Mis fuentes me dicen que no","Las perspectivas no son buenas","Muy dudoso"]//Definimos todas las respuestas con un Array.
 const ball = new Discord.MessageEmbed()//Definimos el embed.
 .setColor("RANDOM")//Le ponemos un color random.
 .setFooter("8Ball", client.user.avatarURL())//Le ponemos un Footer. (pie de página)
 .setTitle(`La pregunta \`${mensaje}\`, de \`${message.author.username}\``)//Y en el Titulo el autor y el mensaje.
 .setDescription(`Mi respuesta es: ${respuestas[( Math.floor(Math.random() * respuestas.length))]}.`)//Hacemos un maths random para que eliga de forma aleatoria lo que pusimos en RESPUESTAS.
 message.channel.send({ embed : ball })//Se envia el embed.

 }

} 
