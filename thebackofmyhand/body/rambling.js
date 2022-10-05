window.onload= function(){
	let para = document.getElementById('paragraph');
	let cursor = document.createElement('div');
	cursor.classList.add('cursor');

	const onMouseMove = (e) =>{
  	cursor.style.left = e.pageX + 'px';
  	cursor.style.top = e.pageY + 'px';

  	para.append(cursor);
	}


	document.addEventListener('mousemove', onMouseMove);

	appear = document.getElementById("paragraph");
    setTimeout(function(){ appear.classList.remove('disappear'); }, 500);

}


function allDone(){
	let sDone = window.localStorage.getItem('searching');
	let rDone = window.localStorage.getItem('rambling');
	let cDone = window.localStorage.getItem('conversing');
	
	if(sDone=="1" && rDone=="1" && cDone=="1"){
		let poof = document.getElementById('paragraph');
		poof.classList.add('disappear');
		poof.classList.add('changeBkgEND');
		setTimeout(function(){window.open("../end/finding.html","_self"); }, 4000);
	} else{
		goHome();
	}
}


function goHome(){
	let poof = document.getElementById('paragraph');
	poof.classList.add('disappear');
	poof.classList.add('changeBkg');
	setTimeout(function(){window.open("../body/home.html","_self"); }, 4000);
}