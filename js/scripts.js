$('div').click(function(){
  
  // Expand to show caption on _this_ div, and only _this_ div
  $(this).toggleClass('showcaption');
  
});

// Get Random Number
var limit = 3;
var numRand = Math.floor(Math.random()*limit);
console.log(numRand)

// Store Greetings
var msg0 = 'Get Your Sushi On!';
var msg1 = 'Rice to Meet You!';
var msg2 = 'All Your Sushi Needs in One Place!';

// Change Greeting
$('h2').text( eval('msg' + numRand) );

console.log( eval('msg' + numRand) );