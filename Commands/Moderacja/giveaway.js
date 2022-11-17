const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder, Embed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("giveaway")
    .setDescription("Rozpoczyna giveaway.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    
    execute(interaction) {
        const ping_embed = new EmbedBuilder()
        .setTitle('🏓 Pong!')
        .setDescription(`Opóźnienie wynosi ${Date.now() - interaction.createdTimestamp}ms.`)
        .setColor('#5e6242')
        
        interaction.reply({ embeds: [ping_embed], ephemeral: true})
    },
};