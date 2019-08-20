const Discord = require('discord.js');

client.on('ready', () => {
    console.log('Logged in!'); //starting up message
    client.user.setActivity(`${client.commandPrefix}invite to add me!`); //incase the interval goofs.

    var status;
    var i = 0;
    var i_lim = 1;
    var intervalTime = 1000*60; //in miliseconds
    interval = setInterval(function(){
        switch(i){
            case 0: status = `${client.commandPrefix}help ; ${client.guilds.size} servers`; break;
            case 1: status = `${client.commandPrefix}invite to add me!`; break;
            default: status = `${client.commandPrefix}help ; ${client.guilds.size} servers`; break; // just to be sure nothing breaks with i
        };

        client.user.setActivity(status); //changes the status

        i < i_lim ? i++ : i = 0; //changes the i

    }, intervalTime); //the interval of change

});