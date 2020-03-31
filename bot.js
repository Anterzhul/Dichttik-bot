const Discord = require('discord.js');
let auth = require('./auth.json');
let centurionRe = /centurion\w*mix/i;
let stefanNaamRe = /hey stefan/i;
let atmosRe = /atmos/i;
let openRe = /open/i;
let shotgunRe = /shotgun/i;
let vsvRe = /Leonardo da Vinci/i;
let JRe = /\WJ\W/i;
let wedstrijdRe = /wat stefan maar wil/i;
let mdeRe = /mde/i;
let internRe = /intern/i;
let kutRe = /kut/i;
let stefanRe = /stefan/i;
let afstudeerRe = /afstuderen/i;
let feitjeRe = /feitje/i;
let watRe = /wat (doe|kan) (je|jij)/i;
let isHetRe = /is het/i;
let juniRe =/jun(i|o)/i;
let ndvrRe = /endeavor/i;
let fs = require("fs");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let digger = 0;

// Initialize Discord Bot
const bot = new Discord.Client();
bot.login(auth.token);
bot.on('ready', () => {
    console.log("Logged in as Senator Knoops!")
    senatorKnoops = bot.users["693171016519647322"];
    groovy = bot.users["234395307759108106"];
    
});

bot.on('message', async message => {
    
    if (digger == 0) {
        if (Math.random() < 0.02) { 
            digger = 1;
            console.log("DIGGER COMING UP!");
            setTimeout(function(){
                const attachment = new Discord.MessageAttachment('https://www.somabedrijfsopleidingen.nl/images/default-source/default-album/veilig-werken-met-de-hydraulische-graafmachine-2-5-en-10-dagen.jpg?sfvrsn=35b0d669_0');
                message.channel.send("Graafmachines zijn echt cool!", attachment)
                digger = 0;
            }, Math.floor(18000000*Math.random()));
        }
    }

    if (stefanNaamRe.test(message.content)){
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            switch(Math.floor(Math.random() * (5.5 - 1 + 1)) + 1) {
                case 1:
                    message.reply("Zo klaar met jullie...");
                    break;
                case 2:
                    message.reply("Heh heh");
                    break;
                case 3: 
                    message.reply("*Stefan schudt zn hoofd*");
                    break;
                case 4:
                    message.reply("Waarom doe ik dit ook?");
                    break;
                case 5:
                    message.reply("...");
                    break;
                default:
                    message.reply("Manmanman");
            }
        } else {
            message.reply('Ga zelf in een kanaal dan pannekoek!');
        }
    }

    if(message.member.displayName === "Hitjestoren"){
        groovy = message.member;
        //console.log(groovy);
    }

    if(message.member.displayName === "Senator Knoops"){
        senatorKnoops = message.member;
        //console.log(senatorKnoops);
    }

    if (ndvrRe.test(message.content)) {
        if (Math.random() < 0.09) {
            message.reply("Vroeger was alles beter....");
        }
    }

    if(feitjeRe.test(message.content)) {
        const Http = new XMLHttpRequest();
        const url='https://uselessfacts.jsph.pl/random.json?language=en';
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
            if (Http.readyState == 4 && Http.status == 200){
                let textResponse = JSON.parse(Http.responseText);
                //console.log(Http.responseText);
                //console.log(textResponse);
                message.channel.send(textResponse["text"]);
            }
        }
    }
	
	if (mdeRe.test(message.content)) {
		message.reply("Shotgun!");
    }
    
    if (afstudeerRe.test(message.content)) {
        message.reply("Nooit!");
    }

    if (stefanRe.test(message.content) && watRe.test(message.content)) {
        message.reply("Ik kan best veel, bijvoorbeeld: \n- Webstrijdtafelspelletjes aanslingen\n- Feiten vertellen\n- Opletten of jullie niks doms zeggen...\n- Roep maar als je me nodig hebt!");
    }
	
	if (internRe.test(message.content)) {
		if ((message.member == senatorKnoops) == false) {
		message.reply("Vo intern");
		if (Math.random() < 0.3) {
			message.channel.send("*Stefan kijkt verrassend vrolijk*");
		}
	}
	}
	
	if (stefanRe.test(message.content) && kutRe.test(message.content)) {
		message.reply("Je bent zelf kut.");
	}

    if (openRe.test(message.content) && atmosRe.test(message.content)){
        let dateTime = new Date();
        let dag = dateTime.getDay();
        let uur = dateTime.getHours();
        if ((dag == 3 && uur >= 15) || (dag == 4 && uur == 0) || (dag == 5 && uur >= 15 && uur < 21)) {
            message.reply("Ja hoor! er kan geborreld worden.");
        } else {
            let daysToGo = 0;
            let hoursToGo = 0;
            switch(dag) {
                //Countdown to Vrimibo
                case 4:
                case 5:
                    if (uur <= 15){
                        daysToGo = 6 - dag;
                        hoursToGo = 15 - uur;
                    } else {
                        daysToGo = 6 - dag;
                        hoursToGo = 24 + 15 - uur;
                    }
                    break;
                //Countdown to wobo
                case 6:
                case 0:
                case 1:
                case 2:
                case 3:
                    if (uur <= 15){
                        daysToGo = 3 - dag;
                        hoursToGo = 15 - uur;
                    } else {
                        daysToGo = 2 - dag;
                        hoursToGo = 24 + 15 - uur;
                    }
                    
                    if (daysToGo < 0) {
                        daysToGo += 7;
                    }
                break;
                }

            let dagenString = String(daysToGo);
            let urenString = String(hoursToGo);
            let tijdString;
            if (daysToGo){
                tijdString = dagenString + " dagen en " + urenString + " uur";
            } else {
                tijdString = urenString + " uur";
            }
            switch(Math.floor(Math.random()*3 + 1)){
                case 1:
                    message.channel.send("Jongens, de vergunning gaat pas over " + tijdString + " in...");
                    break;
                case 2:
                    message.channel.send("Nog eventjes niet. Wacht nog " + tijdString + ".");
                    break;
                case 3:
                    message.channel.send("Zijn jullie nou echt de resterende " + tijdString + " aan het aftellen?");
                    message.channel.send("*Senator Knoops schudt zijn hoofd afkeurend.*");
                    break;
            }

            }
        }
        
    

    if (shotgunRe.test(message.content) || JRe.test(message.content)) {
		if ((message.member === senatorKnoops) == false) {
        message.reply("Zeggen is doen!");
		}
    }

    if (vsvRe.test(message.content)) {
        message.reply("Vo!");
    }

    if (wedstrijdRe.test(message.content)) {
        switch(Math.floor(Math.random()*5 + 1)) {
            case 1:
                let getalEen = Math.floor(Math.random()*5 + 3);
                let getalTwee = Math.floor(Math.random()*(getalEen+8) + getalEen);
                let stringEen = String(getalEen);
                let stringTwee = String(getalTwee);
                message.channel.send("We spelen: Juffen op " + stringEen + " en " + stringTwee +".");
                message.channel.send("Een!");
                break;
            case 2:
                message.channel.send("Lafaarden! EEN!");
                break;
            case 3:
                message.channel.send("We spelen.... No daddy please");
                message.channel.send("No!");
                break;
            case 4:
                message.channel.send("Gegen die wc-voice-kanaal");
                senatorKnoops.voice.setChannel("688039871935545383");
                message.channel.send("Later sukkels!");
                break;
            case 5:
                message.channel.send("Categorie....");
                switch(Math.floor(Math.random()*5.1 + 1)) {
                    case 1:
                        message.channel.send("Biermerken!");
                        message.channel.send("HJ!");
                        break;
                    case 2:
                        message.channel.send("Atmosfeerbeheerders!");
                        message.channel.send("Senator Knoops!");
                        break;
                    case 3:
                        message.channel.send("Automerken!");
                        message.channel.send("Fiat!");
                        break;
                    case 4:
                        message.channel.send("Stations van de NS in Nederland!");
                        message.channel.send("Delft Campus!");
                        break;
                    case 5:
                        message.channel.send("Nummers die in een escalatiemix zitten!");
                        message.channel.send("99 Luftballons!");
                        break;
                    default:
                        message.channel.send("Mensen die Barjan geregeld hebben!");
                        message.channel.send("Quinten!");
                        break;
                }
                break;
        }
    }

    if (centurionRe.test(message.content)){
        if (message.member.voice.channel) {
            //console.log(message.member);
            const connection = await message.member.voice.channel.join();
            try {
                if (groovy.voice.channel) {
                    message.channel.send("Kut hitjestoren");
                    groovy.voice.setChannel("688039871935545383");
                    message.channel.send("*Senator knoops turft de hitjestoren de WC in.*");
                } else {
                    message.channel.send("Ja hoor. De centurion. Idioten...");
                }
            } catch(error) {
                message.channel.send("Ja hoor. De centurion. Idioten...");
            }
            
            const dispatcher = connection.play('centurion.mp3');

            dispatcher.on('finish,', () => {
                message.reply("En nou je kop houden.");
                console.log("klaar");
            }) 
        } else {
            message.reply('Ga eerst in een kanaal dan sjaars!');
        }
        
        
    }
})