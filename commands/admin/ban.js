

const commando = require('discord.js-commando');
class BanCommand extends commando.Command
    {   
        constructor(client)
        {
            super(client,
                {
                    name: 'ban',
                    group: 'admin',
                    memberName: 'ban',
                    description: 'Bans a user.',
                    examples: ['s!ban `@mention`','s!ban `@mention` `reason`'],
                    guildOnly: true,
                    args: [
                        {
                            key: 'user',
                            prompt: 'Who would you like to ban?',
                            type: 'user',
                        },
                        {
                            key: 'text',
                            prompt: 'Whats the reason for the ban?',
                            type: 'string',
                            default: 'No reason has been added.'
                        }
                    ]
                });
        }

        hasPermission(message) {
            if(message.guild) 
                return (message.member.hasPermission('BAN_MEMBERS'));
        }


        async run(message, {user, text} )
        {
            if (!(message.guild.member(message.author).hasPermission("BAN_MEMBERS") || this.client.isOwner(message.author)))
                return;
            if (this.client.isOwner(user) && !this.client.isOwner(message.author))
                return message.reply(`are you serious? look how cute ${user} is. I can't ban someone like that...`);
            message.guild.member(user).ban()
                .then(banlog => {
                    console.log(`${message.author.tag} banned ${user.tag}`)
                })
                .catch(err => {
                    message.reply(err.message);
                });
            return;
            
        }
    }   

module.exports = BanCommand;