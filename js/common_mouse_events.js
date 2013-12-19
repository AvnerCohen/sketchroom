window.onload = function(){
  setTimeout(onready, 10); //Hack for nextTick
};

function onready(){


}

var historicalArrows = [];
var maxHistoricalArrows = 20;


function mousePaint(payload){
      var x = payload.posX;
      var y = payload.posY;
      var arrow = document.getElementById("arrow");
      arrow.style.display="inline";
      if (historicalArrows.length >= maxHistoricalArrows) {
          var toBeRemoved = historicalArrows.shift();
          document.body.removeChild(toBeRemoved);

      }
      var newArrow = arrow.cloneNode(true);
      newArrow.style.opacity = 0.4;
      historicalArrows.push(newArrow);
      document.body.appendChild(newArrow);
  
      arrow.style.top = y + "px";
      arrow.style.left = x + "px";
}