const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
canvas.width = 1880;
canvas.hight = 1080;

clicks = 2;
x = 0;

const keys = [];

const player = {
    x:0,
    y:0,
    width:50,
    hight:150,
    frameX:0,
    frameY:0,
    speed: 9,
    moving: false,
};

const playerSprite = new Image();

playerSprite.src = "car.png"

const background = new Image();
background.src = "garage.png"

const but = new Image();
but.src = "parts2.png"

const car = new Image();
car.src = "da.png"

const tools = new Image();
tools.src = "parts.png"

var show = false;

function animate()
{ctx.imageSmoothingEnabled = false;

    ctx.drawImage(background,0,0,1880,200);

    ctx.drawImage(car,192,0,200,30);

    ctx.drawImage(but,1670,0,200,30);

    if(show)
     ctx.drawImage(tools,0,-4,1000,200);

    requestAnimationFrame(animate);
}

function showToolsList(event) {
 
    if(show ==true){
     show=false;
     x = x + 100;}
     else show = true;
  }

  document.addEventListener("click", printMousePos);
  
  

  //document.addEventListener("click", showToolsList);

function printMousePos(event) {

     console.log(event.clientX,event.clientY);
      
     if(event.clientX>1133&&event.clientY<151)
     show = true;  
  }  
    
  

animate();