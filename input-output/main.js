let ball;
let goal;

window.onload = function(){
    levelOne();
    getAccel();
}



function levelOne(){
    ball=document.createElement('div');
    ball.classList.add('ball');
    document.body.appendChild(ball);
}

function makeGoal(){
    gx = Math.floor(Math.random() * 93)
    gy = Math.floor(Math.random() * 96)
    goal = document.createElement('div');
    goal.classList.add('goal');
    goal.setAttribute('style', "left:" + (gx) + "%;" +
        "top:" + (gy) + "%;");
    document.getElementById('main').append(goal);
                
}

function collideCheck(){
    var goalBounds = goal.getBoundingClientRect();
    gl = goalBounds.left;
    gt = goalBounds.top;
    gr = goalBounds.right;
    gb = goalBounds.bottom;
    
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
    main.innerHTML = ('');
    makeGoal();
}