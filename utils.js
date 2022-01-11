const config = require('./config.json')

const voice = require('@discordjs/voice')

const Discord = require('discord.js')
function RandomLink(){

    let links =  config.links

    return links[Math.floor(Math.random() * links.length)]

}

async function RadioPlayer(num , interaction){

    const stations = config.stations

    let user = await interaction.member.fetch();

    let channel = await user.voice.channel;

    if(channel == null || channel == undefined) return interaction.reply("You Must be in A VC");

    const connection = voice.joinVoiceChannel({

        guildId: interaction.guild.id,

        channelId: interaction.guild.members.cache.get(interaction.user.id).voice.channel.id,

        adapterCreator: interaction.guild.voiceAdapterCreator

    })

    if(stations[num - 1].url == undefined || stations[num - 1].url == null) interaction.reply("Not A Valid Station")

    const player = voice.createAudioPlayer()

    const res = voice.createAudioResource(stations[num - 1].url)

    player.play(res)

    connection.subscribe(player)

    Reply(interaction, `Playing ${stations[num - 1].name}`)

    db.set(`nowplaying_${interaction.guild.id}`, stations[num - 1].name)

    return res

}

async function Reply(i, message, hidden = true){

    const embed = new Discord.MessageEmbed()

    .setColor("#843c8c")

    .setTitle("Playing Music")
    
    .setDescription(`Playing **${message}**`)

    i.reply({embeds: [embed]} , {ephemeral: hidden})

}
function handle(){
setInterval(function () {}, Number.MAX_VALUE); // keep process alive

// add this handler before emitting any events
process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); // err.message is "foobar"
});
}
const db = new Map()

module.exports = {

    RandomLink,

    RadioPlayer,

    db,

    handle

}
