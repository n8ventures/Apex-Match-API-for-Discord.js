const Discord = require('discord.js');
const client = new Discord.Client();
var moment = require('moment-timezone');
client.user.setAvatar('./avatar.jpg')
  .then(user => console.log(`New avatar set!`))
  .catch(console.error);
  
var auth = require('./auth.json');


client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('OG surpassing everyone', { type: 'WATCHING' });
});

client.login(auth.token);


client.on('message', async message =>{
		const prefix = '.';
		const user = message.author;
		const args = message.content.split(' ');
		const cmd = args.shift().toLowerCase();
			   switch(cmd) {
			   case '.hi':
			
			  	
			message.channel.send(`Hey ${user}!`);
			break;

			case '.apex':
			
			const StatToken2 = message.content.replace('.apex ','').replace(/\s/g, '');
			const ApexAPI2 = 'https://r5-crossplay.r5prod.stryder.respawn.com/privatematch/?token='
			const GrabAPI2 = ApexAPI2 + StatToken2
			
			if (message.content === '.apex'){
			message.channel.send(`⚠ *** ${user}` +' PLEASE INPUT STAT TOKEN*** ⚠')
			
			}
			else{
			setTimeout(() => message.delete(), 500);
			setTimeout(function(){message.channel.send('*Deleting message...* 🧼 \n Do not worry. We got your input token! *(I mean, hopefully it is a token heh)* 👍\n')} ,1000); 
			setTimeout(function(){message.channel.send('\n*Confirming...* ⌛\n')} ,1050); 
			const fetch = require('node-fetch');
			let url = GrabAPI2;
			
					
			fetch(url)
				.then(res => res.json())
				.then(json => {	
				var x=0;
				var m=-1;
				var n=0;
				var b=0;
				function isEmpty(obj) {
				return Object.keys(obj).length === 0;
				}	
			
							
					if(isEmpty(json)){
						setTimeout(function(){message.channel.send("**⚠   MATCHES NOT DETECTED!   ⚠**" +'\n \n'+ "**⚠  PLEASE INPUT CORRECT TOKEN OR WAIT FOR THE MATCH TO FINISH!!!**  ⚠")} ,1000);
					}						
					else{
						console.log(x)
						for (; x < json.matches.length; ){x++;}
						console.log(x)
							setTimeout(function(){message.channel.send('***'+ x  + " MATCH/ES FOUND!"+ '*** '+ " ✅")} ,1000);
							setTimeout(function(){message.channel.send("*Loading matches...* ⌛\n")} ,1000); 
					
				while (m<x-1){
					m++;
					n++;
					b--;
					//epoch converter
					let mt = []
					var match_time = json.matches.map(t => t)
					
						match_time.forEach(time => {
								if(mt.some(e => e.match_start === time.match_start)){
									let u = mt.findIndex(e => e.match_start === time.match_start) 
					
									mt[u]={	
										match_start: mt[u].match_start, 
										}	
								}
								else {
							
									mt.push({
									match_start: time.match_start,
									})
								}
							})
						function numOnly(value) {
						if (typeof (val) === 'number') {
						return val;
							}
						}
					var date_select = mt.slice(m, n);
					var datestrng = JSON.stringify(date_select);
					var res = datestrng.replace(/\D/g, "");
					var unixTimestamp = res;
					//var date = new Date(unixTimestamp*1000);
					//var nt = date.toString();
					//var ns = nt.replace('(China Standard Time)','')
					var date = new Date(unixTimestamp*1000);
					var nt = moment.tz(date, "Asia/Manila").format('YYYY-MM-DD h:mm A ZZ');

					let m1 = []
					let pp = 0
					let tp = 0
					var matches = json.matches[m]?.player_results.map(m => m)
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
			const embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle("ApexAPI DiscordBot \n"+ "**🎲 MATCH **"+  parseInt( parseInt(x)+ parseInt(b) + parseInt(1)) +"\n 🕒 "+ nt)
				.setAuthor("🔻 N8VENTURES' (with help from Manokii🐔) 🔻")
				//.setDescription(jsonstrng)
				.addFields(
				placements.map(p => ({
					//pname=p.teamname
					name: `${p.teamName}`,
					value: `☠️ Kills: ${p.kills} 
							👟 Placement: ${p.teamPlacement}
							🏅 **Total Points: ${p.TotalPoints}** \n ------------------------`
									})
							)
				
				)
				.setFooter("N8VENTURES🔻  x  Manokii🐔 2021")
				.setTimestamp()
			
			setTimeout(function(){message.channel.send(embed)} ,2000); 

			} if (m==x-1){ setTimeout(function(){message.channel.send("\n **🎉   ALL MATCHES LOADED   🎉**\n")} ,4000); setTimeout(function(){json = []} ,5000); 	;}
			
			};
			})
			}
			break;	
	}
});
				
			client.on('message', async message =>{
		const prefix = '.';
		const user = message.author;
		const args = message.content.split(' '); 
		const cmd2 = args.shift().toLowerCase();
				switch(cmd2) {
			   
			   	case '.ato':
			
			const StatToken2 = message.content.replace('.ato ','').replace(/\s/g, '');
			const ApexAPI2 = 'https://r5-crossplay.r5prod.stryder.respawn.com/privatematch/?token='
			const GrabAPI2 = ApexAPI2 + StatToken2
			
			
			if (message.content === '.ato'){
			message.channel.send(`⚠ *** ${user}` +' PLEASE INPUT STAT TOKEN*** ⚠')
			}
			
			else{
			setTimeout(() => message.delete(), 500);
			setTimeout(function(){message.channel.send('*Deleting message...* 🧼 \n Do not worry. We got your input token! *(I mean, hopefully it is a token heh)* 👍\n')} ,1000); 
			setTimeout(function(){message.channel.send('\n *Confirming...* ⌛\n')} ,1000); 
			const fetch = require('node-fetch');
			let url = GrabAPI2;
			
					
			fetch(url)
				.then(res => res.json())
				.then(json => {	
				var x=0;
				var m=-1;
				var n=0;
				var b=0;
				function isEmpty(obj) {
				return Object.keys(obj).length === 0;
				}	
		
					if(isEmpty(json)){
						setTimeout(function(){message.channel.send("**⚠   MATCHES NOT DETECTED!   ⚠**" +'\n \n'+ "⚠  **PLEASE INPUT CORRECT TOKEN OR WAIT FOR THE MATCH TO FINISH!!!**  ⚠")} ,1000);
					}						
					else{
						console.log(x)
						for (; x < json.matches.length; ){x++;}
						console.log(x)
							setTimeout(function(){message.channel.send('***'+ x  + " MATCH/ES FOUND!"+ '*** '+ " ✅")} ,1000);
							setTimeout(function(){message.channel.send("*Loading matches...* ⌛\n")} ,1000); 

				while (m<x-1){
					m++;
					n++;
					b--;
					//epoch converter
					let mt = []
					var match_time = json.matches.map(t => t)
					
						match_time.forEach(time => {
								if(mt.some(e => e.match_start === time.match_start)){
									let u = mt.findIndex(e => e.match_start === time.match_start) 
					
									mt[u]={	
										match_start: mt[u].match_start, 
										}	
								}
								else {
							
									mt.push({
									match_start: time.match_start,
									})
								}
							})
					
						
						function numOnly(value) {
						if (typeof (val) === 'number') {
						return val;
							}
						}
					var date_select = mt.slice(m, n);
					var datestrng = JSON.stringify(date_select);
					var res = datestrng.replace(/\D/g, "");
					var unixTimestamp = res;
					//var date = new Date(unixTimestamp*1000);
					//var nt = date.toString();
					//var ns = nt.replace('(China Standard Time)','')
					var date = new Date(unixTimestamp*1000);
					var nt = moment.tz(date, "Asia/Manila").format('YYYY-MM-DD h:mm A ZZ');
					
				console.log(m,x)
					
			
					let m1 = []
					let pp = 0
					let tp = 0
					var matches = json.matches[m]?.player_results.map(m => m)
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
			const embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle("ApexAPI DiscordBot \n"+ "**🎲 MATCH **"+  parseInt( parseInt(x)+ parseInt(b) + parseInt(1)) +"\n 🕒 "+ nt)
				.setAuthor("🔻 N8VENTURES' (with help from Manokii🐔) 🔻")
				.addFields(
				placements.map(p => ({
					name: `${p.teamName}`,
					value: `🏅 **Total Points: ${p.TotalPoints}** \n ------------------------`
									})
							)
				
				)
				.setFooter("N8VENTURES🔻  x  Manokii🐔 2021")
				.setTimestamp()
			
			setTimeout(function(){message.channel.send(embed)} ,2000); 
			} if (m==x-1){ setTimeout(function(){message.channel.send("\n **🎉   ALL MATCHES LOADED   🎉**\n")} ,4000); setTimeout(function(){json = []} ,4000); 	;}
			
			};
			})
			}
			break;
			
			
			case '.help':
        
const embed = {
  "author": {"name":"🔻 N8VENTURES' (with help from Manokii🐔) 🔻",
	"url": "https://www.facebook.com/blindspotprod"},
  "thumbnail": {
  "url": "https://cdn.discordapp.com/avatars/817056565189804043/9bf2181ec4a603a86e8a1e2485324792.png?"},
  "description": `Help Menu for ${user}!`,
  "color": 2947688,
  "fields": [
  {
      "name": ".help",
      "value": "Displays this message."
    },
    {
      "name": ".apex",
      "value": "Displays Kills, Placements, and Total Points each team per match. \n *ex.* `.apex [stat token]`"
    },
    {
      "name": ".ato",
      "value": "Similar to `.apex` but only displays Total Points."
    },
	{
      "name": ".apexfull",
      "value": "Similar to the 2 commands above but includes team numbers and team names."
    },
	   {
      "name": ".hi",
      "value": "try it 😉"
    },
	{
      "name": ".ping",
      "value": "play ping pong 😉 😉"
    }
  ]
};
message.channel.send({ embed });
			break;	

			case '.ping':
			 setTimeout(function(){message.channel.send(`🏓 *hehe*.`)} ,1000); 
			 setTimeout(function(){message.channel.send(`\n 📡 **Latency** is __**${Date.now() - message.createdTimestamp - 2000}ms!**__`)} ,2000); 
			 setTimeout(function(){message.channel.send(` \n 🛰 **Discord API Latency** is __**${Math.round(client.ws.ping)}ms!**__`)} ,3000); 
			break;
	}
});

