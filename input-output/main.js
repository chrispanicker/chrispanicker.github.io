let h3 = document.createElement('h3');


document.addEventListener('keydown', e => {
	h3.innerHTML=e.key;
	document.querySelector('#type').append(h3);
});

document.addEventListener('ke')