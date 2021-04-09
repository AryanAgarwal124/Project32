const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var displayTime

var bg ;

var hour;


function preload() {
    getBackgroundImg() 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    {
    background(backgroundImg);
    }


    console.log(bg)

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
         displayTime = "AM";
    }
    else {
         displayTime= "PM";
    }

    
console.log(hour)

    textSize(35);
    text("TIME : "+ hour + displayTime,50,50)
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var response_json = await response.json();
    var datetime = response_json.datetime

    // write code slice the datetime
    hour = datetime.slice(11,13)

  
    // add conditions to change the background images from sunrise to sunset

    if(hour>=4 && hour<=6){
        bg = "sunrise1.png"
    }

    else if(hour>6 && hour<=8){
        bg = "sunrise2.png"
    }

    else if(hour>8 && hour<=10){
        bg = "sunrise3.png"
    }

    else if(hour>10 && hour<=12){
        bg = "sunrise4.png"
    }
    
    else if(hour>12 && hour<=14){
        bg = "sunrise5.png"
    }

    else if(hour>14 && hour<=16){
        bg = "sunrise6.png"
    }

    else if(hour>16 && hour<=18){
        bg = "sunset7.png"
    }

    else if(hour>18 && hour<=20){
        bg = "sunset8.png"
    }

    else if(hour>20 && hour<=22){
        bg = "sunset9.png"
    }

    else if(hour>22 && hour<0){
        bg = "sunset10.png"
    }

    else if(hour>0 && hour<=2){
        bg = "sunset11.png"
    }

    else
    {
        bg = "sunset12.png"
    }



    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg)

}
