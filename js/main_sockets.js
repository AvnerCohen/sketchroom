var isInitiator;
var myUID = Math.random().toString(36).slice(2);

var socket = io.connect();

socket.on('mouse_movment', function (payload){
      mousePaint(payload);
});
