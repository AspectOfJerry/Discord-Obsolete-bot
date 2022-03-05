const DiscordJS = require('discord.js')
const {Intents} = DiscordJS
require('dotenv').config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS
    ]
})

client.on('ready', () => {
    console.log("Jerry Bot [OUTDATED] is online")
    setTimeout(() => {client.user.setStatus('dnd')}, 5000);
})

client.login(process.env.DISCORD_BOT_TOKEN)