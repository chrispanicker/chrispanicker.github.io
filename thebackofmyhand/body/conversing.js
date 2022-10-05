window.onload= function(){
	let para = document.getElementById('main');
   setTimeout(function(){ main.classList.remove('disappear'); }, 500);

}


function allDone(){
	let sDone = window.localStorage.getItem('searching');
	let rDone = window.localStorage.getItem('rambling');
	let cDone = window.localStorage.getItem('conversing');
	
	if(sDone=="1" && rDone=="1" && cDone=="1"){
		let poof = document.getElementById('main');
		poof.classList.add('disappear');
		poof.classList.add('changeBkgEND');
		setTimeout(function(){window.open("../end/finding.html","_self"); }, 4000);
	} else{
		goHome();
	}
}

function goHome(){
	let poof = document.getElementById('main');
	poof.classList.add('disappear');
	poof.classList.add('changeBkg');
	setTimeout(function(){window.open("../body/home.html","_self"); }, 4000);
}

document.addEventListener('keydown', okay);
document.addEventListener('keyup', function(event){
	if(event.keyCode===13){
		event.preventDefault();
		if(messageNumber!==2){
				send();		
		}
	}
})

var msg1 ='Hello, I\'m Chris.';
var msg2 ='I\'m from Virginia.';
var msg3 ='Oh I get it, my family is from India.';

//incrementing
let wordNumber=-1;
let messageNumber=0;

//array of msg variable strings
var msgArray = [msg1, msg2, msg3];
var msgCharaArray= Array.from(msgArray[messageNumber]);


function okay(){
	let chatBox = document.getElementById('chatBox');		
	let inputText = document.createElement('p');
	//if div is not empty, empty that shit
	if(chatBox.innerHTML=="Type a Response..."){
		chatBox.innerHTML=" ";
	}

	//if this is the third message, change button...
	if(messageNumber==2){
			let poemButton = document.createElement('button');
			poemButton.onclick = function(){poem1();};
			poemButton.innerHTML = 'Wait.'
			chatBox.append(poemButton);	
			msgCharaArray=[" "];

			unknownCrazy();
	}else{
	//if within character count
	if (wordNumber < msgCharaArray.length -1){
		wordNumber = wordNumber+1;

		//if there are spaces, include spaces lol
		if (msgCharaArray[wordNumber]== ' '){
			inputText.innerHTML= '&nbsp;';
			chatBox.append(inputText);
		} else {
		//else use character from the message
		inputText.innerHTML= msgCharaArray[wordNumber];
		chatBox.append(inputText);
		}	

	}else{
		wordNumber= wordNumber+1
		if (wordNumber > msgCharaArray.length && wordNumber < msgCharaArray.length+2){
			let sendButton = document.createElement('button');
			sendButton.onclick = function(){send()};
			sendButton.innerHTML = 'Send'
			chatBox.append(sendButton);	
		}
	}
	//when all text has a appeared from string...
	}
}

function send(){

	let chatBox = document.getElementById('chatBox');
	let responses = document.getElementById('responses');
	chatBox.innerHTML = '';

	
	let yourReply = document.createElement('p');
	yourReply.innerHTML='You: ' + msgArray[messageNumber];
	yourReply.classList.add('you');
	responses.append(yourReply);
	wordNumber = -1;
	messageNumber = messageNumber+1;
	msgCharaArray= Array.from(msgArray[messageNumber]);


	setTimeout(function() { unknownPerson(); }, 1000);
  	typing();
 	setTimeout(function(){ doneTyping(); }, 1000);  

}


let unknownMsg1 = "Hi Chris, where are you from?"
let unknownMsg2 = "No, I meant like where are you really from?"
let unknownArray = [unknownMsg1, unknownMsg2];
let unknownNumber = -1;

let whereArray=["No, I meant like where are you really from?", "Like originally?", "Where is your family from?", "Where were you born?", "Where does your last name come from?", "Where are you actually from?"];

function unknownPerson(){
	unknownNumber++;
	let responses = document.getElementById('responses');
	let unknownReply = document.createElement('p');

	unknownReply.innerHTML='Unknown: ' + unknownArray[unknownNumber];
	unknownReply.classList.add('unknown');
	responses.append(unknownReply);
}

function unknownCrazy(){
	let responses = document.getElementById('responses');
	let unknownReply = document.createElement('p');

	unknownReply.innerHTML='Unknown: ' + whereArray[Math.floor(Math.random() * 6)];
	unknownReply.classList.add('unknown');
	responses.append(unknownReply);
}

function typing(){
  let t1= document.createElement('p');
  t1.classList.add('unknown');
  t1.id='typing';
  const node = document.createTextNode('Unknown is typing...');
  t1.appendChild(node);
  const sendToChat = document.getElementById('responses');
  sendToChat.appendChild(t1);
}


//function that removes "typing()" when time is up
function doneTyping(){
  let r1 = document.getElementById('typing');
  r1.remove();
}


