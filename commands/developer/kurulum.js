const { Database } = require("ark.db");
const db = new Database('../../configs/emojis.json');
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const config = require('../../configs/config.json')

module.exports = {
    name: "kurulum",
    aliases: ['kanalkurulum' , "emojikurulum" , "nobodykurulum" , "emoji-kurulum" , "kanal-kurulum" , "emojikur" , "kanalkur" , "emoji-kur" , "kanal-kur" , "kur"],
    async execute(client, message, args) {
        if (message.guild === null) {
            return message.reply({ content: `Bu komutu sadece Sunucuda kullanabilirsin!`, ephemeral: true })
          } else if (!config.bot.BotDeveloper.includes(message.author.id)) {
            return message.reply({ content: ":x: Bot developerı olmadığın için kurulumu yapamazsın.", ephemeral: true })
          } else {

            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({dynamic: true})})
            .setFooter({text: config.bot.footer})
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .setDescription(`
**${message.guild.name}** Sunucusu için yapılacak kurulumu butonlardan seçebilirsiniz.
  
\`Emoji Kurulum:\` **gereken emojileri otomatik olarak yükler.**

Lütfen **60 saniye** içerisinde hangi kurulum yapacağınızı aşağıdaki butonlara tıklayarak cevaplayınız

Gecen Süre: <t:${Math.floor(Date.now() / 1000)}:R> 
`)
      
        const row = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId("emoji")
        .setLabel("Emoji Kurulum")
        .setStyle("DANGER")
        );
      
            let msg = await message.channel.send({ embeds:[embed], components: [row]})
      
            var filter = (button) => button.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({ filter, componentType: 'BUTTON', max: 3, time: 60000 })
      
      
            collector.on("collect", async interaction => {
      
      
              if (interaction.customId === "emoji") {
                await interaction.deferUpdate();
      
                const emojis = [
                    { name: "kirmiziok", url: "https://cdn.discordapp.com/emojis/901441275381817426.gif?size=44" }, 
                    { name: "nbdy_spotify", url: "https://cdn.discordapp.com/emojis/899337292840312912.png?size=44" },
                    { name: "nbdy_netflix", url: "https://cdn.discordapp.com/emojis/941993358518284298.webp?size=96&quality=lossless" },
                    { name: "nbdy_exxen", url: "https://cdn.discordapp.com/emojis/900396713116835900.png?size=44" },
                    { name: "nbdy_blutv", url: "https://cdn.discordapp.com/emojis/900396707362246666.png?size=44" },
                    { name: "nbdy_nitro", url: "https://cdn.discordapp.com/emojis/941993742934614047.webp?size=96&quality=lossless" },
                    { name: "nbdy_youtube", url: "https://cdn.discordapp.com/emojis/941993963013935115.gif?size=96&quality=lossless" },
                    { name: "mavinokta", url: "https://cdn.discordapp.com/emojis/1014536372037636107.gif?size=96&quality=lossless" },

                  ]
                emojis.forEach(async (x) => {
                    if (interaction.guild.emojis.cache.find((e) => x.name === e.name)) return db.set(x.name, interaction.guild.emojis.cache.find((e) => x.name === e.name).toString());
                    const emoji = await interaction.guild.emojis.create(x.url, x.name);
                    await db.set(x.name, emoji.toString()); 
                    msg.reply({ content: `${emoji} \`${x.name}\` adlı emoji yüklendi.`, ephemeral: true })
      
                  })
              }
        
            })
      
          }
        },
      };
