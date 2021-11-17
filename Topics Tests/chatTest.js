document.addEventListener('keydown', okay)
var msg1 ='Hello, I\'m Chris.';
var msg2 ='I\'m from Virginia.';
var msg3 ='Oh I get it, my family is from India';

//incrementing
let wordNumber=-1;
let messageNumber=0;

//array of msg variable strings
var msgArray = [msg1, msg2, msg3];
var msgCharaArray= Array.from(msgArray[messageNumber]);

console.log(msgArray[messageNumber]);

function okay(){
	//if within character count
	if (wordNumber < msgCharaArray.length -1){
		wordNumber = wordNumber+1;
		let chatBox = document.getElementById('chatBox');
		let inputText = document.createElement('p');
		//if there are spaces, include spaces lol

		if (msgCharaArray[wordNumber]== ' '){
			inputText.innerHTML= '&nbsp;';
			chatBox.append(inputText);
			console.log('did i work?')
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



function unknownPerson(){
	unknownNumber++;
	let responses = document.getElementById('responses');
	let unknownReply = document.createElement('p');
	unknownReply.innerHTML='Unknown: ' + unknownArray[unknownNumber];
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




