const fullArray = [];
const answerArray = [];

var everywindow = document.getElementById('every_window');

//calls questionOne function on load
window.onload = questionOne;

//defining choices for question
function questionOne(){
    let choiceOne = Math.floor(Math.random()*101)
    let choiceTwo = Math.floor(Math.random()*101)
    let answerChoice;

    //if rng causes two of the same number, do it again
 	if (choiceTwo == choiceOne){
        choiceTwo = choiceTwo-1;
        console.log('duplicate!')
 	} 

	if (everywindow) {
        // define and create elements
		let parent = document.createElement("div")
		let btn1 = document.createElement("button")
		let btn2 = document.createElement("button")

 
         //function that turns value into string
        String(choiceOne);
        String(choiceTwo);

        // Set innerHTML of the elements
        btn1.innerHTML = choiceOne
        btn2.innerHTML = choiceTwo

        //click function
        btn1.addEventListener("click", pushToArray1)
        btn2.addEventListener("click", pushToArray2)      


        // append them to the parent div
        document.getElementById('every_window').append(parent);
		parent.append(btn1, btn2)
    
    function pushToArray1(){
        answerArray.push(choiceOne);
        console.log(answerArray);
        }
    function pushToArray2(){
        answerArray.push(choiceTwo);
        console.log(answerArray);
        }
    }
};
