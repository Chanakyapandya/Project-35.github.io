//Create variables here
var dog, happydog;
var dogImg, happydogImg;
var database;
var foods,foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("Dog.png");
  happydogImg = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();

  createCanvas(500, 500);
  dog = createSprite(200,300,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.3;

 // happydog = createSprite(150,150,50,50);

  foodStock = database.ref('Food');
  foodStock.on('value',readStock);

  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){

writeStock(foods);
dog.addImage(happydogImg);

}


  drawSprites();
  fill("black");
  stroke("red")
  textSize(20);
  text("Press UP arrow key to feed the dog",60,30)



  fill("yellow");
  stroke("red")
  textSize(17);
  text("Food Remaining : "+ foods,100,150);


}


  //add styles here
  function readStock(data){
  

    foods = data.val();
     
     
     
     }
  
  function writeStock(x){
  
  
   if(x<=0){
     x = 0;
   }
  else{
  x = x-1;
  
  }
  
  
  



database.ref("/").update({



Food:x




})

  }















 




