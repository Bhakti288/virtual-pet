var dog,sadDog,happyDog;
var addFood,feedFood,foodObj;
var lastFed,fedTime;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  foodObj = new Food (400,200,70,70);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed th dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Addthe button");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
  if(lastFed>=12){
    text("Last Feed:" + lastFed%12 + "PM",350,30);
  }else if(lastFed==0){
    text("Last Feed: 12 AM",350,30);
  }else{
    text("Last Feed:"+ lastFed + "AM",350,30);
  }
}

//function to read food Stock

function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
   foodObj.updateFoodStock(foodObj.getFoodStock()*0);
   } else{
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
    }

    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    database.ref('/').update({
      FeedTime:hour(),
      Food:foodObj.getFoodStocks()
    })
  
}


function addFoods()
{
  foodS++;
  database.ref('/').update({
    Foods:foodS
  })
}