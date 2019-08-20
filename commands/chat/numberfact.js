

const commando = require('discord.js-commando');
const Discord = require('discord.js');
const getJSON = require('get-json');
const f = require('../../functions.js');

class NumberFactCommand extends commando.Command
    {   
        constructor(client)
        {
            super(client,
                {
                    name: 'numberfact',
                    aliases: ['nf'],
                    group: 'chat',
                    memberName: 'numberfact',
                    description: 'Get a random fact about a number!',
                    examples: [`s!numberfact 10`, `s!nf 22`],
                    args: [
                        {
                            key: 'text',
                            prompt: 'What\'s your number?',
                            type: 'string',
                            default: ''
                        }
                    ]
                });
        }



        async run(message, {text})
        {

            const botMsg = await message.reply('Generating... If takes too long please try again.');

            if(text == '')
                text = Math.floor(Math.random()*100).toString(); //generates random number if no number is given

            if (isNaN(text))
            {
                botMsg.edit("I can't be tricked! this isn't a number!"); //checks if the input is a number
                return
            }

            var type = 'trivia'

            var url = `http://numbersapi.com/${text}/${type}`; //the url to the fact

            var embed = new Discord.RichEmbed()
                    .setAuthor(`Random ${type} fact about the number ${text}`)
                    .setColor('#51beea')
                    .setFooter('Knowledge is power. \n*big brain time*')
                    .addField('Fact', f.httpGet(url)) //gets the fact from the url
            botMsg.edit(embed);
            return;

        }
    }   

module.exports = NumberFactCommand;




