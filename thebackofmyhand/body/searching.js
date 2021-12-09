function goHome(){
	let poof = document.getElementById('bkg');
	poof.classList.add('disappear');
	setTimeout(function(){window.open("../body/home.html","_self"); }, 4000);
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const test = document.querySelector('.test');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(test) ?}, {
    passive: true
});
*/