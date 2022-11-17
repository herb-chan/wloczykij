const {Client} = require('discord.js');
const mongoose = require('mongoose');
const config = require("../../config.json");
const colors = require('colors');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        await mongoose.connect(config.mongodb || '', {
            keepAlive: true,
        });

        if (mongoose.connect) {
            console.log(colors.green('MongoDB connection succesful.'))
        }
        else {
            console.log(colors.red('MongoDB connection unsuccesful.'))
        }

        console.log(`${client.user.username}` + colors.green(` is now online.`))
    }
}