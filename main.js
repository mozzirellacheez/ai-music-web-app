music1 ="music1.mp3"
music2 ="music2.mp3"

function setup(){
    video=createCapture(VIDEO);
    video.hide();

    canvas=createCanvas(600,500);
    canvas.center();
}

function draw(){
    image(video,0,0,600,500);
}



function preload(){
    song=loadSound("music1.mp3");
    song=loadSound("music2.mp3");
}

