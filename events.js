const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const bodies = document.getElementsByTagName('body');
const body = bodies[0];

let intervalId = undefined;

function changeColor() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`;
  }, 1000)
}

function stopColorChange() {
  clearInterval(intervalId)
}

// btn.onclick = function () {}
startBtn.addEventListener('click', changeColor)
stopBtn.addEventListener('click', stopColorChange)

const colorInput = document.getElementById('color-picker');

colorInput.addEventListener('change', function () {
  body.style.backgroundColor = colorInput.value;
})


const div = document.getElementById('toggle-color');
const toggleBtn = document.getElementById('show-toggle');

function toggleInput() {
  if (div.classList.contains('show')) {
    div.classList.replace('show', 'hide')
  } else {
    div.classList.replace('hide', 'show')
  }
}

toggleBtn.addEventListener('click', toggleInput);