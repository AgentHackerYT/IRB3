const os = require('os');

const Discord = require("discord.js")

module.exports = async(interaction , client) =>{

    let totalSeconds = (client.uptime / 1000);

    let days = Math.floor(totalSeconds / 86400);

    totalSeconds %= 86400;

    let hours = Math.floor(totalSeconds / 3600);

    totalSeconds %= 3600;

    let minutes = Math.floor(totalSeconds / 60);

    let seconds = Math.floor(totalSeconds % 60);

        const embed = new Discord.MessageEmbed()

        //.setAuthor("https://play-lh.googleusercontent.com/1r_81vY54UlY-FkWbZFT-2eQ6TQhGANf0kWjlnuGWpr1jnMafMB_70iBDRbHRBed6A")

        .setAuthor(`Indian Radio Bot 3`, client.user.displayAvatarURL({dynamic: true}))

        .setTitle(`Bot Info for ${client.user.username}`)

        .addField(`Servers`, `\`${client.guilds.cache.size}\`` , true)
        
        .addField(`Users`, `\`${client.users.cache.size}\``, true)

        .addField(`Connected To`, `\`${client.voice.adapters.size} channels\``, true)

        .addField(`Ping` , `\`${Math.floor(client.ws.ping)}MS\``, true)

        .addField(`Shards`, `\`${client.ws.shards.size}\``, true)

        .addField(`Emojis`, `\`${client.emojis.cache.size}\``, true)

        .addField(`Stickers`, `\`${client.guilds.cache.forEach(x => {return x.stickers.cache.size}) || 0}\``, true)

        .addField(`CPU`, `\`${os.cpus()[0].model}\``, true)

        .addField(`Uptime`, `\`${days} days , ${hours} hours , ${minutes} minutes , ${seconds} seconds\``, true)

        .addField(`Channels`, `\`${client.channels.cache.size}\``, true)

        .addField(`Voice Channels`, `\`${client.channels.cache.filter(x => x.type == "GUILD_VOICE").size}\``, true)

        .addField(`Text Channels`, `\`${client.channels.cache.filter(x => x.type == "GUILD_TEXT").size}\``, true)

        .setColor('FUCHSIA')

        interaction.reply({embeds: [embed]})

    }
