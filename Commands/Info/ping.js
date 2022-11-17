const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder, Embed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Sprawdź czas odpowiedzi bota."),
    execute(interaction) {
        const ping_embed = new EmbedBuilder()
        .setTitle('🏓 Pong!')
        .setDescription(`Opóźnienie wynosi ${Date.now() - interaction.createdTimestamp}ms!`)
        .setColor('#5e6242')
        interaction.reply({ embeds: [ping_embed], ephemeral: true})
    },
};