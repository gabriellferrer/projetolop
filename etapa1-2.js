<script>
/* 
Equipe: 
Gabriel Lucas Aguiar Ferrer - 01C(Líder) 
Etapas 1-2
*/

var x=200;
var y=350;
var xo=0
var yo=50

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





</script>
