const config = require('../config.json')

const Discord = require("discord.js")

module.exports = (interaction) =>{

    var i = 1

    if(!interaction.options.getString("query")) interaction.reply("Query Missing", {ephemeral: true})

    const stations = config.stations.filter(x => x.name.toLowerCase().includes(interaction.options.getString("query"))).map(x => {return `${i++}) ${x.name} , Country: ${x.country}`}).join("\n")

    let final = stations

    const embed = new Discord.MessageEmbed()
    
    .setTitle("Results")

   //.setAuthor("https://play-lh.googleusercontent.com/1r_81vY54UlY-FkWbZFT-2eQ6TQhGANf0kWjlnuGWpr1jnMafMB_70iBDRbHRBed6A")

    .setDescription(final)

    .setColor("#843c8c")

    interaction.reply({embeds: [embed]})

}
