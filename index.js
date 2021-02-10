const Discord = require('discord.js');
const client = new Discord.Client();

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
			  	

			case '.apex':
			const StatToken2 = message.content.replace('apex2 ','').replace(/\s/g, '');
			const ApexAPI2 = 'https://r5-crossplay.r5prod.stryder.respawn.com/privatematch/?token='
			const GrabAPI2 = ApexAPI2 + StatToken2
			
			
			if (message.content === '.apex'){
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
				var x=0;
				var m=-1;
				function isEmpty(obj) {
				return Object.keys(obj).length === 0;
				}	
			
							
					if(isEmpty(json)){
						setTimeout(function(){message.channel.send("**THERE ARE NO AVAILABLE MATCHES.**" +'\n'+ "**PLEASE INPUT CORRECT TOKEN OR WAIT FOR A MATCH TO FINISH!!!**")} ,1000);
					}						
					else{
						console.log(x)
						for (; x < json.matches.length; ){x++;}
						console.log(x)
							setTimeout(function(){message.channel.send("there are "+ '***'+ x + '***' + " matches...")} ,1000);
							setTimeout(function(){message.channel.send("*Loading matches...*\n")} ,1000); 
					
						//epoch converter
						const datestrng = JSON.stringify(json.matches.match_start);
						var unixTimestamp = datestrng;
						var date = new Date(unixTimestamp*1000);
						var ns = date.toString();
						
					
				
				while (m<x-1){
					
					m++;
				
				console.log(m,x)
					
					
					let m1 = []
					let pp = 0
					let tp = 0
					
					var matches = json.matches[m]?.player_results.map(m => m)
					
					
					
					//message.channel.send(`${user}` + ", x = " + x + "\n m=" + parseInt(parseInt(m)+ parseInt(1)))
					
					
							matches?.forEach(player => {	
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
									TotalPoints: (m1[i].kills + player.kills + pp),
									}
									

										
							} 
						else {
							
							m1.push({
								teamName: player.teamName,
								kills: player.kills,
								teamPlacement: player.teamPlacement,
								PlacementPoints: pp,
								TotalPoints: tp,
							})
						}
						
					})

					
				var placements = m1.sort(function(a, b){return b.TotalPoints -  a.TotalPoints});
				//console.log(placements)
				
				const jsonstrng = JSON.stringify(placements, null, 2);
				
			const embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle("ApexAPI DiscordBot \n"+ "**MATCH **"+  parseInt( parseInt(m)+ parseInt(1)))
				//.setAuthor("created by N8VENTURES")
				//.setDescription(jsonstrng)
				.addFields(
				placements.map(p => ({
					name: p.teamName,
					value: `Kills: ${p.kills}
							Placement: ${p.teamPlacement}
							Total Points: ${p.TotalPoints}`
									})
							)
				
				)
				.setFooter("created by N8VENTURES. With help from Manokii")
				.setTimestamp()
			
			setTimeout(function(){message.channel.send(embed)} ,2000); 
			
			//setTimeout(function(){json = []} ,1000); 
				 
			} if (m==x-1){ setTimeout(function(){message.channel.send("**ALL MATCHES LOADED**\n")} ,4000); setTimeout(function(){json = []} ,4000); 	;}
			
			};
			})
			}
			break;
			   }
				});
		