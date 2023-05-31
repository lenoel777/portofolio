// greetings
var greetings = document.getElementById("greetings");
var textGreetings = ["Hello", "Hola", "السلام عليكم", "Guten Tag", "您好", "Hi", "こんにちは", "olá", "안녕하세요", "Bonjour"];

var index = 0;
greetings.innerHTML = textGreetings[index];

function animateText() {
  index++;

  if (index >= textGreetings.length) {
    index = 0;
  }

  greetings.style.opacity = 0;

  setTimeout(function(){
    greetings.innerHTML = textGreetings[index];
    greetings.style.opacity = 1;
  }, 500);
};

setInterval(animateText, 3500);

// title
const jumpText = document.querySelector('.jump');

jumpText.addEventListener('mouseover', () => {
  jumpText.classList.add('jump');
});

jumpText.addEventListener('animationend', () => {
  jumpText.classList.remove('jump');
});
