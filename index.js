const Discord = require('discord.js');

const express = require("express")

const app = express()

app.get("/", (req ,res) =>{

  res.send("Hey Why You Here")

})

app.listen(8000)

const { handle } = require("./utils");

const myIntents = new Discord.Intents(); 

myIntents.add(Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.DIRECT_MESSAGES);

const client = new Discord.Client({intents: myIntents});
 
client.on('ready' , () =>{

    const sr = require('./sr')

    sr()
    
    console.log("Ready!")

    client.user.setActivity({name: "To New Slash Commands", "type": "LISTENING"})


})

/*client.on('messageCreate', (message)=>{

    const prefix = ";"

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');

	const command = args.shift().toLowerCase();

    if(["lofi" , "dc", "play", "station", "help", "invite", "stations" , "start", "botinfo" , "list", "bots", "ping"].includes(command)){

        const embed = new Discord.MessageEmbed()

        .setTitle("Update")

        .setDescription("Discord Is Soon Removing Message Intent, So The Developer Has Added Slash Commands To Me, Invite Me Using The Button or by [Clicking Me](https://discord.com/api/oauth2/authorize?client_id=855384251544109056&permissions=1644703383360&scope=bot%20applications.commands)")

        .setColor("FUCHSIA")

        const row = new Discord.MessageActionRow()

        .addComponents(

            new Discord.MessageButton()

        .setStyle(`LINK`)

        .setLabel(`Invite Me`)

        .setURL(`https://discord.com/api/oauth2/authorize?client_id=855384251544109056&permissions=515529637824&scope=bot%20applications.commands`)

        )

        message.channel.send({embeds: [embed], components: [row]})
    }
})*/

client.on('interactionCreate', async interaction => {

	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'help') {

        const helpCommand = require('./commands/help')

        helpCommand(interaction)
	
    }

    if(interaction.commandName === 'lofi'){

    const lofiCommand = require('./commands/lofi')

    lofiCommand(interaction)

    }

    if(interaction.commandName === "play"){

        const PlayCommand = require('./commands/play')

        PlayCommand(interaction)

    }

    if(interaction.commandName === "stations"){

        const stationsCommand = require('./commands/stations')

        stationsCommand(interaction)

    }

    if(interaction.commandName === "search"){

        const searchCommand = require('./commands/search')

        searchCommand(interaction)

    }

    if(interaction.commandName === "botinfo"){

        const BotInfoCommand = require('./commands/botinfo')
        
        BotInfoCommand(interaction , client)

    }

    if(interaction.commandName === "nowplaying"){

        const nowPlayingCommand = require('./commands/nowPlaying')

        nowPlayingCommand(interaction)

    }
});

client.login("OTIyODEyOTM1OTIxODY4ODEx.Gf-uXN.K8HzduvGPDqxkLqeJPBKTp6dC-1eubWdylXef0")

handle()

