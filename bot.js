const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on("ready", () => {
  function meme() {
    client.guilds.get('514850543227895808').roles.find("name", "Meme").setColor("RANDOM");
  }
  setInterval(meme, 6000);
})

