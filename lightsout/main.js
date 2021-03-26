/*mouse cursor tracking based on code by Matthew Croak
https://levelup.gitconnected.com/use-javascript-to-make-an-element-follow-the-cursor-3872307778b4 */

let light = document.getElementById('spotlight');

const onMouseMove = (e) =>{
  light.style.left = e.pageX + 'px';
  light.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);
document.getElementById("spotlight").addEventListener("click", function() {
});

/*image change function: toggles between images on click*/
function switchToggle() {
        var img = document.getElementById('lightUp').src;
        if (img.indexOf('light1.svg')!=-1) {
            document.getElementById('lightUp').src='./switch-images/light2.svg';
            document.body.style.background= "#002A1E";
        }
         else {
        	document.getElementById('lightUp').src='./switch-images/light1.svg';
        	document.body.style.background= "#A8CCAD";
       }
}

/*button press functions */
function mousedown() {
  var el = document.getElementById("buttonPress");
  el.setAttribute("src", "./switch-images/button2.svg");
}

function resetImage() {
  var el = document.getElementById("buttonPress");
  el.setAttribute("src", "./switch-images/button1.svg");
}


//draggable plug, based on code from here: https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/#:~:text=Introduction%20to%20JavaScript%20Drag%20and,down%20and%20then%20move%20it.



/* draggable element */
const plug = document.querySelector('.plug');

plug.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const outlets = document.querySelectorAll('.outlet');

outlets.forEach(outlets => {
    outlet.addEventListener('dragenter', dragEnter)
    outlet.addEventListener('dragover', dragOver);
    outlet.addEventListener('dragleave', dragLeave);
    outlet.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
    var el = document.getElementById("outlet");
    el.setAttribute("src", "./switch-images/plug3.svg");
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}