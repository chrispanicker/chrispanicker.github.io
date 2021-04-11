var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3wySYYU0tXKf12'}).base('appwWvc8kL4LpURS5');

let fullArray = [];
let answerArray = [];

base("Table 1").select({maxRecords: 100, view:"Grid view"}).eachPage(gotWindow, gotAllWindows);


//-------------------------------PAGE LOAD---------------------------------------
// callback function that receives our data
function gotWindow(records, fetchNextPage) {
    console.log("got window");
    //push record to the fullArray
    fullArray.push(...records);

    // request more pages
    fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllWindows(err) {
  console.log("got all windows");
  questionOne();
}
//-------------------------------PAGE LOADED---------------------------------------

//defining choices for question
function questionOne(){
    let choiceOne = Math.floor(Math.random()*100)
    let choiceTwo = Math.floor(Math.random()*100)
    let answerChoice;

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
        let question1 = document.createElement("h2")
        let img2 = document.createElement("img")

 
         //function that turns value into string
        String(choiceOne);
        String(choiceTwo);

        // Set innerHTML of the elements
        img1.innerHTML = choiceOne
        question1.innerHTML = "question one:"
        img2.innerHTML = choiceTwo

        //src of images
        console.log("finding image", choiceOne, fullArray[choiceOne].fields.Attachments[0].url)
        console.log("finding image", choiceTwo, fullArray[choiceTwo].fields.Attachments[0].url)
        img1.src= fullArray[choiceOne].fields.Attachments[0].url
        img2.src=fullArray[choiceTwo].fields.Attachments[0].url

        //click event
        img1.addEventListener("click", pushToArray1)
        img2.addEventListener("click", pushToArray2)
        img1.addEventListener("click", questionOne)
        img2.addEventListener("click", questionOne)          


        // append them to the parent div
        document.getElementById('every_window').append(parent1, question1, parent2,);
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