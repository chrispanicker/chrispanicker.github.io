//
var linkArray = ["https://www.netflix.com/watch/70117312?t=1767"//scott pilgrim, 
	"https://www.netflix.com/watch/80223779?trackId=14170286&t=5446"//marriage story,
	"https://www.netflix.com/watch/81122572?trackId=13752289&t"//middleditch & schwartz,
	"https://www.netflix.com/watch/80205227?trackId=14170286&t1600"//lady bird <3]; 

var i = 0;
var timer=0;

function setup (){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	//timer for each shot based on variable linkTime
 	if(i==0){

 	}
	//array index reset
	if (i==3) {
 		i = 0;
 	}
 	fill(255);
 	
 	text(linkArray[i], 10,10);

 	console.log(i);
}

//manual version of the function
function nextButton(){
	window.open(linkArray[i], "_blank", 
		"toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}