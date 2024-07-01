//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0svUEM1ZVRlQUNzSGdJS3JqS1Y3NlVzWHB2K2tUUFEwamZVSFhyY1dYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjYwdC9BNllUTWNaVjlEZUM5MTJ6MDdkN2UwdDE0bzVSMGMyVnhNMXRqbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SGxRWEhUc0tGNEpWc3FsWk9hRE1tTEIxZDZ2YzVFRU9TblVQZ2hYR0hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIQ1FDV1lXU3gxcklkZzRoRWdYcWlvc09pTkVNbThzYm9HQmxLTUtTbFJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMMkszbXd1VzRrQmMzSm1DZlpuRHFxRGMxckVGcEFpNGtXa2ttMThkMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5PK1E3WGRmVFhRKzhlL3ZMK2lMTUFhZVBoYlBmb0tuLzl0eWl4Q3A3QmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JQd0VZL3pKTm04NjM1NEkvQ3JMWTZsdWJ3clBldmhJNkVZc0ZobWdWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQytqZzdoN0EvaE84SkxKQlNFRVVMSEtuT3U5SDVyK1JjcXBTamt0Qm9Cdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMyaWk1SnhLRjMvcnhqWkliL3VXUGpoZDBodnFWS3VJNy9OV3dGSnFoTFF2dUtQSVcxS3gzaUJQWmJwcnRCajdJTGtYNWZKMGo5UkQ0OWRuS04wOUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJLcFlkbDVHWklQV1U3MHBSSE1NQnpjU1hBRTVEd0Y1YnhuNkZCUEpLZFFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0eDFfRUMtR1FWV3VfU1FsN2ZvNGx3IiwicGhvbmVJZCI6IjJhZjkwOGIyLWMzYjctNDZiYS1hZmE0LWZjZDA3MzdkNDU0ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNV0k0T20vZzhBdXpyQ3NLRnFMRGpPYXVMSVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1EMjNPYzRwRjlHMFZod2RNckFXZ2JEVmpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldDOFo2M1JTIiwibWUiOnsiaWQiOiI5NDcyMzEyNTk4NToyNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnk1eWxvUXdJZUx0QVlZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTWRyd2pJQ1pDZkRBQ0xNUDMyS01wSjM3Z1RVVU8ySThHcmRHa0lCMGtUST0iLCJhY2NvdW50U2lnbmF0dXJlIjoicXY0TVo4VHA1a1IwQ3lJS2JiNEMzeWJzL09hVDNhUzc2VFZ3b2JNc1RPRUxYYktDb2hNUVZIZHlpUGJMd1duS3pTUUhKdGEyK2R6cGpOUWpvRWppQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6InVFT2crSFJCd3ZLQ1lTNm9yYVhlMkE1MHlmNFViTU16UUwydHRONEFadDVZaGE5eDJkRG5aWno4b3Bub1dSU0pHbk1XZGNqaExzYkFQK01jd2VsUEF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjMxMjU5ODU6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEhhOEl5QW1Rbnd3QWl6RDk5aWpLU2QrNEUxRkR0aVBCcTNScENBZEpFeSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTg0NTgzNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBVWQifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "92723125985";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://github.com/lufa-official/Jessi-md/blob/main/Assets/50c65d1da9af7322cbbc79074ec7cc26.jpg?raw=true";
global.userImages =
  process.env.USER_IMAGES ||
  "https://github.com/lufa-official/Jessi-md/blob/main/Assets/50c65d1da9af7322cbbc79074ec7cc26.jpg?raw=true";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Zeus Inc`",
  author: process.env.PACK_AUTHER || "Zeus Inc",
  packname: process.env.PACK_NAME || "Zeus Inc",
  botname: process.env.BOT_NAME || "Zeus Bot",
  ownername: process.env.OWNER_NAME || "YoungZeus",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE = "Asia/Kolkata";
global.github = process.env.GITHUB || "https://github.com/lufa-official";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
