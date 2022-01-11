module.exports = () => {
    const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const Routes = require('discord-api-types/v9').Routes;
const { clientId,  token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('help').setDescription('Sends The Help embed'),
	new SlashCommandBuilder().setName('play').setDescription('Plays The Choosen Radio Station').addNumberOption(x => x.setName("number").setDescription("Enter The Station Number").setRequired(true)),
	new SlashCommandBuilder().setName('stations').setDescription('Sends The List Of Radio Stations'),
    new SlashCommandBuilder().setName('botinfo').setDescription('Returns The Info of The Bot'),
    new SlashCommandBuilder().setName('lofi').setDescription('Plays Lofi').addStringOption(x => x.setName("filter").setDescription("Add Filter To Lo-Fi")),
	new SlashCommandBuilder().setName('search').setDescription("Search For A Particular Radio Station").addStringOption(x => x.setName("query").setDescription("Search For Your Radio Station").setRequired(true)),
	new SlashCommandBuilder().setName('nowplaying').setDescription("Shows Whats Playing Right Now")
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
/*if(rest.get(Routes.applicationCommands(clientId))){
rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
}*/
}
