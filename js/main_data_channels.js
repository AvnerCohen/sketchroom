var isInitiator;
var myPeerId = null;
var otherPeers = {};

var peer = new Peer({key: 'gve14msqtb0m5cdi'});

var socket = io.connect();


//Get OtherPeers
socket.on('peersFest', function (id){
  if (!otherPeers[id]) {
    console.log("Added a new peer:" + id);
    otherPeers[id] ={id: id, conn: peer.connect(id)};
  }
});

peer.on('open', function(id) {
  myPeerId = id;
  console.log('My PeerJS id is: ' + myPeerId);
  socket.emit('joined', myPeerId);
  socket.emit('askForPeers', null);
});

peer.on('connection', function (conn) {
    conn.on('data', function (payload){
      var x = payload.posX;
      var y = payload.posY;
      document.getElementById("arrow").style.display="inline";
      document.getElementById("arrow").style.top = y + "px";
      document.getElementById("arrow").style.left = x + "px";
    });
});

socket.on('joined', function (id){
  otherPeers[id] ={id: id, conn: peer.connect(id)};
  console.log(id + " joined in");
});

window.setTimeout(function(){
    socket.emit('askForPeers', null);
  }, 1000);