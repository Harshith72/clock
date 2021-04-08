var hr
var mn 
var sc
//scAngle;


function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  translate(200,200);
  rotate(270);

  let hr = hour();
  let mn = minute();
  let sc = second();

  stroke(255,0,255);
  strokeWeight(8);
  noFill();
  let scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  stroke(0,10,255);
  let mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  stroke(0,255,00);
  let hrAngle = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  stroke(150,255,100);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

   push();
  rotate(mnAngle);
  stroke(0,10,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(scAngle);
  stroke(255,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


}





