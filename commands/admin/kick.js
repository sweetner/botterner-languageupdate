

const commando = require('discord.js-commando');

class KickCommand extends commando.Command
    {   
        constructor(client)
        {
            super(client,
                {
                    name: 'kick',
                    group: 'admin',
                    memberName: 'kick',
                    description: 'Kicks a user.',
                    examples: ['s!kick `@mention`'],
                    guildOnly: true,
                    args: [
                        {
                            key: 'user',
                            prompt: 'Who would you like to kick?',
                            type: 'user',
                        },
                        {
                            key: 'text',
                            prompt: 'Whats the reason for the kick?',
                            type: 'string',
                            default: 'No reason has been added.'
                        }
                    ]
                });
        }

        hasPermission(message) {
            if(message.guild) 
                return (message.member.hasPermission('KICK_MEMBERS'));
        }


        async run(message, {user, text} )
        {
            if (!(message.guild.member(message.author).hasPermission("KICK_MEMBERS") || this.client.isOwner(message.author)))
                return;
            message.guild.member(user).kick()
                .then(kicklog => {
                    console.log(`${message.author.tag} kicked ${user.tag}`);
                })
                .catch(err => {
                    message.reply(err.message);
                });
            return;
        }
    }   

module.exports = KickCommand;