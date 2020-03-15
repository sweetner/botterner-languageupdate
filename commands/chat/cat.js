const commando = require('discord.js-commando');
const Discord = require('discord.js');
const getJSON = require('get-json');

class CatCommand extends commando.Command
    {   
        constructor(client)
        {
            super(client,
                {
                    name: 'cat',
                    aliases: ['catto'],
                    group: 'chat',
                    memberName: 'cat',
                    description: 'Use this command to get a picture of a cat! **(You can also use s!catto)**',
                    examples: [`s!cat`]
                });
        }



        async run(message, {text})
        {
              const botMsg = await message.reply('Generating... If takes too long please try again.');
              var url = 'https://api.thecatapi.com/v1/images/search';



              getJSON(url, async function(error, response){
                  if(!response)
                      return message.reply(`Oops... Couldn't understand you.`);
                  var image = response[0].url;
                  var embed = new Discord.RichEmbed()
                      .setAuthor(`Cat time ~ :heart:`)
                      .setImage(image)
                      .setColor(0x00FFFF)
                  botMsg.edit(embed); 
              });
              return;
        }
    }   

module.exports = CatCommand;
