const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js'); 
require('dotenv').config();
const keepAlive = require('./server.js'); 

const fs = require('fs'); 
let { readdirSync } = require('fs'); 



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

/////////////

client.on("ready", () => {
  console.log(`${client.user.username} SHEEEEEESH, estoy listo para trabajar!`);
  client.user.setActivity(`-help`, { type: "PLAYING" });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);




/////////////

client.on('message', (message) => { 

let prefix = '-'

if(message.author.bot) return; 
if(!message.content.startsWith(prefix)) return; 

let usuario = message.mentions.members.first() || message.member; 
const args = message.content.slice(prefix.length).trim().split(/ +/g); 
const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}
});

client.login(process.env.TOKEN)