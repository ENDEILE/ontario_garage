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
car_1.src = "car.png";

const background = new Image();
background.src = "garage.png";

const but = new Image();
but.src = "parts2.png";

const createCar = new Image();
createCar.src = "da.png";

const tools = new Image();
tools.src = "parts.png";

//

//состояние изоброжений на экране
var show = false;

var showCar = false;

//отображение ирговых элементов на экране
function animate()
{ctx.imageSmoothingEnabled = false;

    ctx.drawImage(background,0,0,1880,200);

    ctx.drawImage(createCar,192,0,200,30);

    if(showCar) 
       ctx.drawImage(car_1,390,-21,1100,160);

    ctx.drawImage(but,1670,0,200,30);

    if(show)
     ctx.drawImage(tools,0,-4,1000,200);

    requestAnimationFrame(animate);
    
}
//

//функции и условия элементов игры

function showToolsList(event) {
 
    if(show ==true){
     show=false;
     x = x + 100;}
     else show = true;
  }

  document.addEventListener("click", printMousePos);
  
  document.addEventListener("click", summonCar);

  //document.addEventListener("click", showToolsList);

function printMousePos(event) {

     console.log(event.clientX,event.clientY);
      
     if(event.clientX>1133&&event.clientY<151)
     show = true;
     else show = false 
  }  

function summonCar(event) {
     
    if(event.clientX<188&&event.clientY<177)
     showCar= true;
    else showCar = false 
 }  
//    
  
//запуск цикла перерисовки
animate();
//