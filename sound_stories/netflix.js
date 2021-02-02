//
var linkArray = ["https://www.netflix.com/watch/80205227?trackId=14170286&t=1780", //lady bird <3 1 min 5 sec 
	"https://www.netflix.com/watch/70117312?t=1291", //scott pilgrim 1:30
	"https://www.netflix.com/watch/81120982?trackId=13752289&t=3119",//i lost my body 1:30
	"https://www.netflix.com/watch/80223779?trackId=14170056&t=0"]; // marriage story 560 sec
 


var i = 0;
var timer=0;
var t;

function setup (){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	/*a timer for one sec, final will have unique --
	times for each clip. yep. I did this to myself lol...
 	if (millis() >= 1000+timer) {
    i = i + 1;
    timer = millis(); 
    background(0);
	}*/


	//unique times for each clip, with small padding for buffering
	if(i==0){
		var t=63000
	}

	if(i==1){
		var t=90000
	}

	if(i==2){
		var t=90000
	}

	if(i==3){
		var t=560000
	}
	//array index reset
	if (i==4) {
 		i = 0;
 	}
 	fill(255);

 	console.log(i);
 	console.log(t);
}

//manual version of the function
function nextButton(){
	var win=window.open(linkArray[i], "_blank", 
		"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
	setTimeout(function () { win.close();}, t);

	
}