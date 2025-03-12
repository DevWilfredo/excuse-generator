import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let word = '';
  let number;
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  for (let i = 0; i < 4; i++) {
    switch (i){
      case 0:
        number = Math.floor(Math.random() * who.length);
        word += who[number];
        break;
      case 1:
        number = Math.floor(Math.random() * action.length);
        word += ' ' + action[number];
        break;
      case 2:
        number = Math.floor(Math.random() * what.length);
        word += ' ' + what[number];
        break;
      case 3:
        number = Math.floor(Math.random() * when.length);
        word += ' ' + when[number];
        break;
      default:
        word += '';
    }
  }
  return word;
  }

  window.onload = function () {
    //write your code here
    let excuse = generateExcuse();
    document.getElementById('excuse').innerHTML += `<h2>${excuse}</h2>`;
  };
