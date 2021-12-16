window.onload = function(){
	divMove = document.getElementById("main");
	setTimeout(function(){ divMove.classList.remove('offScreen'); }, 1000);
}

function restart(){
	let poof = document.getElementById('main');
	let smooth = document.getElementById('bkg');
	poof.classList.add('disappear');
	bkg.classList.add('bkgChange');
	setTimeout(function(){window.open("../index.html","_self"); }, 4000);
}


const [red, green, blue] = [255, 225, 189]
const section1 = document.getElementById('bkg');

window.addEventListener('scroll', () => {
	const section1 = document.getElementById('bkg');
  const x = 1 + (window.scrollX || window.pageXOffset) / 1500
  let [r, g, b] = [red/x+20, green/x, blue/x].map(Math.round);
  if(r<79){
  	r=79;
  }

  if(g<50){
  	g=50;
  }

  if(b<31){
  	b=31;
  }

  section1.style.backgroundColor = 'rgb(' + r + "," + g + ", " + b + ")";
})