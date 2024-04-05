const colorDiv = document.getElementById('box');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const orange = document.getElementById('orange');

red.addEventListener('click', () => {
  colorDiv.style.backgroundColor = 'red';
});
blue.addEventListener('click', () => {
  colorDiv.style.backgroundColor = 'blue'
});
green.addEventListener('click', () => {
  colorDiv.style.backgroundColor = 'green';
});
orange.addEventListener('click', () => {
  colorDiv.style.backgroundColor = 'orange';
  
  });
