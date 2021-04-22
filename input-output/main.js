let p1 = document.createElement('p');

document.addEventListener('keydown', e => {
	p1.innerHTML=e.key;
	document.querySelector('#type').append(p1);
});
