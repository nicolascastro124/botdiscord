require('http').createServer((req, res) => res.end('hola')).listen();
require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });
const mySecret = process.env['TOKEN'];
const fs = require('fs');
const path = require('path');

const dirEvents = fs.readdirSync(path.join(__dirname, 'events'));


for (const fileEvent of dirEvents) {
  const event = require(path.join(__dirname, 'events', fileEvent));
  client.on(event.name, (...args) => event.run(client, ...args));
}

client.on('interactionCreate', (int) => {
  if (int.isCommand() && int.commandName === 'ping') {

    int.reply("Pong!");
  }

});



setInterval(function() {
  var hoy = new Date();
  var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
  var dia = hoy.getDay()

  if (hora == '1:0:0') {
    client.channels.resolve(process.env['GENERAL']).send("¡El día se ha reiniciado, es hora de quemar el FP! 🔥 ⏰");
  
  }
  if(dia == '1'){
    client.channels.resolve(process.env['GENERAL']).send("Una nueva semana ha comenzado, el limite de recompensa de algunas raids se ha restablecido.:alarm_clock::alarm_clock::alarm_clock::warning:");
  } 
  

}, 1000 )


client.login(mySecret);

