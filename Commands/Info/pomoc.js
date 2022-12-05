const {
  ComponentType,
  EmbedBuilder,
  SlashCommandBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pomoc")
    .setDescription("Zwraca listę wszystkich dostępnych komend."),
  async execute(interaction) {  
    const emojis = {
      info: "📝",
      wydarzenia: "🎉",
      moderacja: "🛠️",
      ustawienia: "⚙️",
      test: "🔧"
    };

    const directories = [
      ...new Set(interaction.client.commands.map((cmd) => cmd.folder)),
    ];

    const formatString = (str) =>
      `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

    const categories = directories.map((dir) => {
      const getCommands = interaction.client.commands
        .filter((cmd) => cmd.folder === dir)
        .map((cmd) => {
          return {
            name: cmd.data.name,
            description:
              cmd.data.description ||
              "Ta komenda nie posiada opisu.",
          };
        });

      return {
        directory: formatString(dir),
        commands: getCommands,
      };
    });

    const embed = new EmbedBuilder()
    .setAuthor({ name: 'Włóczykij:', iconURL: 'https://i.imgur.com/WFeloa7.png' })
    .setDescription('Witaj przybyszu! Jestem strażnikiem tego zacnego przybytku i od teraz będę Ci towarzyszył, zacznijmy od początku:')
    .setColor('#5e6242');

    const components = (state) => [
      new ActionRowBuilder().addComponents(
        new SelectMenuBuilder()
          .setCustomId("pomoc-menu")
          .setPlaceholder("Proszę wybrać kategorię")
          .setDisabled(state)
          .addOptions(
            categories.map((cmd) => {
              return {
                label: cmd.directory,
                value: cmd.directory.toLowerCase(),
                description: `Komendy z kategorii ${cmd.directory}.`,
                emoji: emojis[cmd.directory.toLowerCase() || null],
              };
            })
          )
      ),
    ];

    const initialMessage = await interaction.reply({
      embeds: [embed],
      components: components(false),
      ephemeral: true,
    });

    const filter = (interaction) =>
      interaction.user.id === interaction.member.id;

    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      componentType: ComponentType.SelectMenu,
    });

    collector.on("collect", (interaction) => {
      const [directory] = interaction.values;
      const category = categories.find(
        (x) => x.directory.toLowerCase() === directory
      );

      const categoryEmbed = new EmbedBuilder()
        .setAuthor({ name: `Kategoria | ${formatString(directory)}`, iconURL: 'https://i.imgur.com/WFeloa7.png' })
        .setDescription(
          `Lista wszystkich dostępnych komend z kategorii ${directory}`
        )
        .setColor('#5e6242')
        .addFields(
          category.commands.map((cmd) => {
            return {
              name: `**${cmd.name}**`,
              value: cmd.description,
              inline: true,
            };
          })
        );

      interaction.update({ embeds: [categoryEmbed] });
    });

    collector.on("end", () => {
      initialMessage.edit({ components: components(true) });
    });
  },
};
