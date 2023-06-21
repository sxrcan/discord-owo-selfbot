
const express = require('express'); 
const { Client, MessageAttachment, MessageEmbed } = require('discord.js-selfbot');
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map(); 
const config = require('./config.json')

client.on('ready', () => {
  console.log("================================")
  console.log(`${client.user.username} Başlatılıyor..`)
  console.log("================================")
  console.log("Token'e giriş yapıldı! - Developed by sxrcan"); 
});

  client.on("ready", () => {
    setInterval(() => {

      let sercwn = client.channels.cache.get(config.kanalid); 

     sercwn.send("wh")
     sercwn.send("wb")

    }, 16000);
})

function generateRandomCode() {

  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

client.on("ready", () => {
  setInterval(() => {
    let sercwn = client.channels.cache.get(config.kanalid); 
    let codes = [];
    
    let code = generateRandomCode();
    sercwn.send(code);

  }, 20000); 
});

const Tesseract = require('tesseract.js');
//const { MessageAttachment } = require('discord.js');
import('node-fetch').then(fetch => {

});


client.on('message', async (message) => {
  if (message.channel.type === 'dm' && message.attachments.size > 0) {
    const attachment = message.attachments.first();
    if (attachment && attachment.url.endsWith('.png')) {
      const imageUrl = attachment.url;
      const imageBuffer = await getImageBuffer(imageUrl);
      const text = await readTextFromImage(imageBuffer);
      message.author.send(`Text: ${text}`);
    }
  }
});

async function getImageBuffer(url) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  return buffer;
  console.log(`Fetching image from URL: ${url}`);
}

async function readTextFromImage(buffer) {
  try {
    const { data: { text } } = await Tesseract.recognize(buffer, 'eng');
    return text;
  } catch (error) {
    console.error(`Error reading text from image: ${error}`);
  }
}


client.login(config.token) 
