require("dotenv").config();
const { Client } = require("discord.js");

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_TYPING"],
});

const PREFIX = "!";
const cooldown = 60 * 20;

client.login(process.env.BOT_TOKEN);

client.on("ready", (c) => {
    console.log(`${c.user.tag} is ready.`);

    client.user.setPresence({
        activities: [{ name: "GenJhin ipact xd", type: "PLAYING" }],
        status: "online",
    });
});
client.once("message", (messageSent) => {
    messageSent.channel.send(`Hello, ${messageSent.author}!`);
});
