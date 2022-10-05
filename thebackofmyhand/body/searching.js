function goHome(){
	let poof = document.getElementById('bkg');
	poof.classList.add('disappear');
	setTimeout(function(){window.open("../body/home.html","_self"); }, 4000);
}

function allDone(){
    let sDone = window.localStorage.getItem('searching');
    let rDone = window.localStorage.getItem('rambling');
    let cDone = window.localStorage.getItem('conversing');
    
    if(sDone=="1" && rDone=="1" && cDone=="1"){
        let poof = document.getElementById('bkg');
        poof.classList.add('disappear');
        poof.classList.add('changeBkgEND');
        setTimeout(function(){window.open("../end/finding.html","_self"); }, 4000);
    } else{
        goHome();
    }
}


window.onload = function(){
    appear = document.getElementById("bkg");
    setTimeout(function(){ appear.classList.remove('disappear'); }, 500);
}