function poem1(){
	const resetResp = document.getElementById('responses');
 	const resetChat = document.getElementById('chatBox');
  let reset = document.getElementById('main');
  reset.classList.add('disappear');
 	setTimeout(function() {
 		resetResp.innerHTML=" ";
 		resetChat.innerHTML=" ";
 		resetResp.classList.add('centerPoem');
 	}, 2000); 

  setTimeout(function() {
  	reset.classList.remove('disappear') 
		let poemText1 = document.createElement('p');
		let poemText2 = document.createElement('p');
		let poemText3 = document.createElement('p');
		let poemText4 = document.createElement('p');
		let nextButton = document.createElement('button');
		nextButton.onclick = function(){part2();}
		nextButton.innerHTML = "&rarr;";
		poemText1.classList.add("poemText", "disappear");
		poemText2.classList.add("poemText", "disappear");
		poemText3.classList.add("poemText", "disappear");
		poemText4.classList.add("poemText", "disappear");
		nextButton.classList.add("disappear","forward");

		let poemArray = ["What does it matter? ", "Why should you share? ", "Is it where you are or where you’re going? ", "Are either of those who you are? ", ]
		poemText1.append(poemArray[0]);
		poemText2.append(poemArray[1]);
		poemText3.append(poemArray[2]);
		poemText4.append(poemArray[3]);



		setTimeout(function(){ poemText1.classList.remove("disappear");}, 2000);
		setTimeout(function(){ poemText2.classList.remove("disappear");}, 4000);  
		setTimeout(function(){ poemText3.classList.remove("disappear");}, 6000);  
		setTimeout(function(){ poemText4.classList.remove("disappear");}, 8000);
		setTimeout(function(){ nextButton.classList.remove("disappear");}, 10000);        
		resetResp.append(poemText1, poemText2, poemText3, poemText4);
		resetChat.append(nextButton);
	}, 2000);


}


function part2(){
	const resetResp = document.getElementById('responses');
 	const resetChat = document.getElementById('chatBox');
  let reset = document.getElementById('main');
  reset.classList.add('disappear');
 	setTimeout(function() {
 		resetResp.innerHTML=" ";
 		resetChat.innerHTML=" ";
 	}, 2000); 

 	setTimeout(function() {
  	reset.classList.remove('disappear') 
		let poemText1 = document.createElement('p');
		let poemText2 = document.createElement('p');
		let poemText3 = document.createElement('p');
		let poemText4 = document.createElement('p');
		let nextButton = document.createElement('button');
		nextButton.onclick = function(){allDone();}
		nextButton.innerHTML = "&rarr;";
		poemText1.classList.add("poemText", "disappear");
		poemText2.classList.add("poemText", "disappear");
		poemText3.classList.add("poemText", "disappear");
		poemText4.classList.add("poemText", "disappear");
		nextButton.classList.add("disappear", "forward");

		let poemArray = ["I know it feels sometimes like a jacket that just won’t unzip. ", "This is more than a stubborn zipper. ", "But don’t feel like you need to take this layer off. ", "Its a cold world. " ]
		poemText1.append(poemArray[0]);
		poemText2.append(poemArray[1]);
		poemText3.append(poemArray[2]);
		poemText4.append(poemArray[3]);



		setTimeout(function(){ poemText1.classList.remove("disappear");}, 2000);
		setTimeout(function(){ poemText2.classList.remove("disappear");}, 4000);  
		setTimeout(function(){ poemText3.classList.remove("disappear");}, 6000);  
		setTimeout(function(){ poemText4.classList.remove("disappear");}, 8000);
		setTimeout(function(){ nextButton.classList.remove("disappear");}, 10000);        
		resetResp.append(poemText1, poemText2, poemText3, poemText4);
		resetChat.append(nextButton);
	}, 2000);
}

/*function part3(){
	const resetResp = document.getElementById('responses');
 	const resetChat = document.getElementById('chatBox');
  let reset = document.getElementById('main');
  reset.classList.add('disappear');
 	setTimeout(function() {
 		resetResp.innerHTML=" ";
 		resetChat.innerHTML=" ";
 	}, 2000); 

 	setTimeout(function() {
  	reset.classList.remove('disappear') 
		let poemText1 = document.createElement('p');
		let poemText2 = document.createElement('p');
		let poemText3 = document.createElement('p');
		let poemText4 = document.createElement('p');
		let nextButton = document.createElement('button');
		nextButton.onclick = function(){part3();}
		nextButton.innerHTML = "Next";
		poemText1.classList.add("poemText", "disappear");
		poemText2.classList.add("poemText", "disappear");
		poemText3.classList.add("poemText", "disappear");
		poemText4.classList.add("poemText", "disappear");
		nextButton.classList.add("disappear");

		let poemArray = ["I know their breath feels warm, but don’t let them smoke you out.", "I remember when I first felt like I needed to take my coat off to make room for two.", "But Layers, patterns, colors, they will always speak for themselves.","You don’t have to say anything, and people will hear what they want." ]
		poemText1.append(poemArray[0]);
		poemText2.append(poemArray[1]);
		poemText3.append(poemArray[2]);
		poemText4.append(poemArray[3]);

		setTimeout(function(){ poemText1.classList.remove("disappear");}, 2000);
		setTimeout(function(){ poemText2.classList.remove("disappear");}, 4000);  
		setTimeout(function(){ poemText3.classList.remove("disappear");}, 6000);  
		setTimeout(function(){ poemText4.classList.remove("disappear");}, 8000);
		setTimeout(function(){ nextButton.classList.remove("disappear");}, 10000);        
		resetResp.append(poemText1, poemText2, poemText3, poemText4);
		resetChat.append(nextButton);
	}, 2000);
}
*/


