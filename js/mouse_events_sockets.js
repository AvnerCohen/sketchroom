window.onmousemove = function(e){
  document.getElementById("arrow").style.display = "none";
  if (socket){
    socket.emit("mouse_movment", {uid: myUID, posX: e.x, posY: e.y});
  }
};