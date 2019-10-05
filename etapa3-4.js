/* 
    Equipe: 
      Gabriel Lucas Aguiar Ferrer - 01C (Líder)
        Etapa 3-4
*/


var x=200;
var y=350;
var xo=0
var yo=50
var xd=0
var yd=0
var estadoDisparo = false; 


function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(keyIsDown(RIGHT_ARROW)){
    x+=3
  }
  
  if(keyIsDown(LEFT_ARROW)){
    x-=3
  }
  
  if(keyIsDown(UP_ARROW)){
    y-=3
  }
  
  if(keyIsDown(DOWN_ARROW)){
    y+=3
  }
  
  background(000);
  ellipse(x, y, 25, 35);
  rect(xo, yo, 35, 35);
  xo+=3
  if (xo>400){
    xo=random(800);
  }
  
  if(keyIsDown(CONTROL) && estadoDisparo == false){
    xd=x;
    yd=y;
    estadoDisparo=true;
  }
  if(estadoDisparo){
  ellipse(xd, yd, 8, 8);
    yd-=8;
    if(yd<yo){
      estadoDisparo = false;
    }
  }