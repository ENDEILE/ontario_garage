//подготовка поля игры
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
canvas.width = 1880;
canvas.hight = 1080;

x = 0;

//

//загрузка спрайтов и изображений
const car_1 = new Image();
car_1.src = "car1.png";

const background = new Image();
background.src = "garage.png";

const but = new Image();
but.src = "parts2.png";

const createCar = new Image();
createCar.src = "da.png";

const tools = new Image();
tools.src = "parts.png";

const wheel = new Image();
wheel.src = "wheels[test].png";

var partsM = [];
var i;
for (i = 1; i < 5; i++) {

    const pM = new Image();
    pM.src = `part${i}M.png`;
    partsM.push(pM);

}

var parts = [];
//var i;
for (i = 1; i < 5; i++) {

    const p = new Image();
    p.src = `part${i}.png`;
    parts.push(p);

}
//

//состояние изоброжений на экране
var showTools = false;

var showCar = false;

var showWheels = false;

//отображение ирговых элементов на экране
function animate()
{ctx.imageSmoothingEnabled = false;

    ctx.drawImage(background,0,0,1880,200);

    ctx.drawImage(createCar,192,0,200,30);

    if(showCar) 
       ctx.drawImage(car_1,390,-21,1100,160);

    ctx.drawImage(but,1670,0,200,30);

    if(showWheels)
    ctx.drawImage(parts[2],390,-21,1100,160);

    if(showTools){
     ctx.drawImage(tools,0,-4,1000,200);
    
    
        var i;
        for (i = 0; i < 4; i++) {
            ctx.drawImage(partsM[i],0,-4,1000,200);
        }
        //
    
    }
     
     
    requestAnimationFrame(animate);
    
}
//

//функции и условия элементов игры

function showToolsList(event) {
 
    if(showTools ==true){
     showTools=false;
     x = x + 100;}
     else showTools = true;
  }

  document.addEventListener("click", printMousePos);
  
  document.addEventListener("click", summonCar);

  //document.addEventListener("click", showToolsList);

function printMousePos(event) {

     console.log(event.clientX,event.clientY);
      
     if(event.clientX>1133&&event.clientY<151)
     showTools = true;
     else showTools = false 
  }  

function summonCar(event) {
     
    if(event.clientX>188&&event.clientY<177&&event.clientX<389)
     showCar= true;

     if(event.clientX>151 && event.clientX<246 && event.clientY>400 && event.clientY<535)
     showWheels = true;

 }  
//    
  
//запуск цикла перерисовки
animate();
//