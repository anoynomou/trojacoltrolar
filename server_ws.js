var Webserver = require('ws');
var PORT = process.env.PORT || 3000;
var Server =new Webserver.Server({port:PORT},()=>{console.log("Server is runing on port : "+ PORT)});




Server.on("connection",(ws)=>{



console.log("clint connected")

// when message receved
ws.on('message',(data)=>{


Server.clients.forEach((client)=>{

// if connection not == my connection
// send all user data  except me!
if(client != ws && client.readyState == ws.OPEN)

client.send(data);    
console.log("dat sended")
})

})


ws.on('close',()=>{
console.log("clint disconnect")

})







})





Server.on('error',(e)=>{

})




Server.on('listening',()=>{

})
