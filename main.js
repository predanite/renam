noseX =0
noseY =0
difference=0
rightWristX=0
leftWristX=0
function preload() {
    img= loadImage("the text.jpg")
}
function setup(){
    canvas=createCanvas(200,200)
    canvas.position(300,300)

    video=createCapture(VIDEO)
    video.size(300,300)
    
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPosses)
}
function draw(){
    image(img,noseX,noseY,difference,difference)
}

function modelLoaded(){
   console.log ("model is loaded")
}
function gotPosses(results){
if(results.length>0){
console.log(results)
noseX=results[0].pose.nose.X
noseY=results[0].pose.nose.Y
leftWristX=results[0].pose.leftWrist.X
rightWristX=results[0].pose.rightWrist.X
difference=leftWristX-rightWristX
}
}