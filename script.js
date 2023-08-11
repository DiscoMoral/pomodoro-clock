// Accordion
new Accordion('.accordion-container');

// Time buttons
button5 = document.getElementById('5');
button10 = document.getElementById('10');
button15 = document.getElementById('15');
button20 = document.getElementById('20');
button25 = document.getElementById('25');
button30 = document.getElementById('30');


// Control buttons
buttonStart = document.getElementById('startButton');
buttonReset = document.getElementById('resetButton');

// Displays
timerDisplay = document.getElementById('timer');
displayTomatos = document.getElementById('displayTomatos')


// Tomatos quantity
tomatos = 0;
displayTomatos.innerHTML = tomatos;

// Minutes and Seconds
let counterMM1; 
let counterSS1; 
let counterMM2; 
let counterSS2; 

let intervalId;

// Counter logic
function logic(counterMM1, counterMM2,counterSS1, counterSS2, reset) {

  console.log(counterMM1, counterMM2,counterSS1, counterSS2, reset);

    intervalId = setInterval(() => {
    console.log(counterMM1, counterMM2, counterSS1, counterSS2, reset);
    timerDisplay.innerHTML = `${counterMM1}${counterMM2} : ${counterSS1}${counterSS2}`;
    if (counterSS1 > 0 && counterSS2 === 0) {
      counterSS1--;
      counterSS2 = 9;
    } else if (counterMM2 > 0 && counterSS1 === 0 && counterSS2 === 0) {
      counterMM2--;
      counterSS1 = 5;
      counterSS2 = 9;
    } else if(counterMM1 > 0 && counterMM2 === 0 && counterSS1 === 0 && counterSS2 === 0){
      counterMM1--;
      counterMM2 = 9;
      counterSS1 = 5;
      counterSS2 = 9;
    } else if(counterMM1 === 0 && counterMM2 === 0 && counterSS1 === 0 && counterSS2 === 0 && reset === false) {
      clearInterval(intervalId);
      tomatos++;
      displayTomatos.innerHTML = tomatos;
    } else {
      counterSS2 -= 1;
    }
  },1000);
  
}

// Control buttons listener
buttonStart.addEventListener('click', (e) => {
  e.preventDefault(); 
    logic(counterMM1, counterMM2, counterSS1, counterSS2, false);
});

buttonReset.addEventListener('click', (e) => {
  e.preventDefault(); 
  timerDisplay.innerHTML = '00 : 00';
  clearInterval(intervalId);
  tomatos--;
  displayTomatos.innerHTML = tomatos;
});

// Time buttons listener
button5.addEventListener('click', (e) => {
  e.preventDefault();
  counterMM1 = 0;
  counterMM2 = 5;
  counterSS1 = 0;
  counterSS2 = 0;
  timerDisplay.innerHTML = `${counterMM1}${counterMM2} : ${counterSS1}${counterSS2}`;
});

button10.addEventListener('click', (e) => {
  e.preventDefault();
  counterMM1 = 1;
  counterMM2 = 0;
  counterSS1 = 0;
  counterSS2 = 0;
  timerDisplay.innerHTML = `${counterMM1}${counterMM2} : ${counterSS1}${counterSS2}`;
});

button15.addEventListener('click', (e) => {
  e.preventDefault();
  counterMM1 = 1;
  counterMM2 = 5;
  counterSS1 = 0;
  counterSS2 = 0;
  timerDisplay.innerHTML = `${counterMM1}${counterMM2} : ${counterSS1}${counterSS2}`;
});

button20.addEventListener('click', (e) => {
  e.preventDefault();
  counterMM1 = 2;
  counterMM2 = 0;
  counterSS1 = 0;
  counterSS2 = 0;
  timerDisplay.innerHTML = `${counterMM1}${counterMM2} : ${counterSS1}${counterSS2}`;
});

button25.addEventListener('click', (e) => {
  e.preventDefault();
  counterMM1 = 2;
  counterMM2 = 5;
  counterSS1 = 0;
  counterSS2 = 0;
  timerDisplay.innerHTML = `${counterMM1}${counterMM2} : ${counterSS1}${counterSS2}`;
});

button30.addEventListener('click', (e) => {
  e.preventDefault();
  counterMM1 = 3;
  counterMM2 = 0;
  counterSS1 = 0;
  counterSS2 = 0;
  timerDisplay.innerHTML = `${counterMM1}${counterMM2} : ${counterSS1}${counterSS2}`;
});