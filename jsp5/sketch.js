// variables for the sketch:

// how fast the circle is going
var circleSpeed = 5;
var circleY = 240;
var stop= 5;
var totheleft=0
var x =0;//move yuri
var img;
var h=25;
var a=110;
var b=100;
var c=170;
var d=230;





var backgroundColor;//Circular Buttons
var isOverRect;//Circular Buttons

//http://danieltsadok.net/mmp210/examples/circle-button/

function Final(who)
{
  var lastclass = "MMP210 Final! I`m " + who + " Me and APPLE TREE LOL!";

  return lastclass;
}

var lastclass = Final("Yuri");
alert(lastclass);

//http://danieltsadok.net/mmp210/examples/function-with-argument/


function setup() 
{
  createCanvas(940, 780);
  backgroundColor=color(255, 255, 255);//Circular Buttons
  
}

  
function draw() 
{

 // background(125, 277, 255);
  background(backgroundColor);//Circular Buttons

  // get distance between mouse and circle　式
  var distance = dist(mouseX, mouseY, 680,450); //Circular Buttons

   // if the distance is less than the circle's radius
  if(distance < 50)//Circular Buttons
  {                //Circular Buttons
    isOverRect = true;
  }else {
     isOverRect = false;
      }

//image(img, 680, 450);

 
  

noStroke();
fill(255,189,121);
  rect(370, 350, 220, 220);

  fill(71,255,134);
  
  ellipse(470, 50, 100, 100);
  
  ellipse(390, a, b, b);
  ellipse(550, a, b, b);
  ellipse(470, a, b, b);

  ellipse(310,c, b, b);
  ellipse(390,c, b, b);
  ellipse(470,c, b, b);
  ellipse(550,c, b, b);
  ellipse(630,c, b, b);

  ellipse(d, d, b, b);
  ellipse(310,d, b, b);
  ellipse(390,d, b, b);
  ellipse(470,d, b, b);
  ellipse(550,d, b, b);
  ellipse(630,d, b, b);
  ellipse(710,d, b, b);

  ellipse(150, 290, b, b);
  ellipse(230, 290, b, b);
  ellipse(310, 290, b, b);
  ellipse(390, 290, b, b);
  ellipse(470, 290, b, b);
  ellipse(550, 290, b, b);
  ellipse(630, 290, b, b);
  ellipse(710, 290, b, b);
  ellipse(790, 290, b, b);
  
  ellipse(150, 350, b, b);
  ellipse(230, 350, b, b);
  ellipse(310, 350, b, b);
  ellipse(390, 350, b, b);
  ellipse(470, 350, b, b);
  ellipse(550, 350, b, b);
  ellipse(630, 350, b, b);
  ellipse(710, 350, b, b);
  ellipse(790, 350, b, b);
  
  fill(232,224,193);
  rect(0, 550, 940, 230);

  
//APPLES
    noStroke();
     fill(255,20,40);
                 //where the circle will be (up and down)circle size
  ellipse(650,280, 80, 80); //apple nodrop
  ellipse(width/3,circleY, 50, 50); //apple drop
  ellipse(width/6,circleY, 40, 40); //apple drop
  ellipse(790+totheleft,circleY+totheleft, 50, 50);//apple drop
  ellipse(380,320, 60, 60); 
  ellipse(520,300, 60, 60); 
  ellipse(560,100, 60, 60);
  ellipse(380,circleY, 60, 60);//apple drop
  ellipse(300,160, 50, 50); 
  ellipse(200,290, 30, 30); 
//APPLES





noStroke();
     fill(179, 134, 0);
ellipse(680,450, 90, 100);//click me

noStroke();
     fill(0);
textSize(22);
textAlign(CENTER);
text('CLICK ', 680, 450);
textAlign(CENTER);
text('HERE', 680, 475);









   

    //image(img, 630, 400);




noStroke();
     fill(229,143,101);
   translate(40, 50);

   ellipse(680+x,450, 90, 100);// face
    

fill(251, 252, 252);//face detail start
 ellipse(660+x,440, 25, 10);//eye left white
 ellipse(693+x,440, 25, 10);//eye right white

fill(0); 
ellipse(660+x,440, 10, 10);//eye left black
ellipse(693+x,440, 10, 10);//eye right black

fill(255, 144, 200);//lips
ellipse(675+x,470,h,10);//lips
ellipse(675+x,480,h,10);//lips

fill(0);//hair
ellipse(675+x,400,h,h);//hair
ellipse(650+x,405,h,h);//hair
ellipse(700+x,405,h,h);//hair
ellipse(720+x,420,h,h);//hair
ellipse(728+x,442,h,h);//hair
ellipse(728+x,465,23,23);//hair
ellipse(730+x,485,20,20);//hair
ellipse(730+x,500,15,15);//hair
ellipse(725+x,510,15,15);//hair // face detail end

noStroke();//clothing
     fill(255,255,162);
    translate(620, 470);
triangle(10+x, 95, 58+x, 20, 106+x, 95);


x=x-1;
//ellipse(width/6,320, 30, 30); 

// move the circle by changing the variable circleY
  // note that if circleSpeed is 0, circleY will stay the same
  
  //Citation
  //Overlapping Circles
//http://danieltsadok.net/mmp210/examples/overlapping-circles/
//
if (circleY < 620)
{
  circleY = circleY + circleSpeed;
}

if (stop < 100)
 {stop = stop;}


}
//citation
//http://danieltsadok.net/mmp210/examples/circle-button/
//Circular Button
function mousePressed()
{
  if(isOverRect == true)
  {
    backgroundColor = color(random(255), random(255), random(255));
  
}


}


  