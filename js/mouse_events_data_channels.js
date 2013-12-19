window.onmousemove = function(e){
  document.getElementById("arrow").style.display = "none";
  Object.keys(otherPeers).forEach(function(key){
    if (otherPeers[key].conn && otherPeers[key].conn.open){
      otherPeers[key].conn.send({peerId: myPeerId, posX: e.x, posY: e.y});
    }
  });
};

window.ontouchmove = function(e){
  document.getElementById("arrow").style.display = "none";
  Object.keys(otherPeers).forEach(function(key){
    if (otherPeers[key].conn){
      otherPeers[key].conn.send({peerId: myPeerId, posX: e.x, posY: e.y});
    }
  });
};