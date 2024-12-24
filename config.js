const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_40_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MCxcbiAgICAgICAgODksXG4gICAgICAgIDk0LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJPRDZpck55NnVjc1d3alh4bnhYOXBPUEpJbFVuNE1sWXI2L1VIWG1yc1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpPN1BSWEtUU19PeXRqdV9RRWNYRVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFiZjdiNjAtMGVlMy00YzYzLTllY2EtYjBkYTY1ZmEwOGZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgNzAsXG4gICAgICAxMjQsXG4gICAgICAxNTIsXG4gICAgICAyNDIsXG4gICAgICAxNjAsXG4gICAgICAxMDMsXG4gICAgICA2OCxcbiAgICAgIDg3LFxuICAgICAgMTIyLFxuICAgICAgOTMsXG4gICAgICAyNDIsXG4gICAgICAyNDIsXG4gICAgICAyNDAsXG4gICAgICAyMjcsXG4gICAgICAxOSxcbiAgICAgIDI0OCxcbiAgICAgIDE4OSxcbiAgICAgIDE1NixcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDIwMixcbiAgICAgIDI0OSxcbiAgICAgIDM0LFxuICAgICAgNTMsXG4gICAgICAyMjUsXG4gICAgICAzLFxuICAgICAgMjE4LFxuICAgICAgNDAsXG4gICAgICAxNjAsXG4gICAgICAyMzEsXG4gICAgICAxNTQsXG4gICAgICAxMzEsXG4gICAgICAyMDEsXG4gICAgICAxNTYsXG4gICAgICAxNjEsXG4gICAgICA4OSxcbiAgICAgIDE5NyxcbiAgICAgIDExMixcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdOMjM0WjNUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ1NjYwMTU1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MjE3Mzg4MDIzMDA2MjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p1ZDBhOEZFTmpLcWJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRG5QZnlMV25menJ2S3oxeVlnUXZVdjhRdDVycDJ5Y1ZGZ1R2V2lYdmVDTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKUDJ0ZzN5ejFITkpLVkk5NG8ydmhXQ2k2cWh2TFdoR3BYbHFFa2F0UnlvakRQUFdsdDBKcTlrZUkrbUFYYlR2Rk9qeVNuT2tlaVVRbjUzNkZpTWZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0RjlzcWRiRHR6dzFDdVlXMW5XVS83Q2llcFRSMzZRelVMQVQrTGhGdUJoUVByRW1JZVNaa25Sa2h0a2hWZGZ3YW51My9ZTXdhRmRndExEcFRBaGZEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ1NjYwMTU1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUwMjYwMTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFV1BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVXUC5qc29uIjogIntcImtleURhdGFcIjpcIkhBSXRBeVk2eFVnem0rUjNaaWlxeGJsejd3aVFpRVlnMGJ3ck9BME5qR3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0MjA3NDI2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTAyNDk4NzY2MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
