const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Zbanuj wybranego użytkownika.")
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption(option =>
            option.setName("target")
                .setDescription("Użytkownik, którego chcesz zbanować.")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("reason")
                .setDescription("Powód bana.")
        ),

    async execute(interaction) {
        const { channel, options } = interaction;

        const mod = interaction.user.id;
        const user = options.getUser("target");
        const reason = options.getString("reason") || "Nie podano powodu.";

        const member = await interaction.guild.members.fetch(user.id);

        const errEmbed = new EmbedBuilder()
            .setDescription(`Powoli! Jesteś za cienki w uszach żeby zbanować ${user.username} koleś.`)
            .setColor('#c42e1d');

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true });

        await member.ban({ reason });

        const embed = new EmbedBuilder()
            .setDescription(`Zbanowano użytkownika.`)
            .addFields(
                { name: 'Moderator:', value: `<@${mod}>`},
                { name: 'Użytkownik:', value: `${member}`},
                { name: 'Powód:', value: `${reason}`}
            )
            .setColor('#5fb041')
            .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        });
    }
}