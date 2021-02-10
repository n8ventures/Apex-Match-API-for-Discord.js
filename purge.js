var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var cleverbot = require("cleverbot.io"),
cbot = new cleverbot("zrY8NUxcYKyrtFkZ", "3EicGuovrTI2bDKlz97Jsqh1bkZi1hJe");

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});



bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
	
	bot.setPresence ({
	game: {
	name: 'nut',
		}
	});
});


bot.on('message', function (user, userID, channelID, message, event) {


  if (message.substring(0, 6).toLowerCase() == 'Nutellabot') {
          cbot.setNick("Nutellabot");
        cbot.create(function (err, session) {
          // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

          // Woo, you initialized cleverbot.io.  Insert further code here
          cbot.ask(message, function (err, response) {

            bot.sendMessage({
                to: channelID,
                message: `<@${userID}>` + ", " + response
            });

          });

        });

}




bot.on('message', function (user, userID, channelID, message, event) {
var str = message.split (" "),
	message = str[0],
	dosvalue = str[1];
    if (message.substring(0, 1) == '!') {
		
        var args = message.substring(1).split(' ');
        var cmd = args[0].toLowerCase();
		var numdel = parseInt(dosvalue);
		
        args = args.splice(2);
        
        switch(cmd) {
           
			 case 'delete':
			if (dosvalue == numdel) {
            bot.getMessages ({
                        channelID: channelID,
                        limit: numdel + 2
                    },
                    function (e, a){
					
                    bot.deleteMessages({
                        channelID: channelID,
                        messageIDs: a.map(a => a.id)
                        })
                    }, function (err) {
                    console.log(err)
                    },bot.sendMessage({
                    to: channelID,
                    message: numdel + ' Messages Deleted'}));
              
			  } else {
			    bot.sendMessage({
                    to: channelID,
                    message: '**HEY!** Mind putting a number next time? What? Want an example? sure. `!delete [insert your goddamn number here]`. \n\n *I swear to god, man. I dont get paid enough for this shit.*'
                });
			  }
			
            break;

//
	
			default:
            bot.sendMessage({
                    to: channelID,
                    message: 'uwotm8'
            });
         }
     }
});