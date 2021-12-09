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


}