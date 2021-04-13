//array to push word form of numbers into page
let questionArray = ['one', 'two', 'three', 'four', 'five'];

let typeOneText = ['which windows would you prefer to look out from?','which windows do you like?', 
'which windows tell you a story?', 'which windows did your eyes draw to first?', 
'which windows would not be your first choice?','which windows would you rather break?', ]

let typeOneConc =['you are interested in things that are ', 'you see yourself as ', 
'you enjoy stories that are ', 'you are feeling ', 
'you avoid people that are ', "some say you're chaotic, but really, you're ", ]

let typeThreeText = ['which windows best represent you in twenty years?', 
'which windows make you feel sad?', 'which windows make you want to reevaluate your place in society?', 
'which windows remind you of home?', 'which windows are you not likely to see today?',
'which windows talk about you behind your back?', "which windows feel like a place you've been before?"]

let typeThreeConc = ['you think of the future as ', 'you hold on to memories that are ', 
'you believe life is ', 'you find comfort in things that are ', 'currently, you feel ', 'you are afraid that you are ',
'you see the world as ']

let typeFourText = ['in one word, describe how these windows make you feel.', 'in one word, how would you describe these windows?',
'in one word, please enter how these windows look to you.',]

let typeFourConc=['you feel ', 'you are ', 'you think of yourself as ',]

let textNumber;
let textNumberArray = [];
let qst;
let txt;


//inserts respective number for question
function questionNumber(){
	let currentQuestion = answerArray.length;
	console.log("got question number")	
	//create element
	qst = document.createElement("p")
	// Set innerHTML of the element
	qst.innerHTML = "question " + questionArray[currentQuestion] + ":";
	//append to parent
	document.getElementById('question_number').append(qst);
};


function questionText(){
	txt = document.createElement('h2');
	console.log('got question text');

	//rng to choose random question based on type
	if (currentType == 1){
	textNumber = Math.floor(Math.random()*typeOneText.length);
	//getting question from typeOneText
	txt.innerHTML = typeOneText[textNumber];
	}
	if (currentType == 2){
	textNumber = Math.floor(Math.random()*typeOneText.length);
	txt.innerHTML = typeOneText[textNumber];
	}
	if (currentType == 3){
	textNumber = Math.floor(Math.random()*typeThreeText.length);
	txt.innerHTML = typeThreeText[textNumber];
	}
	if (currentType == 4){
	textNumber = Math.floor(Math.random()*typeFourText.length);
	txt.innerHTML = typeFourText[textNumber];
	}

	textNumberArray.push({"type": currentType, "question": textNumber});
	document.getElementById('question').append(txt);
};

function resetQuestion(){
	document.getElementById('question_number').innerHTML = '';
	document.getElementById('question').innerHTML = '';
}