function setup(){
    canvas = createCanvas(400,400);
    canvas.position(560,110);
    
    video = createCapture(VIDEO);
    video.size(550,500)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
 background("limegreen");
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}