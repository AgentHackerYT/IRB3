const fetch = require('node-fetch').default;

const Discord = require("discord.js")

const { db } = require("../utils")

module.exports = (interaction) =>{

const station = db.get(`nowplaying_${interaction.guild.id}`)

if(station == "Sayaji FM"){

fetch("https://sayajifm.radioca.st/currentsong?sid=1").then(r => r.text()).then(res =>{

const embed = new Discord.MessageEmbed()
.setColor("#5865F2")

embed.setTitle("Now Playing")

embed.setDescription(`Now Playing **${station}**\n\nPlaying The Song **${res}**`)

//.setAuthor("https://play-lh.googleusercontent.com/1r_81vY54UlY-FkWbZFT-2eQ6TQhGANf0kWjlnuGWpr1jnMafMB_70iBDRbHRBed6A")

.setFooter("The Song Name Will Only be Shown If You Listen Sayaji FM")


interaction.reply({embeds: [embed]})

})

}else if(station !== undefined){

    const embed2 = new Discord.MessageEmbed()
    .setColor("#843c8c")

    embed2.setTitle("Now Playing")

    embed2.setDescription(`Now Playing **${station}**`)

   // .setAuthor("https://play-lh.googleusercontent.com/1r_81vY54UlY-FkWbZFT-2eQ6TQhGANf0kWjlnuGWpr1jnMafMB_70iBDRbHRBed6A")

    interaction.reply({embeds: [embed2]})

}else {

    interaction.reply(`Nothing Is Playing Right Now , Let The Party Get Started`)
}
}
