const Discord = require('discord.js');
const client = new Discord.Client();
require("babel-polyfill");

var auth = require('./auth.json');


client.once('ready', () => {
		//Tags.sync();
	console.log('Ready!');
	client.user.setActivity('N8 eating my nut-- ella', { type: 'WATCHING' });
});

client.login(auth.token);


client.on('message', async message =>{
		const prefix = '.';
		const user = message.author;
		const args = message.content.split(' '); //const args = message.content.slice(prefix.length).split(' ');
		const cmd = args.shift().toLowerCase();
			   switch(cmd) {
			   case 'hi':
             message.channel.send(`Hey ${user}!`);
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
			
			case 'apex2':
			const StatToken2 = message.content.replace('apex2 ','');
			const ApexAPI2 = 'https://r5-crossplay.r5prod.stryder.respawn.com/privatematch/?token='
			const GrabAPI2 = ApexAPI2 + StatToken2
			
			
			if (message.content === 'apex2'){
			message.channel.send(`${user}` +', please input Stat token!!!')
			}
			
			else{
            message.channel.send(` ${user} submitted a stat token. \n`);
			setTimeout(function(){message.channel.send('*Confirming...*\n')} ,1000); 
			const fetch = require('node-fetch');
			let url = GrabAPI2;
			fetch(url)
			
			
				.then(res => res.json())
				.then(json => {
					
						//epoch converter
						const datestrng = JSON.stringify(json.matches.match_start);
						var unixTimestamp = datestrng;
						var date = new Date(unixTimestamp*1000);
						var ns = date.toString();
						//message.channel.send(ns)
						
						//var matches1 = json.matches[0]
		/*		
						const allMatches = json.matches.map(m => m.player_results)
						let cm = []
								
								
						allMatches.forEach((players) => {
						players.forEach(player => {
						if(cm.some(p => p.teamName === player.teamName)){ 
						let i = cm.findIndex(p => p.teamName === player.teamName)
								
								
							
							cm[i] = {
							kills: (cm[i].kills + player.kills),
							//survivalTime: cm[i].survivalTime + player.survivalTime,
							//playerName: cm[i].playerName,
							//teamNum: cm[i].teamNum,
							//damageDealt: cm[i].damageDealt + player.damageDealt,
							teamName: cm[i].teamName,
							teamPlacement: [...cm[i].teamPlacement, player.teamPlacement],
							//assists: cm[i].assists + player.assists,
						}
								
								
						} else {
								
								var set1 = new Set();
								set1.add(player.teamPlacement);
								//var arr = Array.from(set1);
								
								cm.push({
								kills: player.kills,
								//survivalTime: player.survivalTime,
								//playerName: player.playerName,
								//teamNum: player.teamNum,
								//damageDealt: player.damageDealt,
								teamName: player.teamName,
								teamPlacement: [player.teamPlacement],
								//assists: player.assists
							})
							}
						})
					})
					console.log(cm)
		*/
					
					const match1 = json.matches[0].player_results.map(m => m)

					let m1 = []
					let pp = 0

							match1.forEach(player => {	
							if(m1.some(p => p.teamName === player.teamName)){ 
								let i = m1.findIndex(p => p.teamName === player.teamName)
								
								switch(m1[i].teamPlacement) {
									case 1:
									pp=12;
									break;
									case 2:
									pp=9;
									break;
									case 3:
									pp=7;
									break;
									case 4:
									pp=5;
									break;
									case 5:
									pp=4;
									break;
									case 6:
									case 7:
									pp=3;
									break;
									case 8:
									case 9:
									case 10:
									pp=2;
									break;
									case 11:
									case 12:
									case 13:
									case 14:
									case 15:
									pp=1;
									break;
									case 16:
									case 17:
									case 18:
									case 19:
									case 20:
									pp=0;
									break;
								}									
							
									
									m1[i]={	
									teamName: m1[i].teamName, 
									kills: (m1[i].kills + player.kills),
									teamPlacement: (player.teamPlacement),
									PlacementPoints: pp,									
									}
									

										
							} 
						else {
							
							m1.push({
								teamName: player.teamName,
								kills: player.kills,
								teamPlacement: player.teamPlacement,
								PlacementPoints: pp,
							})
						}
						//})
					})
							//var pt = m1.sort(function(a, b){return a - b});
							//console.log(m1)
					
					//var pt = cm.sort(function(a, b){return a - b});
					//console.log(pt)
					
				var placements = m1.sort(function(a, b){return a.teamPlacement - b.teamPlacement});
				//console.log(placements)
				const jsonstrng = JSON.stringify(placements, null, 2);
				console.log(placements)
				setTimeout(function(){message.channel.send('**JSON OUTPUT 1**\n')} ,1000); 
				
				//setTimeout(function(){message.channel.send('```json\n' + cm + '\n```')} ,1000); 
				//console.log(cm);
				//const jsonstrng = JSON.stringify(json);
				message.channel.send('```json\n' + jsonstrng + '\n```');
				//setTimeout(function(){message.channel.send('**JSON OUTPUT 2**\n')} ,1000); 
				
			//var set1 = new Set();
			//set1.add(m1);	
			//console.log(set1)
			setTimeout(function(){message.channel.send('**JSON OUTPUT 2**\n')} ,1000); 
			const embed = new Discord.MessageEmbed()
				.setTitle("ApexAPI DiscordBot")
				.setAuthor("created by N8VENTURES")
				.setColor(0x00AE86)
				.setDescription(insert data here)
				.setFooter("created by N8VENTURES")
				.setTimestamp()
			message.channel.send(embed);
			setTimeout(function(){message.channel.send('**END**\n')} ,1000); 
			});
			}
			break;
			   }
				});
				
				//Categorize per match and sub-category per team 
				//Show Placement
				//Show Kills
				//show total points