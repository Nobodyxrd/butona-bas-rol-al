const emoji = require('../../configs/emojis.json')
const config = require('../../configs/config.json')
const Discord = require("discord.js");


module.exports = {
    name: "buton",
    aliases: ['ecrolalma' , 'butonn' , "ecbuton" , "ec"],
    async execute(client , message , args) {
        
                if (message.guild === null) {
            return message.reply({ content: `Bu komutu sadece Sunucuda kullanabilirsin!`, ephemeral: true })
          } else if (!config.bot.BotDeveloper.includes(message.author.id)) {
            return message.reply({ content: ":x: Bot developerı olmadığın için kurulumu yapamazsın.", ephemeral: true })
          } else {
                if (message.guild === null) {
            return message.reply({ content: `Bu komutu sadece Sunucuda kullanabilirsin!`, ephemeral: true })
          } else if (!config.bot.BotDeveloper.includes(message.author.id)) {
            return message.reply({ content: ":x: Bot developerı olmadığın için kurulumu yapamazsın.", ephemeral: true })
          } else {

        client.api.channels(message.channel.id).messages.post({ data: {content: `Merhaba **${message.guild.name}** üyeleri,\n\n ${emoji.mavinokta} \`@Çekiliş katılımcısı\` alarak ${emoji.nbdy_nitro} , ${emoji.nbdy_spotify} , ${emoji.nbdy_netflix} , ${emoji.nbdy_exxen} , ${emoji.nbdy_blutv} gibi çeşitli ödüllerin sahibi olabilirsiniz.\n ${emoji.mavinokta} \`@Etkinlik katılımcısı\` alarak çeşitli etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz.\n\n__${emoji.kirmiziok} Aşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!__`,"components":[{"type":1,"components":[

            {"type":2,"style":3,"custom_id":"buttoncekilis","label":"🎁 Çekiliş Katılımcısı" },
            {"type":2,"style":4,"custom_id":"buttonetkinlik","label":"🎉 Etkinlik Katılımcısı"}
            
            ]}]} })
      },
    };
    
