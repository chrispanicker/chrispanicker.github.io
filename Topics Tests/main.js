let main = document.getElementById('main');

let scriptArray= ['what are you',
'who are you',
'who am i?']




function start(){
	let start = document.getElementById('div1');
	start.classList.add('gone');
	setTimeout(function(){start.remove(); page1();}, 2000);
}

function page1(){

	let page1 = document.createElement('div');
	page1.classList.add('test');
	
	let page1text= document.createElement('p');
	page1text.innerHTML='what are you?'
	
	page1.append(page1text);
	document.getElementById('main').append(page1);
	setTimeout(function(){page1.remove(); page2();}, 2000);
}


function page2(){

	let page2 = document.createElement('div');
	page2.classList.add('test');
	
	let page2text= document.createElement('p');
	page2text.innerHTML='who are you?'
	
	page2.append(page2text);
	document.getElementById('main').append(page2);
	setTimeout(function(){page2.remove(); page3();}, 2000);
}

function page3(){
	let page3 = document.createElement('div');
	page3.classList.add('test');
	
	let page3text= document.createElement('p');
	page3text.innerHTML='do you know yourself?'
	
	page3.append(page3text);
	document.getElementById('main').append(page3);
	setTimeout(function(){page3.remove(); nextPage();}, 2000);
}

function nextPage(){
	let nextPDiv = document.createElement('div');
	let nextP = document.createElement('a');
	nextP.classList.add('test');
	nextP.href= './test2.html'
	nextP.innerHTML='onto the next test...';
	nextPDiv.append(nextP);
	document.getElementById('main').append(nextPDiv)
}