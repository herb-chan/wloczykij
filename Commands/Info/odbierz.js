const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  EmbedBuilder,
  Embed,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("odbierz")
    .setDescription("Odbierz zaległe rangi frakcji."),
  execute(interaction) {
    // Mieszkaniec Ardy
    let hobbit = interaction.guild.roles.cache.get("1047216608399065182"); // 10xp
    let atani = interaction.guild.roles.cache.get("1047216697804853410"); // 15xp
    let rohirrim = interaction.guild.roles.cache.get("1047216743564718080"); // 20xp
    let dunedain = interaction.guild.roles.cache.get("1047216760081883156"); // 25xp
    let quendi = interaction.guild.roles.cache.get("1047216788334719056"); // 30xp
    let istari = interaction.guild.roles.cache.get("1047216806475091989"); // 35xp
    let majar = interaction.guild.roles.cache.get("1047216833201197157"); // 45xp
    let valar = interaction.guild.roles.cache.get("1047216861953142788"); // 55xp
    let ainur = interaction.guild.roles.cache.get("1047216998817484871"); // 65xp

    // Mieszkaniec Temerii
    let piechota = interaction.guild.roles.cache.get("1047978140602998864"); // 10xp
    let aens = interaction.guild.roles.cache.get("1047978116238299249"); // 15xp
    let scoia = interaction.guild.roles.cache.get("1047978055437652068"); // 20xp
    let wiedzma = interaction.guild.roles.cache.get("1047977520584200233"); // 25xp
    let vodyanoi = interaction.guild.roles.cache.get("1047976583442472960"); // 30xp
    let aene = interaction.guild.roles.cache.get("1047976520167202947"); // 35xp
    let czarodziej = interaction.guild.roles.cache.get("1047976501330587740"); // 45xp
    let wiedzmin = interaction.guild.roles.cache.get("1047976480363249674"); // 55xp
    let wampir = interaction.guild.roles.cache.get("1047976423819845783"); // 65xp

    // Mieszkaniec Hogwartu
    let mugol = interaction.guild.roles.cache.get("1048268901034754158"); // 10xp
    let charlak = interaction.guild.roles.cache.get("1048268835070947399"); // 15xp
    let skrzat = interaction.guild.roles.cache.get("1048268692695306310"); // 20xp
    let szlama = interaction.guild.roles.cache.get("1048268559618416761"); // 25xp
    let polkrwi = interaction.guild.roles.cache.get("1048268454685311026"); // 30xp
    let czystej = interaction.guild.roles.cache.get("1048268344891031664"); // 35xp
    let uczen = interaction.guild.roles.cache.get("1048268217631645758"); // 45xp
    let animag = interaction.guild.roles.cache.get("1048268038224498828"); // 55xp
    let pracownik = interaction.guild.roles.cache.get("1048267823757131776"); // 65xp

    if (
      // hobbit
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "10xp")
    ) {
      interaction.member.roles.add(hobbit);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${hobbit}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // atani
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "15xp")
    ) {
      interaction.member.roles.add(atani);
      interaction.member.roles.remove(hobbit);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${atani}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // rohirrim
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "20xp")
    ) {
      interaction.member.roles.add(rohirrim);
      interaction.member.roles.remove(atani);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${rohirrim}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // dunedain
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "25xp")
    ) {
      interaction.member.roles.add(dunedain);
      interaction.member.roles.remove(rohirrim);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${dunedain}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // quendi
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "30xp")
    ) {
      interaction.member.roles.add(quendi);
      interaction.member.roles.remove(dunedain);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${quendi}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // istari
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "35xp")
    ) {
      interaction.member.roles.add(istari);
      interaction.member.roles.remove(quendi);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${istari}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // majar
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "45xp")
    ) {
      interaction.member.roles.add(majar);
      interaction.member.roles.remove(istari);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${majar}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // valar
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "55xp")
    ) {
      interaction.member.roles.add(valar);
      interaction.member.roles.remove(majar);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${valar}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // ainur
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Ardy"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "65xp")
    ) {
      interaction.member.roles.add(ainur);
      interaction.member.roles.remove(valar);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${ainur}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // piechota
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "10xp")
    ) {
      interaction.member.roles.add(piechota);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${piechota}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // aen seidhe
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "15xp")
    ) {
      interaction.member.roles.add(aens);
      interaction.member.roles.remove(piechota);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${aens}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // scoia'tael
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "20xp")
    ) {
      interaction.member.roles.add(scoia);
      interaction.member.roles.remove(aens);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${scoia}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // wiedzma z krzywuchowych moczarow
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "25xp")
    ) {
      interaction.member.roles.add(wiedzma);
      interaction.member.roles.remove(scoia);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${wiedzma}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // vodyanoi
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "30xp")
    ) {
      interaction.member.roles.add(vodyanoi);
      interaction.member.roles.remove(wiedzma);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${vodyanoi}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // aen elle
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "35xp")
    ) {
      interaction.member.roles.add(aene);
      interaction.member.roles.remove(vodyanoi);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${aene}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // czarodziej
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "45xp")
    ) {
      interaction.member.roles.add(czarodziej);
      interaction.member.roles.remove(aene);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${czarodziej}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // wiedzmin
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "55xp")
    ) {
      interaction.member.roles.add(wiedzmin);
      interaction.member.roles.remove(czarodziej);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${wiedzmin}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // wampir
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Temerii"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "65xp")
    ) {
      interaction.member.roles.add(wampir);
      interaction.member.roles.remove(wiedzmin);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${wampir}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // mugol
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "10xp")
    ) {
      interaction.member.roles.add(mugol);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${mugol}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // charlak
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "15xp")
    ) {
      interaction.member.roles.add(charlak);
      interaction.member.roles.remove(mugol);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${charlak}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // skrzat
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "20xp")
    ) {
      interaction.member.roles.add(skrzat);
      interaction.member.roles.remove(charlak);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${skrzat}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // szlama
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "25xp")
    ) {
      interaction.member.roles.add(szlama);
      interaction.member.roles.remove(skrzat);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${szlama}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // polkrwi
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "30xp")
    ) {
      interaction.member.roles.add(polkrwi);
      interaction.member.roles.remove(szlama);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${polkrwi}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // czystej krwi
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "35xp")
    ) {
      interaction.member.roles.add(czystej);
      interaction.member.roles.remove(polkrwi);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${czystej}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // uczen hogwartu
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "45xp")
    ) {
      interaction.member.roles.add(uczen);
      interaction.member.roles.remove(czystej);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${uczen}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // animag
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "55xp")
    ) {
      interaction.member.roles.add(animag);
      interaction.member.roles.remove(uczen);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${animag}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else if (
      // pracownik ministerstwa magii
      interaction.member.roles.cache.some(
        (r) => r.name === "Mieszkaniec Hogwartu"
      ) &&
      interaction.member.roles.cache.some((r) => r.name === "65xp")
    ) {
      interaction.member.roles.add(pracownik);
      interaction.member.roles.remove(animag);

      const embed = new EmbedBuilder()
      .setTitle('Gratulacje ' + interaction.member.user.tag + '!')
      .setDescription(`Czytelnikowi **${interaction.member.user.tag}** udało się zdobyć kolejną rangę frakcyjną! Awansował on na rangę ${pracownik}.`)
      .setColor('#ffecd0')
      .setTimestamp()

      interaction.reply({
        embeds: [embed],
        ephemeral: false,
      });
    } else {
      interaction.reply({
        content:
          "<:zabka_bonk:1010945244562464928> | Nie posiadasz poprzedniej rangi frakcyjnej lub wymaganego poziomu!",
        ephemeral: true,
      });
    }
  },
};