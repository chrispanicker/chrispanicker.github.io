//
var linkArray = ["https://www.netflix.com/watch/80205227?trackId=14170286&t=1780", //lady bird <3 1 min 5 sec 
	"https://www.netflix.com/watch/70117312?t=1291", //scott pilgrim 1:30
	"https://www.netflix.com/watch/81120982?trackId=13752289&t=3119",//i lost my body 1:30
	"https://www.netflix.com/watch/80223779?trackId=14170056&t=10"]; // marriage story 560 sec
 
var i = 0;
var t;
var timer;

function setup (){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	/*a timer for one sec, final will have unique --
	times for each clip. inspired by https://stackoverflow.com/questions/16127115/closing-popup-window-after-3-seconds

 	if (millis() >= 1000+timer) {
    i = i + 1;
    timer = millis(); 
    background(0);
	}*/

	//unique times for each clip, with small padding for buffering
	if(i==0){
		t=61000;
	}

	if(i==1){
		t=90000;
	}

	if(i==2){
		t=90000;
	}

	if(i==3){
		t=560000;
	}

	if (i==4) {
 		i = 0;
 	}
}

//manual version of the function inspired by https://editor.p5js.org/black/sketches/sefca9mkE
function nextButton(){
	var win=window.open(linkArray[i], "_blank", 
		"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=852,height=480");
	setTimeout(function () { win.close();}, t);
 	i = i + 1;
}