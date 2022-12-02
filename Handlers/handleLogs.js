const { EmbedBuilder } = require("discord.js");

function handleLogs(client) {
    const logSchema = require("../Models/Logs");

    function send_log(guildId, embed) {
        logSchema.findOne({ Guild: guildId }, async (err, data) => {
            if (!data || !data.Channel) return;
            const LogChannel = client.channels.cache.get(data.Channel);
            embed.setTimestamp();
            LogChannel.send({ embeds: [embed] });
        });
    }

    client.on("messageDelete", function (message) {
        if (message.author.bot) return;

        const embed = new EmbedBuilder()
            .setTitle('Usunięto wiadomość')
            .setColor('Red')
            .setDescription(`
            **Autor:** <@${message.author.id}>
            **Kanał:** <#${message.channel.id}>
            **Zawartość wiadomości: **\`${message.content.replace(/`/g, "'")}\`
         `);

        return send_log(message.guild.id, embed);
    });

    // Channel Topic Updating 
    client.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano temat kanału')
            .setColor('Green')
            .setDescription(`Temat kanału ${channel} został zmieniony z **${oldTopic}** na **${newTopic}**`);

        return send_log(channel.guild.id, embed);

    });

    // Channel Permission Updating
    client.on("guildChannelPermissionsUpdate", (channel, oldPermissions, newPermissions) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano uprawnienia kanału')
            .setColor('Green')
            .setDescription('Zaktualizowano uprawnienia kanału: '+ channel.name);

        return send_log(channel.guild.id, embed);

    })

    // unhandled Guild Channel Update
    client.on("unhandledGuildChannelUpdate", (oldChannel, newChannel) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano kanał')
            .setColor('Green')
            .setDescription("Kanał '" + oldChannel.id + "' został zaktualizowany, niestety nie byłem w stanie stwierdzić co się zmieniło...");

        return send_log(oldChannel.guild.id, embed);

    });

    // Member Started Boosting
    client.on("guildMemberBoost", (member) => {

        const embed = new EmbedBuilder()
            .setTitle('Jeden z czytelników ulepszył BOOKink!')
            .setColor('Pink')
            .setDescription(`**${member.user.tag}** ulepszył nasz serwer!`);
        return send_log(member.guild.id, embed);

    })

    // Member Unboosted
    client.on("guildMemberUnboost", (member) => {

        const embed = new EmbedBuilder()
            .setTitle('Jeden z czytelników przestał ulepszać BOOKink!')
            .setColor('Pink')
            .setDescription(`**${member.user.tag}** has stopped boosting  ${member.guild.name}!`);

        return send_log(member.guild.id, embed);

    })

    // Member Got Role
    client.on("guildMemberRoleAdd", (member, role) => {

        const embed = new EmbedBuilder()
            .setTitle('Przyznano rangę czytelnikowi')
            .setColor('Green')
            .setDescription(`Czytelnikowi **${member.user.tag}** została przyznana rola \`${role.name}\``);

        return send_log(member.guild.id, embed);

    })

    // Member Lost Role
    client.on("guildMemberRoleRemove", (member, role) => {

        const embed = new EmbedBuilder()
            .setTitle('Odebrano rangę czytelnikowi')
            .setColor('Red')
            .setDescription(`Czytelnikowi **${member.user.tag}** została odebrana rola \`${role.name}\``);

        return send_log(member.guild.id, embed);

    })

    // Nickname Changed
    client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano pseudonim')
            .setColor('Green')
            .setDescription(`Pseudonim czytelnika ${member.user.tag} został zmieniony z \`${oldNickname}\` na \`${newNickname}\``);

        return send_log(member.guild.id, embed);

    })

    // Member Joined
    client.on("guildMemberAdd", (member) => {

        const embed = new EmbedBuilder()
            .setTitle('Czytelnik dołączył')
            .setColor('Green')
            .setDescription(`Czytelnik: ${member.user} (\`${member.user.id}\`)\n\`${member.user.tag}\``,
                member.user.displayAvatarURL({ dynamic: true }));

        return send_log(member.guild.id, embed);

    });

    // Member Left
    client.on("guildMemberRemove", (member) => {

        const embed = new EmbedBuilder()
            .setTitle('Czytelnik odszedł')
            .setColor('Red')
            .setDescription(`Czytelnik: ${member.user} (\`${member.user.id}\`)\n\`${member.user.tag}\``,
                member.user.displayAvatarURL({ dynamic: true }));

        return send_log(member.guild.id, embed);

    });

    // Server Boost Level Up
    client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {

        const embed = new EmbedBuilder()
            .setTitle('Nowy poziom ulepszenia')
            .setColor('Pink')
            .setDescription(`${guild.name} osiągnął poziom ${newLevel}!`);

        return send_log(guild.id, embed);

    })

    // Server Boost Level Down
    client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {

        const embed = new EmbedBuilder()
            .setTitle('Nowy poziom ulepszenia')
            .setColor('Pink')
            .setDescription(`${guild.name} spadł z ${oldLevel} poziomu na ${newLevel} poziom`);

        return send_log(guild.id, embed);

    })

    // Banner Added
    client.on("guildBannerAdd", (guild, bannerURL) => {

        const embed = new EmbedBuilder()
            .setTitle('Ustawiono nowy banner serwera')
            .setColor('Green')
            .setImage(bannerURL)

        return send_log(guild.id, embed);

    })

    // AFK Channel Added
    client.on("guildAfkChannelAdd", (guild, afkChannel) => {

        const embed = new EmbedBuilder()
            .setTitle('Dodano kanał AFK')
            .setColor('Green')
            .setDescription(`${guild.name} posiada teraz nowy kanał AFK: ${afkChannel}`);

        return send_log(guild.id, embed);

    })

    // Guild Vanity Add
    client.on("guildVanityURLAdd", (guild, vanityURL) => {

        const embed = new EmbedBuilder()
            .setTitle('Dodano specjalne zaproszenie')
            .setColor('Green')
            .setDescription(`${guild.name} posiada teraz specjalne zaproszenie: ${vanityURL}`);

        return send_log(guild.id, embed);

    })

    // Guild Vanity Remove
    client.on("guildVanityURLRemove", (guild, vanityURL) => {

        const embed = new EmbedBuilder()
            .setTitle('Usunięto specjalne zaproszenie')
            .setColor('Red')
            .setDescription(`${guild.name} nie posiada teraz specjalnego zaproszenia: ${vanityURL}`);

        return send_log(guild.id, embed);

    })

    // Guild Vanity Link Updated
    client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano specjalne zaproszenie')
            .setColor('Green')
            .setDescription(`Serwer ${guild.name} zmienił swoje specjalne zaproszenie z ${oldVanityURL} na ${newVanityURL}!`);

        return send_log(guild.id, embed);

    })

    // Message Pinned
    client.on("messagePinned", (message) => {

        const embed = new EmbedBuilder()
            .setTitle('Przypięto wiadomość')
            .setColor('Grey')
            .setDescription(`Wiadomość ${message} została przypięta przez ${message.author}`);

        return send_log(message.guild.id, embed);

    })

    // Message Edited
    client.on("messageContentEdited", (message, oldContent, newContent) => {

        const embed = new EmbedBuilder()
            .setTitle('Edytowano wiadomość')
            .setColor('Grey')
            .setDescription(`Zawartość wiadomości została zmieniona z \`${oldContent}\` na \`${newContent}\` przez ${message.author}`);

        return send_log(message.guild.id, embed);

    })

    // Role Position Updated
    client.on("rolePositionUpdate", (role, oldPosition, newPosition) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano pozycje rangi')
            .setColor('Green')
            .setDescription("Ranga " + role.name + " była na pozycji " + oldPosition + " a teraz jest na pozycji " + newPosition);

        return send_log(role.guild.id, embed);

    })

    // Role Permission Updated
    client.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano uprawnienia rangi')
            .setColor('Green')
            .setDescription("Ranga " + role.name + " miała uprawnienia " + oldPermissions + " a teraz ma uprawnienia " + newPermissions);

        return send_log(role.guild.id, embed);

    })

    // Avatar Updated
    client.on("userAvatarUpdate", (user, oldAvatarURL, newAvatarURL) => {

        const embed = new EmbedBuilder()
            .setTitle('Zakutalizowano profilowe')
            .setColor('Green')
            .setDescription(`Czytelnik ${user.tag} zmienił swoje profilowe z [Starego](${oldAvatarURL}) na [Nowe(${newAvatarURL})]`);

        return send_log(user.guild.id, embed);

    })

    // Username Updated
    client.on("userUsernameUpdate", (user, oldUsername, newUsername) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano nazwę')
            .setColor('Green')
            .setDescription(`Czytelnik ${user.tag} zmienił swoją nazwę użytkownika z ${oldUsername} na ${newUsername}`);

        return send_log(user.guild.id, embed);

    })

    // Discriminator Updated
    client.on("userDiscriminatorUpdate", (user, oldDiscriminator, newDiscriminator) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano tag')
            .setColor('Green')
            .setDescription(`Czytelnik ${user.tag} zmienił swój tag z ${oldDiscriminator} na ${oldDiscriminator}`);

        return send_log(user.guild.id, embed);

    })

    // Flags Updated
    client.on("userFlagsUpdate", (user, oldFlags, newFlags) => {

        const embed = new EmbedBuilder()
            .setTitle('Zaktualizowano flagi')
            .setColor('Green')
            .setDescription(`Czytelnik ${user.tag} zaktualizował swoje flagi z ${oldFlags} na ${newFlags}`);

        return send_log(user.guild.id, embed);

    })

    // Role Created
    client.on("roleCreate", (role) => {

        const embed = new EmbedBuilder()
            .setTitle('Dodano rangę')
            .setColor('Red')
            .setDescription(`Ranga: ${role}\nNazwa: ${role.name}\nID: ${role.id}\nKolor: ${role.hexColor}\nPozycja: ${role.position}`);

        return send_log(role.guild.id, embed);

    });

    // Role Deleted
    client.on("roleDelete", (role) => {

        const embed = new EmbedBuilder()
            .setTitle('Usunięto rangę')
            .setColor('Red')
            .setDescription(`Ranga: ${role}\nNazwa: ${role.name}\nID: ${role.id}\nKolor: ${role.hexColor}\nPozycja: ${role.position}`);

        return send_log(role.guild.id, embed);

    });

    // User Banned
    client.on("guildBanAdd", ({guild, user}) => {

        const embed = new EmbedBuilder()
            .setTitle('Zbanowano czytelnika')
            .setColor('Red')
            .setDescription(`Czytelnik: ${user} (\`${user.id}\`)\n\`${user.tag}\``,
                user.displayAvatarURL({ dynamic: true }));

        return send_log(guild.id, embed);

    });

    // User Unbanned
    client.on("guildBanRemove", ({guild, user}) => {

        const embed = new EmbedBuilder()
            .setTitle('Odbanowano czytelnika')
            .setColor('Green')
            .setDescription(`Czytelnik: ${user} (\`${user.id}\`)\n\`${user.tag}\``,
                user.displayAvatarURL({ dynamic: true }));

        return send_log(guild.id, embed);

    });

    // Channel Created
    client.on("channelCreate", (channel) => {

        const embed = new EmbedBuilder()
            .setTitle('Utworzono kanał')
            .setColor('Green')
            .setDescription(`Kanał ${channel.name} został stworzony.`);

        return send_log(channel.guild.id, embed);

    });

    // Channel Deleted
    client.on("channelDelete", (channel) => {

        const embed = new EmbedBuilder()
            .setTitle('Usunięto kanał')
            .setColor('Red')
            .setDescription(`Kanał ${channel.name} został usunięty.`);

        return send_log(channel.guild.id, embed);

    });
}

module.exports = { handleLogs };