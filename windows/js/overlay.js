//array to push word form of numbers into page
let questionArray = ['one', 'two', 'three', 'four', 'five'];
let currentQuestion = answerArray.length;


function questionNumber(){
	console.log("got question number")
	//create elements
	let qst = document.createElement("p")

	// Set innerHTML of the element
	qst.innerHTML = "question " + questionArray[currentQuestion];

	//append to parent
	document.getElementById('question_number').append(qst);
}
