function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function moveBox(boxId, bigBoxId, interval = 300){
var boxelement = $("#"+boxId);
var biggerbox = $("#"+bigBoxId);
var bigbox_height = parseInt(biggerbox.css('height'),10);
var bigbox_width = parseInt(biggerbox.css('width'),10);
var box_height = parseInt(boxelement.css('height'),10);
var box_width = parseInt(boxelement.css('width'),10);
$("#bx").html(bigbox_height);
$("#by").html(bigbox_width);
var xfactor = -1;
var yfactor = -1;
var ddY = getRndInteger(5, 20);
var ddX = getRndInteger(5, 20);
var interval1 = getRndInteger(interval, interval+200);
setInterval(function(){ 
  var boxpos_left = boxelement.position().left;
  var boxpos_top = boxelement.position().top;
  $("#x").html(boxpos_left);
  $("#y").html(boxpos_top);
  if(boxpos_left >= (bigbox_width - box_width) || boxpos_left <= 0){
    xfactor = xfactor * -1;
    ddX = getRndInteger(15, 25);
    ddY = getRndInteger(15, 25);
    interval1 = getRndInteger(interval, interval+200)
    boxelement.css("left", boxpos_left + (xfactor * 30));
    boxpos_left = boxelement.position().left;
    boxpos_top = boxelement.position().top;
  }
  if(boxpos_top >= (bigbox_height - box_height) || boxpos_top <= 0){
    yfactor = yfactor * -1;
    ddX = getRndInteger(15, 25);
    ddY = getRndInteger(15, 25);
    interval1 = getRndInteger(interval, interval+200)
    boxelement.css("top", boxpos_top + (yfactor * 30));
    boxpos_left = boxelement.position().left;
    boxpos_top = boxelement.position().top;
  }
  boxelement.css("left", boxpos_left + (xfactor * ddX));
  boxelement.css("top", boxpos_top + (yfactor * ddY))
}, interval1)
}

alert("testing");
moveBox('box', 'biggerbox');
