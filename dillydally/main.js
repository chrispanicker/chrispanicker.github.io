let ball;
let goal;
let themeArray=['cheesy', 'icey', 'strawberry'];
let x = 0;
let gpa= document.getElementById('grandpa');
let count=0;

window.onload = function(){
    levelOne();
}

function levelOne(){
    play=document.createElement('div');
    play.classList.add('play');
    document.getElementById('main').append(play);

    bkg=document.createElement('div');
    bkg.classList.add('bkg');
    bkg.id=('bkg')
    play.append(bkg);

    ball=document.createElement('div');
    ball.classList.add('ball');
    document.body.appendChild(ball);
}

function makeGoal(){
    console.log(count);
    goal = document.createElement('div');
    goal.classList.add('goal');
    goal.classList.add('vanish');
    
    count=count+1;
    if (count>50){
        goal.classList.add("animated");
        ball.classList.add('animated');
    }

    goalB = document.getElementById('bkg');
    var goalBounds = goalB.getBoundingClientRect();
    goall = goalBounds.left;
    goalt = goalBounds.top;
    goalr = goalBounds.right -40;
    goalb = goalBounds.bottom -40;

    gx = Math.random() * (goalr - goall) + goall;
    gy = Math.random() * (goalb - goalt) + goalt;

    goal.setAttribute('style', "left:" + (gx) + "px;" +
        "top:" + (gy) + "px;");
    document.getElementById('goalDiv').append(goal);
    
    setTimeout(function(){
        goal.classList.remove("vanish");
    },500);              
}

function collideCheck(){
    var goalBounds = goal.getBoundingClientRect();
    gl = goalBounds.left;
    gt = goalBounds.top;
    gr = goalBounds.right;
    gb = goalBounds.bottom;
    
    console.log(gl, gt, gr, gb)
    var ballBounds = ball.getBoundingClientRect();
    bl = ballBounds.left;
    bt = ballBounds.top;
    br = ballBounds.right;
    bb = ballBounds.bottom;
    
    var overlap = !(gr < bl || 
    gl > br || 
    gb < bt || 
    gt > bb);
    
    console.log(overlap);
    if (overlap==true){
        collision();
    }
}

function collision(){
    goal.classList.add("vanish");
    setTimeout(function(){
        document.getElementById('goalDiv').innerHTML = ('');
        makeGoal();
        colorChange();
    },100);

}

function colorChange(){
    x=x+1;
    console.log(x);
    if (x===3){
        x=1;
    }
    console.log(themeArray[x])
    
    if (gpa.classList.contains('secret') || gpa.classList.contains('secret2')){
        }else{
        gpa.className= '';
        gpa.classList.add(themeArray[x]); 
        }
    }

function shhh(){
    if (gpa.classList.contains('secret')){
        gpa.className= '';
        gpa.classList.add(themeArray[x]); 
    }else{
        gpa.className= '';
        gpa.classList.add('secret'); 
    }
}

function shhh2(){
    if (gpa.classList.contains('secret2')){
        gpa.className= '';
        gpa.classList.add(themeArray[x]); 
    }else{
        gpa.className= '';
        gpa.classList.add('secret2'); 
}
}

