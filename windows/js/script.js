var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3wySYYU0tXKf12'}).base('appwWvc8kL4LpURS5');
let typeArray = [questionOne, questionTwo, questionThree,];
let fullArray = [];
let answerArray = [];
let currentType = 0;

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
  intro();
}



//function that randomly chooses a question type:
function rngQuestion(){
    if (answerArray.length == 5){
        conclusion();
        return;
    }
    let rngIndex = Math.floor(Math.random()*typeArray.length)
    typeArray[rngIndex]();
    //showQuestionIcon();
    title.classList.add('smaller')
    questionNumber(); //See overlay.js
    questionText();
    dontDoIt();
}
//creates a div that blocks you from clicking something while animation is playing
function dontDoIt(){
    let pleaseDont = document.createElement('div');
    pleaseDont.classList.add('pleaseDont')
    document.getElementById('every_window').append(pleaseDont);

    setTimeout(function(){ 
        pleaseDont.remove(); 
    }, 700);
}

function dontDoItConc(){
    let pleaseDont = document.createElement('div');
    pleaseDont.classList.add('pleaseDont')
    document.getElementById('every_window').append(pleaseDont);

    setTimeout(function(){ 
        pleaseDont.remove(); 
    }, 3000);
}

//loads next page
function nextP(){
    setTimeout(function(){
        document.getElementById('every_window').classList.remove('fadeOut');
        document.getElementById('question').classList.remove('fadeOut');
        document.getElementById('question_number').classList.remove('fadeOut');
        document.getElementById('every_window').innerHTML=''; 
        resetQuestion();
        rngQuestion();
        console.log('yup'); 
    }, 700);
       
    }
//-------------------------MOBILE-------------------------------------------------------
/*function showQuestionIcon(x) {

    let qIcon = document.createElement('h4');
    qIcon.innerHTML = '?'
    qIcon.addEventListener('click', qHide)
    qIcon.classList.add('qIcon')
    document.getElementById('title').append(qIcon);

}

function qHide(){
    console.log("clicked!")
    let qText = document.getElementById('question');
    
    if (qText.classList.contains('hidden')== true){
        qText.classList.add('show');
        qText.classList.remove('hidden')
    }
    if (qText.classList.contains('show')== true){
        qText.classList.add('hidden');
        qText.classList.remove('show')
    }
}*/

//----------------------INTRO--------------------------------------------
function intro(){
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let end = document.createElement('p')
    let title = document.createElement('h3')
    let parent1= document.createElement('div')
    let parent2= document.createElement('div')
    let parent3= document.createElement('div')
    let parent4= document.createElement('div')
    let gp = document.createElement('div')
    gp.classList.add('gp')
    title.classList.add('title')
    p1.innerHTML = "what do you see when you look at a window?"
    p2.innerHTML = "do you see the sky?"
    p3.innerHTML = "or do you see yourself?"
    end.innerHTML = 'start'
    title.innerHTML = "rorschach's windows"
    parent1.classList.add('parent')
    parent2.classList.add('parent')
    parent3.classList.add('parent')
    parent4.classList.add('parent')
    end.classList.add('end')
    end.addEventListener('click', start);
    title.addEventListener("click", home)
    document.getElementById('every_window').append(gp);
    document.getElementById('title').append(title);

    gp.append(parent1, parent2, parent3, parent4,);  
    parent1.append(p1);
    parent2.append(p2);
    parent3.append(p3);
    parent4.append(end);

    function start(){
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        nextP();
    }

}

//-------------------------------question type 1 "two choices"---------------------------------------

//defining choices for question
function questionOne(){
    currentType = 1;
    console.log('Question Type 1')
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
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        nextP();
        }
    function pushToArray2(){
        answerArray.push(choiceTwo);
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        nextP();
        }
    }
};
//-------------------------------question type 2 "three choices"---------------------------------------

function questionTwo(){
    currentType = 2;
    console.log('Question Type 2')
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
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        nextP();
        }
    function pushToArray2(){
        answerArray.push(choiceTwo);
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        nextP();
        }
    function pushToArray3(){
        answerArray.push(choiceThree);
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        nextP();
                }
    }
};

