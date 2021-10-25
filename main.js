difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(450, 450);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#6C91C2');
    
    document.getElementById("font_side").innerHTML = "Font size of the text will be = " + difference +"px";
    fill('#c374ee');
    stroke('#6e4982');
    textSize(difference);
    text('URJA', 70, 400)
}


function modelLoaded() {
    console.log('PoseNet is initialized');
    }

function gotPoses(results) {
   if(results.length > 0) {
            
    console.log(results); 
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
}
}