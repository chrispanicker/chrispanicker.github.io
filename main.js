//panicker



function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){
	//background(0);
	var storyArray = ["https://www.netflix.com/watch/70117312?t=1767", 
	"https://www.netflix.com/watch/80223779?trackId=14170286&t=5446",
	"https://www.netflix.com/watch/81122572?trackId=13752289&t",
	"poop",
	"butt"];
	var i;
	for (i = 0; i < storyArray.length; i++) {
 		text(storyArray[i]);
	}


}