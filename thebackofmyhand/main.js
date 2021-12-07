let main = document.getElementById('main');



function start(){
	let start = document.getElementById('div1');
	start.classList.add('disappear');
	setTimeout(function(){start.remove(); page1();}, 4000);
}

function page1(){

	let page1 = document.createElement('div');
	//page1.classList.add('test');
	
	let page1text= document.createElement('p');
	page1text.innerHTML='I see you.'
	
	page1.append(page1text);
	document.getElementById('main').append(page1);
	setTimeout(function(){page1.remove(); page2();}, 4000);
}


function page2(){

	let page2 = document.createElement('div');
	//page2.classList.add('test');
	
	let page2text= document.createElement('p');
	page2text.innerHTML='You look different than I remember?'
	
	page2.append(page2text);
	document.getElementById('main').append(page2);
	setTimeout(function(){page2.remove(); page3();}, 4000);
}

function page3(){
	let page3 = document.createElement('div');
	//page3.classList.add('test');
	
	let page3text= document.createElement('p');
	page3text.innerHTML='Turn your hand around.'
	
	page3.append(page3text);
	document.getElementById('main').append(page3);
	setTimeout(function(){page3.remove(); page4();}, 4000);
}

function page4(){
	let page4 = document.createElement('div');
	let bkg = document.getElementById('bkg');
	bkg.classList.add('fronthand');
	
	let page4text= document.createElement('p');
	page4text.innerHTML='Much Better.'
	
	page4.append(page4text);
	document.getElementById('main').append(page4);
	setTimeout(function(){page4.classList.add('disappear'); page4.remove(); logo();}, 4000);
}

function logo(){
	let logo = document.createElement('div');
	//page3.classList.add('test');
	
	let logotext= document.createElement('p');
	logotext.innerHTML='(LOGO GOES HERE)'
	
	logo.append(logotext);
	document.getElementById('main').append(logo);
	//setTimeout(function(){openHomePage(); }, 4000);
}