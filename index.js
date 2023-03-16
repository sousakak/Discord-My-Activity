require('dotenv').config();
var discord_rpc = require("discord-rpc")
var ID = process.env.CLIENTID
const client = new discord_rpc.Client({
    transport: 'ipc'
})
client.on("ready", () => {
    client.setActivity({
        state: "Solo Traveling",
        details: "The Journey of Elaina",
        assets: {
            "large-image": "title-image",
            "large-text": "On the road to travel",
            "small-image": "small-image",
            "small-text": "Level 87"
        },
        buttons: [{
            label : "Official Web Site",
            url: "https://majotabi.jp/"
        }]
    });
});
