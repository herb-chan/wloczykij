const {
  Message,
  Client,
  SlashCommandBuilder,
  PermissionFlagsBits,
} = require("discord.js");
const welcomeSchema = require("../../Models/Welcome.js");
const { model, Schema } = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stwórz-powitanie")
    .setDescription("Stwórz wiadomość powitalną, dla nowych użytkowników.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)

    .addChannelOption((option) =>
      option
        .setName("kanał")
        .setDescription("Wybierz kanał, na którym wysyłana będzie wiadomość.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("wiadomość")
        .setDescription("Zdefiniuj wiadomość powitalną.")
        .setRequired(true)
    )
    .addRoleOption((option) =>
      option
        .setName("rola")
        .setDescription("Zdefiniuj rolę jaką otrzyma użytkownik po dołączeniu.")
        .setRequired(true)
    ),

  async execute(interaction) {
    const { channel, options } = interaction;

    const welcomeChannel = options.getChannel("kanał");
    const welcomeMessage = options.getString("wiadomość");
    const roleId = options.getRole("rola");

    if (
      !interaction.guild.members.me.permissions.has(
        PermissionFlagsBits.SendMessages
      )
    ) {
      interaction.reply({
        content: "Nie posiadam permisji by wykonać polecenie.",
        ephemeral: true,
      });
    }

    welcomeSchema.findOne(
      { Guild: interaction.guild.id },
      async (err, data) => {
        if (!data) {
          const newWelcome = await welcomeSchema.create({
            Guild: interaction.guild.id,
            Channel: welcomeChannel.id,
            Msg: welcomeMessage,
            Role: roleId.id,
          });
        }
        interaction.reply({
          content: "Pomyślnie utworzono wiadomość powitalną!",
          ephemeral: true,
        });
      }
    );
  },
};
