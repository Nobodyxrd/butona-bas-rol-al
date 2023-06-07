const emoji = require('../../configs/emojis.json')
const config = require('../../configs/config.json')
module.exports = {
    name: "interactionCreate",
    async execute(interaction , client) {
        const member = interaction.user;
    
        const etkinlik = await client.guilds.cache.get(config.bot.sunucuid).roles.cache.get(config.roles.etkinlikKatilimcisi)
        const cekilis = await client.guilds.cache.get(config.bot.sunucuid).roles.cache.get(config.roles.cekilisKatilimcisi)
        
            if(interaction.customId === "buttoncekilis")
            {
        
              if(interaction.guild.members.cache.get(member.id).roles.cache.has(cekilis)){
                  await interaction.guild.members.cache.get(member.id).roles.remove(cekilis)
                  await interaction.reply({ content: `${member.toString()}, başarıyla <@&${config.roles.cekilisKatilimcisi}> rolünü çıkardınız.`, ephemeral: true });
              } else {
                  await interaction.guild.members.cache.get(member.id).roles.add(cekilis)
                  await interaction.reply({ content: `${member.toString()}, başarıyla <@&${config.roles.cekilisKatilimcisi}> rolü aldınız.`, ephemeral: true });
              }
            }
                
            if(interaction.customId === "buttonetkinlik")
            {
        
              if(interaction.guild.members.cache.get(member.id).roles.cache.has(config.roles.etkinlikKatilimcisi)){
                  await interaction.guild.members.cache.get(member.id).roles.remove(config.roles.etkinlikKatilimcisi)
                  await interaction.reply({ content: `${member.toString()}, başarıyla <@&${config.roles.etkinlikKatilimcisi}> rolünü çıkardınız.`, ephemeral: true });
              } else {
                  await interaction.guild.members.cache.get(member.id).roles.add(config.roles.etkinlikKatilimcisi)
                  await interaction.reply({ content: `${member.toString()}, başarıyla <@&${config.roles.etkinlikKatilimcisi}> rolü aldınız.`, ephemeral: true });
              }
            }
        }
        
    }