//-------------------------------question type 3 "random image"---------------------------------------

function questionThree(){
    document.getElementById("question_number").classList.add('questionThree')
    document.getElementById("question_number").classList.add('questionThree')
    currentType = 3;
    console.log('Question Type 3')
    let choiceOne;
    let img1 = document.createElement("img")
    let parent1 = document.createElement("div")

//creating a 3 second interval to generate new images
q3();
var intervalId = window.setInterval(q3, 2000); //end of interval

function q3(){
    parent1.remove(img1);
    img1.removeEventListener("click", pushToArray1);
    img1.id = "imgAnimation"
    choiceOne = Math.floor(Math.random()*100);

    if (every_window) {
        // define and create elements

        //function that turns value into string
        String(choiceOne);

        // Set innerHTML of the elements
        img1.innerHTML = choiceOne;

        //src of images
        console.log("finding image", choiceOne, fullArray[choiceOne].fields.Attachments[0].url);
        img1.src= fullArray[choiceOne].fields.Attachments[0].url;

        //click event
        img1.addEventListener("click", pushToArray1);

        // append them to the parent div
        document.getElementById('every_window').append(parent1);
        parent1.append(img1);
    
    }
}
    function pushToArray1(){
        answerArray.push(choiceOne);
        clearInterval(intervalId);   
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        nextP();
        }
};