client.on('message', async message =>{
		const prefix = '.';
		const user = message.author;
		const args = message.content.split(' ');
		const cmd = args.shift().toLowerCase();
			   switch(cmd) {
		
			case '.apexfull':
			
			const StatToken2 = message.content.replace('.apexfull ','').replace(/\s/g, '');
			const ApexAPI2 = 'https://r5-crossplay.r5prod.stryder.respawn.com/privatematch/?token='
			const GrabAPI2 = ApexAPI2 + StatToken2
			
			if (message.content === '.apexfull'){
			message.channel.send(`⚠ *** ${user}` +' PLEASE INPUT STAT TOKEN*** ⚠')
			
			}
			else{
			setTimeout(() => message.delete(), 500);
			setTimeout(function(){message.channel.send('*Deleting message...* 🧼 \n Do not worry. We got your input token! *(I mean, hopefully it is a token heh)* 👍\n')} ,1000); 
			setTimeout(function(){message.channel.send('\n*Confirming...* ⌛\n')} ,1050); 
			const fetch = require('node-fetch');
			let url = GrabAPI2;
			
					
			fetch(url)
				.then(res => res.json())
				.then(json => {	
				var x=0;
				var m=-1;
				var n=0;
				var b=0;
				function isEmpty(obj) {
				return Object.keys(obj).length === 0;
				}	
			
							
					if(isEmpty(json)){
						setTimeout(function(){message.channel.send("**⚠   MATCHES NOT DETECTED!   ⚠**" +'\n \n'+ "**⚠  PLEASE INPUT CORRECT TOKEN OR WAIT FOR THE MATCH TO FINISH!!!**  ⚠")} ,1000);
					}						
					else{
						console.log(x)
						for (; x < json.matches.length; ){x++;}
						console.log(x)
							setTimeout(function(){message.channel.send('***'+ x  + " MATCH/ES FOUND!"+ '*** '+ " ✅")} ,1000);
							setTimeout(function(){message.channel.send("*Loading matches...* ⌛\n")} ,1000); 
					
				while (m<x-1){
					m++;
					n++;
					b--;
					//epoch converter
					let mt = []
					var match_time = json.matches.map(t => t)
					
						match_time.forEach(time => {
								if(mt.some(e => e.match_start === time.match_start)){
									let u = mt.findIndex(e => e.match_start === time.match_start) 
					
									mt[u]={	
										match_start: mt[u].match_start, 
										}	
								}
								else {
							
									mt.push({
									match_start: time.match_start,
									})
								}
							})
						function numOnly(value) {
						if (typeof (val) === 'number') {
						return val;
							}
						}
					var date_select = mt.slice(m, n);
					var datestrng = JSON.stringify(date_select);
					var res = datestrng.replace(/\D/g, "");
					var unixTimestamp = res;
					//var date = new Date(unixTimestamp*1000);
					//var nt = date.toString();
					//var ns = nt.replace('(China Standard Time)','')
					var date = new Date(unixTimestamp*1000);
					var nt = moment.tz(date, "Asia/Manila").format('YYYY-MM-DD h:mm A ZZ');
					let u = 0
					u++;
					let m1 = []
					let pp = 0
					let tp = 0
					var matches = json.matches[m]?.player_results.map(m => m)
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
									playerName: [...m1[i].playerName, player.playerName],
									teamNum: m1[i].teamNum,
									}
	
							} 
						else {

							m1.push({
								teamName: player.teamName,
								kills: player.kills,
								teamPlacement: player.teamPlacement,
								PlacementPoints: pp,
								TotalPoints: tp,
								playerName: [player.playerName],
								teamNum: player.teamNum,
							})
						}
						
					})

			var placements = m1.sort(function(a, b){return b.TotalPoints -  a.TotalPoints});
			
			const embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle("ApexAPI DiscordBot \n"+ "**🎲 MATCH **"+  parseInt( parseInt(x)+ parseInt(b) + parseInt(1)) +"\n 🕒 "+ nt)
				.setAuthor("🔻 N8VENTURES' (with help from Manokii🐔) 🔻")
				//.setDescription(jsonstrng)
				.addFields(
				placements.map(p => ({
					//pname=p.teamname
					name: `${p.teamName}`,
					value: `#️⃣  Team Number ${p.teamNum}
							🔥 Players: ${p.playerName} 
							☠️ Kills: ${p.kills}
							👟 Placement: ${p.teamPlacement}
							🏅 **Total Points: ${p.TotalPoints}** \n ------------------------`
									})
							)
				
				)
				.setFooter("N8VENTURES🔻  x  Manokii🐔 2021")
				.setTimestamp()
			
			setTimeout(function(){message.channel.send(embed)} ,2000); 

			} if (m==x-1){ setTimeout(function(){message.channel.send("\n **🎉   ALL MATCHES LOADED   🎉**\n")} ,4000); setTimeout(function(){json = []} ,5000); 	;}
			
			};
			})
			}
			break;	
	}
});
