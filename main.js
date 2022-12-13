nosex=0;
nosey=0;
function preload()
{
    clown_nose=loadImage("https://i.postimg.cc/vTDdPWh9/mustache-1.webp")
}

function setup()
{
    canvas=createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log('Posenet Is Initialized');
}

function draw()
{
image(video,0,0,350,350);
image(clown_nose,nosex-10,nosey+10,30,30);
}

function snapshot()
{
    save('tejsri.png')
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
    console.log("Nose x : "+results[0].pose.nose.x);
    console.log("Nose y : "+results[0].pose.nose.y);
}
}