//-------------------------------question type 4 "input"---------------------------------------
function questionFour(){
    currentType = 4;
    console.log('Question Type 4')
    let choiceOne = Math.floor(Math.random()*100);
    let img1 = document.createElement("img");
    let form = document.createElement('form');
    let inp = document.createElement("INPUT");
    let sub = document.createElement("button");
    inp.setAttribute("type", "text");
    inp.setAttribute("placeholder", "test!");
    sub.setAttribute("type", 'button');
    sub.innerHTML = "submit"
    inp.id = "yourText";
    //onclick run getInput() function
    sub.addEventListener('click', getInput);

    img1.innerHTML = choiceOne;
    img1.src=fullArray[choiceOne].fields.Attachments[0].url;

    // append them to the parent div
    document.getElementById('every_window').append(img1, inp, sub);

    function getInput(){
        let yourText = document.getElementById('yourText').value;
        answerArray.push(yourText);
        resetQuestion();
        rngQuestion();
    }

    function pushToArray1(){
        answerArray.push(choiceOne);
        document.getElementById('every_window').innerHTML = '';
        resetQuestion();
        rngQuestion();
    }
};
//-------------------------------CONCLUSION---------------------------------------
function conclusion(){
    //need to associate answers from answerArray with questions
    dontDoItConc();
    console.clear();
    console.log(textNumberArray);
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    let p5 = document.createElement('p')
    let q1 = document.createElement('p')
    let q2 = document.createElement('p')
    let q3 = document.createElement('p')
    let q4 = document.createElement('p')
    let q5 = document.createElement('p')
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    let img3 = document.createElement("img")
    let img4 = document.createElement("img")
    let img5 = document.createElement("img")
    let parent1 = document.createElement('div')
    let parent2 = document.createElement('div')
    let parent3 = document.createElement('div')
    let parent4 = document.createElement('div')
    let parent5 = document.createElement('div')
    let parent6 = document.createElement('div')
    let gp = document.createElement('div')
    let end = document.createElement('p')
    let space = ''
        gp.classList.add('gp')
    parent1.classList.add('parent')
    parent2.classList.add('parent')
    parent3.classList.add('parent')
    parent4.classList.add('parent')
    parent5.classList.add('parent')
    parent6.classList.add('parent')

    p1.classList.add('conc')
    p2.classList.add('conc')
    p3.classList.add('conc')
    p4.classList.add('conc')
    p5.classList.add('conc')
    img1.classList.add('concImg')
    img2.classList.add('concImg')
    img3.classList.add('concImg')
    img4.classList.add('concImg')
    img5.classList.add('concImg')
    end.classList.add('end')
    let i;
    let conc=[];
    let conc1;

    //FOR LOOPS THAT DETERMINE WHAT QUESTION WAS ASKED
    for (i=0; i<textNumberArray.length; i++){
        if(textNumberArray[i].type==1){
            conc.push(typeOneConc[textNumberArray[i].question])
        }
        if(textNumberArray[i].type==2){
            conc.push(typeOneConc[textNumberArray[i].question])
        }                                
        if(textNumberArray[i].type==3){
            conc.push(typeThreeConc[textNumberArray[i].question])
        } 
        if(textNumberArray[i].type==4){
            conc.push(typeFourConc[textNumberArray[i].question])
        }     
    }
    console.log(conc);
    //CONCLUSIONS TO BE MADE BY QUESTIONS
    q1.innerHTML = conc[0];
    q2.innerHTML = conc[1];
    q3.innerHTML = conc[2];
    q4.innerHTML = conc[3];
    q5.innerHTML = conc[4];
    //ANSWERS PER QUESTION
    p1.innerHTML=(fullArray[answerArray[0]].fields.Feeling);
    p2.innerHTML=(fullArray[answerArray[1]].fields.Feeling);
    p3.innerHTML=(fullArray[answerArray[2]].fields.Feeling);
    p4.innerHTML=(fullArray[answerArray[3]].fields.Feeling);
    p5.innerHTML=(fullArray[answerArray[4]].fields.Feeling); 
    //IMGS FOR HOVER INT
    img1.src= fullArray[answerArray[0]].fields.Attachments[0].url
    img2.src=fullArray[answerArray[1]].fields.Attachments[0].url
    img3.src=fullArray[answerArray[2]].fields.Attachments[0].url  
    img4.src=fullArray[answerArray[3]].fields.Attachments[0].url
    img5.src=fullArray[answerArray[4]].fields.Attachments[0].url      
    end.innerHTML="next"; 

    end.addEventListener('click', lastP);
    document.getElementById('every_window').append(gp);  
    gp.append(parent1, parent2, parent3, parent4, parent5, parent6);
    parent1.append(q1,'\xa0', p1, ".",img1);
    parent2.append(q2,'\xa0', p2,".",img2);
    parent3.append(q3,"\xa0", p3,".",img3);
    parent4.append(q4,"\xa0", p4,".",img4);
    parent5.append(q5,"\xa0", p5,".",img5);
    parent6.append(end);

    function lastP(){
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        setTimeout(function(){
            document.getElementById('every_window').classList.remove('fadeOut');
            document.getElementById('question').classList.remove('fadeOut');
            document.getElementById('question_number').classList.remove('fadeOut');
            document.getElementById('every_window').innerHTML=''; 
            final();
    }, 700);
    }
}
//----------------------FINAL--------------------------------------------
function final(){
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let end = document.createElement('p')
    let parent1= document.createElement('div')
    let parent2= document.createElement('div')
    let parent3= document.createElement('div')
    let parent4= document.createElement('div')
    let gp = document.createElement('div')
    gp.classList.add('gp')
    p1.innerHTML = "but of course, this is all just conjecture."
    p2.innerHTML = "a distortion of your reality"
    p3.innerHTML = "like a reflection from a window pane."
    end.innerHTML = 'end'

    parent1.classList.add('parent')
    parent2.classList.add('parent')
    parent3.classList.add('parent')
    parent4.classList.add('parent')
    end.classList.add('end')
    end.addEventListener('click', ending);
    document.getElementById('every_window').append(gp);
    gp.append(parent1, parent2, parent3, parent4,);  
    parent1.append(p1);
    parent2.append(p2);
    parent3.append(p3);
    parent4.append(end);

    function ending(){
        document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
        home();
    }
}
function home(){
            document.getElementById('every_window').classList.add('fadeOut');
        document.getElementById('question').classList.add('fadeOut');
        document.getElementById('question_number').classList.add('fadeOut');
    setTimeout(function(){
        location.reload();
    }, 700)
}