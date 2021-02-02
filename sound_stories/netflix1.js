//
var linkArray = ["https://www.netflix.com/watch/80205227?trackId=14170286&t=1780", //lady bird <3 1 min 5 sec 
	"https://www.netflix.com/watch/70117312?t=1291", //scott pilgrim 1:30
	"https://www.netflix.com/watch/81120982?trackId=13752289&t=3119",//i lost my body 1:30
	"https://www.netflix.com/watch/80223779?trackId=14170056&t=10"]; // marriage story 560 sec

var timeArray = [9000,9000,9000,9000]
var timmy;

var i = 0;
var t;
var timer;
var win;

//manual version of the function inspired by https://editor.p5js.org/black/sketches/sefca9mkE
function nextButton(){


	if(i==0){
		t=61000;}

	if(i==1){
		t=150000;}

	if(i==2){
		t=150000;}

	if(i==3){
		t=560000;}

	if (i==4){
 		i = 0;
 		clearInterval(imbadatthis);
	}

	var win=window.open(linkArray[i], "_blank", "toolbar=no,scrollbars=no,resizable=no,top=500,left=500,width=1280,height=720");

	setTimeout(function () { 
		win.close();
		console.log(i);
	nextButton();
	}, t);

	i=i+1

	// inspired by: https://stackoverflow.com/questions/14132122/open-url-in-new-window-with-javascript
}