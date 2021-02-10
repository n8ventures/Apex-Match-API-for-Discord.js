const Discord = require('discord.js');
const client = new Discord.Client();


var auth = require('./auth.json');


/*const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: true,
	// SQLite only
	storage: 'twitchusernames.sqlite',
});
const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});
*/
client.once('ready', () => {
		//Tags.sync();
	console.log('Ready!');
	client.user.setActivity('N8 eating my nut-- ella', { type: 'WATCHING' });
});

client.login(auth.token);





client.on('guildMemberAdd', function(member){
	member.send("welcome to nutella");
});


client.on('message', async message =>{
		const prefix = '.';
		const user = message.author;
		const args = message.content.split(' '); //const args = message.content.slice(prefix.length).split(' ');
		const cmd = args.shift().toLowerCase();
			   switch(cmd) {
			   case 'hi':
             message.channel.send(`Hey ${user}!`);
			break;
			   case 'pingrole': {
				   const role = message.guild.roles.cache.find(role => role.name === 'partner');
				   const channel =  message.guild.channels.cache.find(channel => channel.name === "gate")
					message.channel.send(`Tagging  ${channel}`);
			}
			break;
			
			case 'apex':
			const StatToken = message.content.replace('apex ','');
			const ApexAPI = 'https://r5-crossplay.r5prod.stryder.respawn.com/privatematch/?token='
			const GrabAPI = ApexAPI + StatToken
			
			
			if (message.content === 'apex'){
			message.channel.send(`${user}` +', please input Stat token!!!')
			}
			
			else{
            message.channel.send(` ${user} submitted a stat token. \n`);
			setTimeout(function(){message.channel.send('*Confirming...*\n')} ,1000); 
			const fetch = require('node-fetch');
			let url = GrabAPI;
			fetch(url)
			
			
				.then(res => res.json())
				.then(json => {
					
						//epoch converter
						const datestrng = JSON.stringify(json.matches[0].match_start);
						var unixTimestamp = datestrng;
						var date = new Date(unixTimestamp*1000);
						var ns = date.toString();
						//message.channel.send(ns)
						
						
					const allMatches = json.matches.map(m => m.player_results)
					let cm = []

						allMatches.forEach((players) => {
						players.forEach(player => {
						if(cm.some(p => p.playerName === player.playerName)){ 
						let i = cm.findIndex(p => p.playerName === player.playerName)
    
							cm[i] = {
							kills: (cm[i].kills + player.kills),
							//survivalTime: cm[i].survivalTime + player.survivalTime,
							//playerName: cm[i].playerName,
							teamNum: cm[i].teamNum,
							//damageDealt: cm[i].damageDealt + player.damageDealt,
							teamName: cm[i].teamName,
							teamPlacement: [...cm[i].teamPlacement, player.teamPlacement],
							//assists: cm[i].assists + player.assists,
						}
						} else {
  
								cm.push({
								//kills: player.kills,
								//survivalTime: player.survivalTime,
								//playerName: player.playerName,
								teamNum: player.teamNum,
								//damageDealt: player.damageDealt,
								teamName: player.teamName,
								teamPlacement: [player.teamPlacement],
								//assists: player.assists
							})
							}
						})
					})
					
					const match1 = json.matches.map(m => m.player_results)
					let m1= []
					
						match1.forEach ((players) => {
						players.forEach(player => {	
						if(m1.some(p => p.playerName === player.playerName)){ 
						let i = m1.findIndex(p => p.playerName === player.playerName)

						m1[i]={
						teamName: m1[i].teamName,
						teamNum: m1[i].teamNum,	
						kills: (m1[i].kills + player.kills),
						teamPlacement: [...m1[i].teamPlacement, player.teamPlacement],					
						}
						
						} else {
							
							m1.push({
								teamName: player.teamName,
								//teamNum: player.teamNum,
								teamPlacement: [player.teamPlacement],
								//kills: player.kills,
								})
							}
						})
					})
						
							const jsonstrng = JSON.stringify(m1);
							//var pt = m1.sort(function(a, b){return a - b});
							console.log(m1)
					
					//setTimeout(function(){message.channel.send('```json \n' + m1 + '```')} ,1000); 
				
				//const jsonstrng = JSON.stringify(cm);
				//setTimeout(function(){message.channel.send('**JSON OUTPUT 1**\n')} ,1000); 
				//setTimeout(function(){message.channel.send('```json\n' + jsonstrng + '\n```')} ,1000); 
				//console.log(cm);
				//const jsonstrng = JSON.stringify(json);
				//message.channel.send('```json\n' + jsonstrng + '\n```');
				
				//setTimeout(function(){message.channel.send('**JSON OUTPUT 2**\n')} ,1000); 
				//setTimeout(function(){message.channel.send(json matches[0].match_start) + '\n'},1000);
				setTimeout(function(){message.channel.send('**END**\n')} ,1000); 
				
				//.then(res => res.text())
				//.then(text => {
				//setTimeout(function(){message.channel.send('**JSON OUTPUT 1 CHECK CONSOLE**\n')} ,1000); 
				//setTimeout(function(){console.log(text)});

			});
			
			
			//const fs = require('fs');
			//let rawdata = fs.readFileSync(GrabAPI);
			//let apexjson = JSON.parse(rawdata);
			//message.channel.send(apexjson);
			
			}
			break;
			
			
			
			   }
				});
				
				//Categorize per match and sub-category per team 
				//Show Placement
				//Show Kills
				//show total points