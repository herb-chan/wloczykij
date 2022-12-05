const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const logs = require("discord-logs");

const { Guilds, GuildMembers, GuildMessages, MessageContent } =
  GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const { handleLogs } = require("./Handlers/handleLogs");
const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

const client = new Client({
  intents: [
    Guilds, 
    GuildMembers, 
    GuildMessages, 
    MessageContent,
  ],
  partials: [
    User,
     Message, 
     GuildMember, 
     ThreadMember],
});

client.commands = new Collection();
client.config = require("./config.json");

client.login(client.config.token).then(() => {
  handleLogs(client);
  loadEvents(client);
  loadCommands(client);
});
