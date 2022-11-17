const {EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('stwórz_weryfikacje')
    .setDescription('Stwórz weryfikację na wybranym przez siebie kanale.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    
    .addChannelOption(option =>
        option.setName('kanał')
        .setDescription('Wybierz kanał, na który zostanie wysłana wiadomość weryfikacyjna.')
        .setRequired(true)
    )
    .addStringOption(option =>
        option.setName("tytuł")
            .setDescription("Zdefiniuj tytuł wiadomości, która będzie wyświetlana.")
            .setRequired(true)
    )
    .addStringOption(option =>
        option.setName("wiadomość")
            .setDescription("Zdefiniuj wiadomość jaka będzie wyświetlana.")
            .setRequired(true)
    )
    .addStringOption(option =>
        option.setName("kolor")
            .setDescription("Zdefiniuj kolor wiadomości, która będzie wyświetlana. Kolor należy podać jako HEX (np. #ffffff).")
            .setRequired(true)
    )
    .addStringOption(option =>
        option.setName("przycisk")
            .setDescription("Zdefiniuj co będzie wyświetlane na przycisku weryfikującym.")
            .setRequired(true)
    ),

    async execute(interaction) {
        const channel = interaction.options.getChannel('kanał');
        const message = interaction.options.getString('wiadomość');
        const title = interaction.options.getString('tytuł');
        const colour = interaction.options.getString('kolor');
        const button = interaction.options.getString('przycisk');

        const verifyEmbed = new EmbedBuilder()
        .setTitle(`${title}`)
        .setDescription(`${message}`)
        .setColor(`${colour}`)

        let sendChannel = channel.send({
            embeds: ([verifyEmbed]),
            components: [
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId('zweryfikuj').setLabel(`${button}`).setStyle(ButtonStyle.Success),
                ),
            ],
        });
        if (!sendChannel) {
            return interaction.reply({content: 'Wystąpił błąd! Spróbuj ponownie później!.', ephemeral: true});
        } else {
            return interaction.reply({content: 'Weryfikacja została pomyślnie utworzona!', ephemeral: true});
        }
    },
};