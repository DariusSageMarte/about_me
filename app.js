'use strict';

var birthQ = '';

function greeting() {
  alert('Hello');
  var userInput = prompt('What\'s your name');
  alert('Hi, ' + userInput);
  alert('My name is Damon');
  alert('I was designed by Darius Marte');
  var knowMe = prompt(userInput + ',' + ' do you know him ?');
  console.log(userInput);
  console.log(birthQ);
  if (knowMe.toUpperCase() === 'YES' || knowMe.toUpperCase() === 'Y') {
    birthQ = prompt('I see... well do you know his birthday ?');
  }
  else {
    birthQ = 'NO';
  }
}

greeting();

function secondQuestion() {
  if (birthQ.toUpperCase() === 'NO' || birthQ.toUpperCase() === 'N') {
    alert('I thought not');
  }
  else if (birthQ.toUpperCase() === 'YES' || birthQ.toUpperCase() === 'Y') {
    var birthGuess = prompt('when is it ?', '528 or 628');
    if (birthGuess === '528') { console.log(birthGuess);
      alert('Correct!');
    }
    else {
      alert('Not Valid, You must mean No');
      
    }
  }
}

secondQuestion();

function questionThird() {
  alert('since you\'re a friend of Darius, he\'d like me to ask');
  var howBout = prompt('Are you OK ?', 'YES or NO');
  if (howBout.toUpperCase() === 'YES' || howBout.toUpperCase() === 'Y') {
    console.log(howBout.toUpperCase());
    alert('I\'m happy to hear that ! ');
  }
  else {
    alert( howBout +' ? ' + ' Everything\'s going to be alright !');
  }

  var NumGues = prompt('Can you guess what number Darius is thinking of, pick 1 through 6, you have 4 attempts');

  for(var p = 1; p < 4; p++){
    if(NumGues === '1' ) {
      alert('Good Job !! ');
      break;
    } else {
      NumGues = prompt('Try again', '1, 2, 3, 4, 5, 6');
    }
  };
}

questionThird();

function questionFour(){
  var correct = false;
  var counter = 0;
  while(counter < 6 && correct === false) {
    var canGuess = prompt('Can you guess what month Darius came to Portland, you have 6 attempts, make sure your answers are lowercase');
    var months = ['july','may','august','september','november','june' ];
    for(var i = 0; i < months.length; i++){
      console.log(months);
      if(canGuess.toLowerCase() === months[i] ) {
        correct = true;
      }

    };
    counter++;
    if (correct === true) {
      alert ('You da best !, and you\'re worth it !');

    }
    else {
      alert('nope');
    }
  }
}

questionFour();