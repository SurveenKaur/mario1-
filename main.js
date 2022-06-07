

function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_jumpover = loadSound("jump.wav");
	coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
    video=createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');
	poseNet=ml5.poseNet(video,modalLoaded);
	poseNet.on('pose ', gotPoses);
}

function modalLoaded(){
console.log('modalLoaded');
}

function gotPoses(results){
if(results.length>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
}
}

function draw() {
	game();

}






