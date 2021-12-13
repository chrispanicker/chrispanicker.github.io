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

function goHome(){
	let poof = document.getElementById('paragraph');
	poof.classList.add('disappear');
	poof.classList.add('changeBkg');
	setTimeout(function(){window.open("../body/home.html","_self"); }, 4000);
}