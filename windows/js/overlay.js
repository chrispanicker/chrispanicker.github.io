//array to push word form of numbers into page
let questionArray = ['one', 'two', 'three', 'four', 'five'];

let typeOneText = [
'which windows would you prefer to look out from?',//1
'which windows do you like?', //2
'which windows tell you a story?',//3 
'which windows did your eyes draw to first?',//4 
'which windows would not be your first choice?',//5
'which windows would you rather break?', //6
'which windows could you see yourself behind?',//7
'which windows are more repulsive?',//8
'which windows are louder?',//9
'which windows are more attractive?',//10
'which windows are colder?'//11
]

let typeOneConc =[
'you are interested in things that are ', //1
'you see yourself as ', //2
'you enjoy stories that are ', //3
'you are feeling ', //4
'you avoid people that are ', //5
"some say you're chaotic, but really, you're ",//6 
'you think of yourself as',//7
'you get mildly annoyed by things that are',//8
'you are more aware of things that are',//9
'you are attracted to those who are',//10
'you avoid those who are',//11
]

let typeThreeText = [
'which windows best represent you in twenty years?',//1
'which windows make you feel sad?', //2
'which windows make you want to reevaluate your place in society?', //3
'which windows remind you of home?', //4
'which windows are you not likely to see today?',//5
'which windows talk about you behind your back?', //6
"which windows feel like a place you've been before?",//7
'which windows would you stare longingly out of?',//8
'which windows are not your cup of tea?',//9
'which windows tell no lies?',//10
]

let typeThreeConc = [
'you think of the future as ', //1
'you hold on to memories that are ',//2 
'you believe life is ', //3
'you find comfort in things that are ',//4 
'currently, you feel ', //5
'you are afraid that you are ',//6 
'you see the world as ', //7
"you're not lonely, you're",//8
'you are not satisfied by things that are',//9
'you trust people who are',//10

]

let typeFourText = [
'in one word, describe how these windows make you feel.', 
'in one word, how would you describe these windows?',
'in one word, please enter how these windows look to you.',
]

let typeFourConc=[
'you feel ', 
'you are ', 
'you think of yourself as ',
]

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