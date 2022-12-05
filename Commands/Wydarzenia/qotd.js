const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("qotd")
    .setDescription("Wyślij pytanie dnia.")
    .addStringOption((option) =>
      option
        .setName("pytanie")
        .setDescription("Podaj treść pytania.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("data")
        .setDescription("Podaj datę QOTD.")
        .setRequired(true)
    ),

  async execute(interaction) {
    const { guild, options } = interaction;

    const pytanie = options.getString("pytanie");
    const data = options.getString("data");

    const channel = interaction.guild.channels.cache.get("1042527960638443531");

    channel.threads.create({
      name: `Pytanie dnia! - ${data}`,
      message: { content: 
`${pytanie}

・<@&1037822949236932648>
`},
    });

    interaction.reply({
      content: "<:slodka_zabka2:1010945251562758164> | Pomyślnie wysłano QOTD.",
      ephemeral: true,
    });
  },
};
