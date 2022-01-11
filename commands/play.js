const { RadioPlayer } = require('../utils')
module.exports = (interaction) =>{

    const num = parseInt(interaction.options.getNumber("number" , true))
    
    if(!num) interaction.reply("Enter A Number In The Number Option")

    RadioPlayer(num , interaction)

}
