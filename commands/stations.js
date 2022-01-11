const Discord = require('discord.js')

const config = require('../config.json')

module.exports = (interaction) =>{

    var i = 1

    const stations = config.stations.map(x => {return `${i++}) ${x.name} , Country : ${x.country}`}).join("\n\n")

    const embed = new Discord.MessageEmbed()

    .setTitle("Radio Stations")

    .setDescription(stations)

    .setColor("#843c8c")

    interaction.reply({embeds: [embed]})

}
