'use strict';

alert ('Hello');
var userInput= prompt('What\'s your name');
var from= prompt('Where are you from ?');
var liveSit= prompt('what do you like to do ?');
alert('Interesting....');
alert("My name is musa");
alert("I was designed by Darius Marte");
var knowMe= prompt("do you know him ?");

if (knowMe.toUpperCase() === 'YES' || knowMe.toUpperCase() === 'Y' ) {
  var birthQ= prompt('I see... well do you know his birthday ?');  
}
else {
  alert('Not a valid answer my dear =)' );  
}

if (birthQ.toUpperCase() ==='NO'|| birthQ.toUpperCase() === 'N') {
    alert('I thought not');
}
else if(birthQ.toUpperCase() === 'YES' || birthQ.toUpperCase() === 'Y') {
 var birthGuess = prompt('when is it ?', '528 or 628');
 if(birthGuess ==='528'){
     alert('Correct!');
 }
 else{
     alert('Not Valid'); }
}
else{
    alert('Not valid');  
}
alert('since you\'re a friend of Darius, he\'d like me to ask');

var howBout = prompt('Are you OK ?', 'YES or NO');
if (howBout.toUpperCase() === 'YES' || howBout.toUpperCase() === 'Y') {
    console.log(howBout.toUpperCase() );
    alert('I\'m happy to recieve that... I know humans typically say \'hear\' but I don\'t have ears !');
} 
else {
    alert('Everything\'s going to be alright !');
}




