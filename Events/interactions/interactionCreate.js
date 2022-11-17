const { CommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",

  execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) {
        interaction.reply({ content: "outdated command" });
      }
      command.execute(interaction, client);
    } 
  },
};
