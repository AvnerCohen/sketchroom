var static = require('node-static');
var http = require('http');
var file = new(static.Server)();
var port = process.env.PORT || 2013;

var allPeers = {};

var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);

console.log("Starting a server on port %s.", port);

var io = require('socket.io').listen(app, { log: false });
io.sockets.on('connection', function (socket){

  socket.on('joined', function (peerId) {
    socket.broadcast.emit('joined', peerId);
    //Needs to create a clean up logic
    allPeers[peerId] = {id: allPeers, timestamp: new Date().getTime()};
  });

  socket.on('askForPeers', function (peerId) {
    Object.keys(allPeers).forEach(function(peerId){
    socket.broadcast.emit('peersFest', peerId);
    });
  });
  

  //For the Socket movment implementaion
  socket.on("mouse_movment", function(payload){
    var sketchRoom = payload.sketchRoom;
    var numClients = io.sockets.clients(sketchRoom).length;
    if (numClients > 1){
      socket.broadcast.emit("mouse_movment", payload);
    }
  });

});

//Clean old peers to avoid balagan every 50 minutes
setInterval(cleanOldPeer, 3000000);

function cleanOldPeer(){
  allPeers = {}; //Reset all peers, yes, it may happen right when you test something, tough luck
  console.log("Clean Peers !! [%s]", new Date().getDate());
};

