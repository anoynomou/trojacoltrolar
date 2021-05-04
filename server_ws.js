var Webserver = require('ws');
var PORT = process.env.PORT || 3000;
var Server =new Webserver.Server({port:PORT},()=>{})


Server.on("connection",(ws)=>{

ws.on('message',(data)=>{
Server.clients.forEach((client)=>{
client.send(data);
console.log(client);
})
})


})


Server.on('error',(e)=>{
console.log(e);
})
Server.on('listening',()=>{

})
