var xJogador5 = 0
var t = 0
var v = 0
var z = 0
var r = 600;
var y = 0
var x = 600;
var speed = 0.20;

function setup()  {
  createCanvas(600, 600);

  
  
  
  frameRate(30);

}

function draw() {
  background("#9E9E9E");

 //primeira parte
  fill("#8BC34A")
  rect(0,460,600,500)
  fill("#795548")
  rect(0,460,600,5)
  
  fill("black")
  textSize(20)
  text("🐤",270,xJogador5)
  xJogador5 += random (5)
  if(xJogador5>490){
   text("cheguei no campo",200,450) 
  }
  if (xJogador5>600){
    xJogador5=0
    
  }
  
  
  
  
  //segunda parte
  let deltaX = speed * deltaTime

  t += deltaX
  v += deltaX
  x -= deltaX
  y += deltaX
  r -= deltaX
  z += deltaX
  if (v > 615)  {
    v = 0;
  }  
  
   if (t > 630)  {
    t = 0;
  }
  
  if (x < 1)  {
    x = 600;
  }

  if (y > 600)  {
    y = 0;
  }
  if (r < -30)  {
    r = 600;
  }

  if (z > 650)  {
    z = 0;
  }
    
  textSize(40)
 
  text("🚘",r, 150, 20);
  text("🚘",x, 300, 20); 
  text("🚔",z, 100, 20);
  text("🚍",t, 250, 20);
  text("🚘",v, 200, 20); 
  text("🚔",y, 350, 20);
    
  //detalhes(obsional)

  textSize(10)
  
  text("🐤",310,510)
  text("🐤",350,530)
  text("🐤",250,500)
  text("🐤",265,520)
  
}