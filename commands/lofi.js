const voice = require("@discordjs/voice")



const Discord = require("discord.js")

let filters = [
   'apulsator=hz=0.08', //8D
    'aresample=48000,asetrate=48000*0.8', //vaporwave
    'aresample=48000,asetrate=48000*1.25',//nightcore
    'aphaser=in_gain=0.4',//phaser
    'tremolo', //tremolo
    'vibrato=f=6.5',//vibrato
    'surround',//surrounding
    'apulsator=hz=1',//pulsator
   'asubboost',//subboost
];
const { db } = require('../utils')

global.AbortController = require("abort-controller").AbortController


module.exports = async(interaction) =>{

    let filter = interaction.options.getString("filter")

    if(!filter) filter = "bass=g=10,dynaudnorm=f=200"

    else if(filter.toLowerCase() == "8d") filter = filters[0]

    else if(filter.toLowerCase() == "vaporwave") filter = filters[1]

    else if(filter.toLowerCase() == "nightcore") filter = filters[2]

    else if(filter.toLowerCase() == "phaser") filter = filters[3]

    else if(filter.toLowerCase() == "tremolo") filter = filters[4]

    else if(filter.toLowerCase() == "vibrato") filter = filters[5]

    else if(filter.toLowerCase() == "surround") filter = filters[6]

    else if(filter.toLowerCase() == "pulsator") filter = filters[7]

    else if(filter.toLowerCase() == "subboost") filter = filters[8]

    else filter = "bass=g=10,dynaudnorm=f=200" 

    let user = await interaction.member.fetch();

    let channel = await user.voice.channel;

    if(channel == null || channel == undefined) return interaction.reply("You Must be in A VC");


    const connection = voice.joinVoiceChannel({

        guildId: interaction.guild.id,

        channelId: interaction.guild.members.cache.get(interaction.user.id).voice.channel.id,

        adapterCreator: interaction.guild.voiceAdapterCreator

    })

    if(!connection) return interaction.reply("You Must be in A VC") 

  Play(filter, connection)

    const embed = new Discord.MessageEmbed()

    .setTitle("Playing Lofi with the Filter")
    
    .setDescription("Lo-Fi Is From Youtube")

    .setColor("#843c8c")
    
    await interaction.reply({embeds: [embed]});


    db.set(`nowplaying_${interaction.guild.id}`, "Lofi")

} 

async function Play(filter, connection){
      const player = voice.createAudioPlayer()

    const resource = voice.createAudioResource("https://6d11ff43-81b9-43ce-b4c4-f4b75fd929f8.id.repl.co/lofi?filter="+filter)  

player.play(resource)
        resource.playStream.on("end", () => Play2(filter, connection))

        connection.subscribe(player)

}

async function Play2(filter, connection){
      const player = voice.createAudioPlayer()

    const resource = voice.createAudioResource("https://ec4d1aed-0f7b-4c62-9e9e-09af59ed1e12.id.repl.co/lofi/hindi?filter="+filter)  
player.play(resource)
        resource.playStream.on("end", () => Play(filter))

        connection.subscribe(player)
        
}
