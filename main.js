leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function draw(){

    background("red");
    textSize(difference);
    fill("white");
    text("red", 125, 250);
    document.getElementById("font_size").innerHTML = "The Font Size Is = " + difference;


}

function modelLoaded(){

    console.log("Model has been loaded.");
    
}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }

}
