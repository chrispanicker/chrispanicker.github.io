const windowArray = [];
const answerArray = [];

var everywindow = document.getElementById('every_window');

//defining choices for question
function questionOne(){
 	let choiceOne = Math.floor(Math.random()*100)
 	let choiceTwo = Math.floor(Math.random()*100)

//if rng causes two of the same number, do it again
 	if (choiceTwo == choiceOne){
 		let choiceTwo = Math.floor(Math.random()*100)
 	}
 	console.log(choiceOne);
 	console.log(choiceTwo);

	if (every_window) {
        // define and create elements
		let parent = document.createElement("div")
		let btn1 = document.createElement("button")
		let btn2 = document.createElement("button")

        // Set innerHTML of the elements
        btn1.innerHTML = choiceOne
        btn2.innerHTML = choiceTwo

        //onclick function
        btn1.addEventListener("click", pushToArray);
        btn2.addEventListener("click", pushToArray);        
        // append them to the parent div
        document.getElementById('every_window').append(parent);
		parent.append(btn1, btn2)
    }
};

function pushToArray(){

}
