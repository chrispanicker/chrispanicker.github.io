var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3wySYYU0tXKf12'}).base('appwWvc8kL4LpURS5');
let typeArray = [questionOne, questionTwo, questionThree, questionFour];
let fullArray = [];
let answerArray = [];

base("Table 1").select({maxRecords: 100, view:"Grid view"}).eachPage(gotWindow, gotAllWindows);


//-------------------------------PAGE LOAD---------------------------------------
// callback function that receives our data
function gotWindow(records, fetchNextPage) {
    console.log("found windows");
    //push record to the fullArray
    fullArray.push(...records);

    // request more pages
    fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllWindows(err) {
  console.log("got all windows");
  questionNumber();
  rngQuestion();
}

//function that randomly chooses a question type:
function rngQuestion(){
    let rngIndex = Math.floor(Math.random()*typeArray.length)
    typeArray[rngIndex]();
    let removeType = typeArray.splice(rngIndex, 1);
  //  console.log(removeType);
}







//-------------------------------question type 1 "two choices"---------------------------------------

//defining choices for question
function questionOne(){

    console.log('questionOne')
    let choiceOne = Math.floor(Math.random()*100)
    let choiceTwo = Math.floor(Math.random()*100)

    //if rng causes two of the same number, do it again
    if (choiceTwo == choiceOne){
        choiceTwo = choiceTwo-1;
        console.log('questionOne:', 'choice duplicate!')
    } 

    if (every_window) {
        // define and create elements
        let parent1 = document.createElement("div")
        let parent2 = document.createElement("div")
        let img1 = document.createElement("img")
        let img2 = document.createElement("img")

 
         //function that turns value into string
        String(choiceOne);
        String(choiceTwo);

        // Set innerHTML of the elements
        img1.innerHTML = choiceOne
        img2.innerHTML = choiceTwo

        //src of images
        console.log("finding image", choiceOne, fullArray[choiceOne].fields.Attachments[0].url)
        console.log("finding image", choiceTwo, fullArray[choiceTwo].fields.Attachments[0].url)
        img1.src= fullArray[choiceOne].fields.Attachments[0].url
        img2.src=fullArray[choiceTwo].fields.Attachments[0].url

        //click event
        img1.addEventListener("click", pushToArray1)
        img2.addEventListener("click", pushToArray2)    


        // append them to the parent div
        document.getElementById('every_window').append(parent1, parent2,);
        parent1.append(img1)
        parent2.append(img2)

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
//-------------------------------question type 2 "three choices"---------------------------------------

function questionTwo(){
    console.log('questionTwo')
    let choiceOne = Math.floor(Math.random()*100)
    let choiceTwo = Math.floor(Math.random()*100)
    let choiceThree = Math.floor(Math.random()*100)

    //if rng causes two of the same number, do it again
    if (choiceTwo == choiceOne) {
        choiceTwo = choiceTwo-1;
        console.log('questionTwo:', 'choice duplicate!')
    } 

    if (choiceThree == choiceTwo) {
        choiceThree = choiceThree-1;
        console.log('questionTwo:', 'choice duplicate!')
    } 

    if (every_window) {
        // define and create elements
        let parent1 = document.createElement("div")
        let parent2 = document.createElement("div")
        let parent3 = document.createElement("div")
        let img1 = document.createElement("img")
        let img2 = document.createElement("img")
        let img3 = document.createElement("img")

 
        //function that turns value into string
        String(choiceOne);
        String(choiceTwo);
        String(choiceThree);

        // Set innerHTML of the elements
        img1.innerHTML = choiceOne
        img2.innerHTML = choiceTwo
        img3.innerHTML = choiceThree

        //src of images
        console.log("finding image", choiceOne, fullArray[choiceOne].fields.Attachments[0].url)
        console.log("finding image", choiceTwo, fullArray[choiceTwo].fields.Attachments[0].url)
        console.log("finding image", choiceThree, fullArray[choiceTwo].fields.Attachments[0].url)

        img1.src= fullArray[choiceOne].fields.Attachments[0].url
        img2.src=fullArray[choiceTwo].fields.Attachments[0].url
        img3.src=fullArray[choiceThree].fields.Attachments[0].url

        //click event
        img1.addEventListener("click", pushToArray1)
        img2.addEventListener("click", pushToArray2)
        img3.addEventListener("click", pushToArray3)    


        // append them to the parent div
        document.getElementById('every_window').append(parent1, parent2,parent3);
        parent1.append(img1)
        parent2.append(img2)
        parent3.append(img3)

    function pushToArray1(){
        answerArray.push(choiceOne);
        console.log(answerArray);
        }
    function pushToArray2(){
        answerArray.push(choiceTwo);
        console.log(answerArray);
        }
    function pushToArray3(){
        answerArray.push(choiceThree);
        console.log(answerArray);
        }
    }
};

//-------------------------------question type 3 "random image"---------------------------------------
//NOT WORKING!!! Values are stacking on click

function questionThree(){
        console.log('questionThree')
    let img1 = document.createElement("img")

var intervalId = window.setInterval(function(){ 
    img1.innerHTML = '';
    img1.id = "imgAnimation"
    let choiceOne = Math.floor(Math.random()*100)

    if (every_window) {
        // define and create elements
        let parent1 = document.createElement("div")

        //function that turns value into string
        String(choiceOne);

        // Set innerHTML of the elements
        img1.innerHTML = choiceOne

        //src of images
        console.log("finding image", choiceOne, fullArray[choiceOne].fields.Attachments[0].url)

        img1.src= fullArray[choiceOne].fields.Attachments[0].url

        //click event
        img1.addEventListener("click", pushToArray1)

        // append them to the parent div
        document.getElementById('every_window').append(parent1);
        parent1.append(img1)

    function pushToArray1(){
        answerArray.push(choiceOne);
        console.log(answerArray);
    }
    }
}, 3000);
};

//-------------------------------question type 4 "click and drag"---------------------------------------
function questionFour(){
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    let img3 = document.createElement("img")
    let img4 = document.createElement("img")
    let img5 = document.createElement("img")    
    let img6 = document.createElement("img")
    console.log('questionFour')
};
