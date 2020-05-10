const Discord = require("discord.js");
const request = require("request");
const dotenv = require('dotenv');
dotenv.config();
const client = new Discord.Client();

const options = {
  url: "https://darkan.org/api/world/players",
  headers: {
    accept: "*/*",
  },
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(() => {
    request(options, (err, res) => {
      client.user.setActivity(`Players online: ${JSON.parse(res.body).length}`);
    });
  }, 1000);
});

client.login(process.env.TOKEN);
