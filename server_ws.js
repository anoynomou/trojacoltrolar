var Webserver = require('ws');
var PORT = process.env.PORT || 3000;
var Server =new Webserver.Server({port:PORT},()=>{})




Server.on("connection",(ws)=>{




// when message receved
ws.on('message',(data)=>{

Server.clients.forEach((client)=>{

// if connection not == my connection
// send all user data  except me!
if(client != ws)

client.send(data);    

})

})


ws.on('close',()=>{})

})





Server.on('error',(e)=>{

})




Server.on('listening',()=>{

})
