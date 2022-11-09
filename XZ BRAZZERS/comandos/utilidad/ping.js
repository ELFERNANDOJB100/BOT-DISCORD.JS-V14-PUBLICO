const Discord = require("discord.js")

module.exports = {
  name: "ping", // Coloque el name del comando
  description: "ping del bot que mas.", // descripcion
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`hola ${interaction.user}, estoy  \`calculando...\`.`)
    .setColor("Random");

    let embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`hola ${interaction.user}, mi ping es de \`${ping}ms\`.`)
    .setColor("Random");
    interaction.reply({ embeds: [embed_1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [embed_2] })
        }, 2000)
    })
  }
}