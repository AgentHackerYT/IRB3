const Discord = require('discord.js')

module.exports = async(interaction) => {

     const invite = new Discord.MessageButton()
    .setStyle(`LINK`)
    .setLabel(`Invite Me`)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=922812935921868811&permissions=139623525696&scope=bot%20applications.commands`)

    const support = new Discord.MessageButton()
    .setStyle("LINK")
    .setLabel("Support Server")
    .setURL("https://discord.gg/bqXhREHEDt")

        const hindlofi = new Discord.MessageButton()
    .setStyle("LINK")
    .setLabel("Hindi Lofi Website (Made By My Developer)")
    .setURL("https://agenthackeryt.github.io/")
    const row = new Discord.MessageActionRow()
    .addComponents(invite , support, hindlofi)

    const embed = new Discord.MessageEmbed()

    //.setAuthor("https://play-lh.googleusercontent.com/1r_81vY54UlY-FkWbZFT-2eQ6TQhGANf0kWjlnuGWpr1jnMafMB_70iBDRbHRBed6A")

    .setTitle("Indian Radio Bot 3")

    .addField("🆘 Help", "`/help , Returns Help command`", true)

    .addField("‎" , "‎", true)

    .addField("▶️ Play" , "`/play <number> , Plays The Choosen Radio Station`", true)

    .addField("‎" , "‎", true)

    .addField("‎" , "‎", true)

    .addField("‎" , "‎", true)

    .addField("📜 Hindi Lo-Fi", "`/lofi , Plays Lofi`", true)

    .addField("‎" , "‎", true)

    .addField("📜 Stations", "`/stations , Sends The List Of Radio Stations`", true)

    .addField("‎" , "‎", true)

    .addField("‎" , "‎", true)

    .addField("‎" , "‎", true)

    .addField("🤖 Bot Info", "`/botinfo, Returns The Info of The Bot`", true)

    .addField("‎" , "‎", true)

    .addField("⏯ Now Playing", "`/nowplaying, Sends What Radio Station is Playing Now`", true)

    .addField("‎" , "‎", true)

    .addField("‎" , "‎", true)

    .addField("‎" , "‎", true)

    .addField("🔎 Search Stations", "`/search <input>, Search The Available Stations`", true)

    .addField("Lo-Fi Filters" , "`8d , Vaporwave, Phaser, Nightcore, Tremolo, Vibrato, Surround, Pulsator, Subboost`\n\nWrite The Filter /lofi <filter name>")

    .setColor("#843c8c")

     interaction.reply({embeds: [embed], components: [row]});

}
