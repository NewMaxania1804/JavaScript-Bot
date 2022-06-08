const config = require('./settings.json')
const token = config.token
const { Client } = require('discord.js')
const client = new Client({intents:[]})

client.once("ready", () => {

    console.log('Ich bin online!')
    client.user.setActivity({name: "ich bin kuhl", type: "PLAYING"})
})

client.login(token)