const Discord = require(`discord.js`);
const bot = new Discord.Client();
const TOKEN = `NTI4NTc2ODI2NjM3ODExNzIy.DwkUeA._oKk0MzLZYgTlE2zCQ-tkyb0Jvs`

bot.on(`message`, function(message){
    if(message.content == `.iam water`)
    {
        message.reply(`Congrats, you can now move on to the next puzzle my nibba`);
    }
});

bot.on(`ready`,function(){
    console.log(`WE GOOD MY NIBBA`);
})

bot.login(TOKEN)