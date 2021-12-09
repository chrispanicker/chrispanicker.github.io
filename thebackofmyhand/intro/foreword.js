window.onload = function(){
	divMove = document.getElementById("main");
	setTimeout(function(){ divMove.classList.remove('offScreen'); }, 1000);
}

function goHome(){
	let poof = document.getElementById('main');
	let smooth = document.getElementById('bkg');
	poof.classList.add('disappear');
	bkg.classList.add('bkgChange');
	setTimeout(function(){window.open("../body/home.html","_self"); }, 4000);
}