console.log("C: "+window.localStorage.getItem('conversing'));
console.log("R: "+window.localStorage.getItem('rambling'));
console.log("S: "+window.localStorage.getItem('searching'));

function searching(){
	let poof = document.getElementById('main');
	let smooth = document.getElementById('bkg');
	let move = document.getElementById('div1');
	bkg.classList.add('disappear');
	bkg.classList.add('bkgChange1');
	move.classList.add('move');

	setTimeout(function(){window.open("../body/searching.html","_self"); }, 4000);
	window.localStorage.setItem('searching', "1");
}

function rambling(){
	let poof = document.getElementById('main');
	let smooth = document.getElementById('bkg');
	let move = document.getElementById('div2');
	bkg.classList.add('disappear');
	bkg.classList.add('bkgChange2');
	move.classList.add('move');

	setTimeout(function(){window.open("../body/rambling.html","_self"); }, 4000);

	window.localStorage.setItem('rambling', "1");
}

function conversing(){
	let poof = document.getElementById('main');
	let smooth = document.getElementById('bkg');
	let move = document.getElementById('div3');
	bkg.classList.add('disappear');
	bkg.classList.add('bkgChange3');
	move.classList.add('move');

	setTimeout(function(){window.open("../body/conversing.html","_self"); }, 4000);
	window.localStorage.setItem('conversing', "1");
}

window.onload = function(){
	divMove = document.getElementById("div1");
	setTimeout(function(){ divMove.classList.remove('offScreen'); }, 1000);
}

function goBack(){
	let poof = document.getElementById('bkg');
	poof.classList.add('disappear');
	poof.classList.add('changeBkg');
	setTimeout(function(){window.open("../intro/foreword.html","_self"); }, 4000);
}