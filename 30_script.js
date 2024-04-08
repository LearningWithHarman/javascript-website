const videoElement = document.querySelector('.container section video');

videoElement.addEventListener('animationend', () => {
  videoElement.classList.add('ended');
});


const section1Element = document.getElementById('ok');

section1Element.addEventListener('animationend', () => {
  section1Element.style.opacity = '1'; // Set opacity back to 1
});


const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkboxes);
checkboxes();
function checkboxes() {
  const tbottom = window.innerHeight / 1 * 4;

  boxes.forEach(box => {
    const boxtop = box.getBoundingClientRect().top;

    if (boxtop < tbottom) {
      box.classList.add('show');
    }
    else {
      box.classList.remove('show');
    }

  })
}

function navbar() {
  document.getElementById('navjar').style.left = '0';
}
function backfire() {
  document.getElementById('navjar').style.left = '-600%';
}
function navbar2() {
  document.getElementById('navter').style.left = '0';
}
function backfire2() {
  document.getElementById('navter').style.left = '-600%';
}
