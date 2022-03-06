const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
canvas.width = 1880;
canvas.hight = 1080;

clicks = 2;

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
     ctx.drawImage(tools,192,200,200);

    requestAnimationFrame(animate);
}

function showToolsList(event) {
 
    show = true;

  //  if(clicks==1)
   // show = true;

   clicks = clicks - 1;

   console.log(clicks);

  if(clicks==0)
     clicks = 2;
    
     if(clicks==0 || clicks==2)
     show = false;
  }
  
  

  document.addEventListener("click", showToolsList);

//  document.addEventListener("click", clicks-1);


animate();