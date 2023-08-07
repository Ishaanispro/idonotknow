mustachex = 0;
mustachey = 0;
function preload(){
   mustache = loadImage('https://i.postimg.cc/KjmWFk7q/Moustache-PNG-Pic.png'); 
}

function setup(){
    Canvas = createCanvas(300, 300);
    Canvas.center();
    video  = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, mustachex, mustachey, 50, 70);
}

function take_snapshot(){
    save("Gojo.png");
}

function modelLoaded(){
    console.log("poseNet is intialized")
}

function gotPoses(results){
 if(results.length > 0){
    console.log(results);
    mustachex = results[0].pose.nose.x-20;
    mustachey = results[0].pose.nose.y-20;
 }
}


