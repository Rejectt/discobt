const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on("ready", () => {
  function lol() {
    client.guilds.get('514850543227895808').roles.find("name", "Meme").setColor("RANDOM");
  }
  setInterval(lol, 6000);
})

