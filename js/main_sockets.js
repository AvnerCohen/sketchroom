var isInitiator;
var myUID = Math.random().toString(36).slice(2);

var socket = io.connect();

socket.on('mouse_movment', function (payload){
  var x = payload.posX;
  var y = payload.posY;
  document.getElementById("arrow").style.display="inline";
  document.getElementById("arrow").style.top = y + "px";
  document.getElementById("arrow").style.left = x + "px";
});
