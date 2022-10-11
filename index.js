const Discord = require('discord.js')

const bot = new Discord.Client();

const token = 'ODExNjMwNTM5OTczODUzMjA0.YC0_2A.SMd4B4XoEjKwHSMPQkq6cwv2Fzg';

bot.login(token)
bot.on('ready', () =>{
    console.log('estou pronto para usar')
})

bot.on('message', msg => {
    if (msg.content === 'E aí galera!') {
        msg.reply('Olá! Seja bem-vindo ao nosso canal!')
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!black")) {
      message.channel.send("xô te mutar aqui");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!jean")) {
      message.channel.send("ZSTRIKIII!");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!anonimato")) {
      message.channel.send("Se o Striki não tem fãs, graças a Deus");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!arroz")) {
      message.channel.send("9?99?999?");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!dany")) {
      message.channel.send("sou daniel das malandragens, das malandragens eu manjo");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!striki")) {
      message.channel.send("essa moto aqui é sua?");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!ulquiorra")) {
      message.channel.send("relaxa que no fim da escuridão tem anão");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!duff")) {
      message.channel.send("fps baixo do cão");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!gabe")) {
      message.channel.send("skye com papagaio no cu");
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("!rodrigo")) {
      message.channel.send("yamette kudasai!!1!1");
    }
});

bot.on("message", (message) => {
  if (message.content.startsWith("!delta")) {
    message.channel.send("menina veneno meu pinto é pequeno");
  }
});

bot.on("message", (message) => {
  if (message.content.startsWith("!jax")) {
    message.channel.send("louco com um poste");
  }
});