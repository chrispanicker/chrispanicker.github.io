function searching(){
	let poof = document.getElementById('main');
	let smooth = document.getElementById('bkg');
	let move = document.getElementById('div1');
	poof.classList.add('disappear');
	bkg.classList.add('bkgChange1');
	move.classList.add('move');

	setTimeout(function(){window.open("../body/searching.html","_self"); }, 4000);
}

function rambling(){
	let poof = document.getElementById('main');
	let smooth = document.getElementById('bkg');
	let move = document.getElementById('div2');
	poof.classList.add('disappear');
	bkg.classList.add('bkgChange2');
	move.classList.add('move');

	setTimeout(function(){window.open("../body/rambling.html","_self"); }, 4000);
}

function conversing(){
	let poof = document.getElementById('main');
	let smooth = document.getElementById('bkg');
	let move = document.getElementById('div3');
	poof.classList.add('disappear');
	bkg.classList.add('bkgChange3');
	move.classList.add('move');

	setTimeout(function(){window.open("../body/conversing.html","_self"); }, 4000);
}

window.onload = function(){
	divMove = document.getElementById("div1");
	setTimeout(function(){ divMove.classList.remove('offScreen'); }, 1000);
}