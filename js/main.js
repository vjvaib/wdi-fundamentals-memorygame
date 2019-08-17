
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [ ];



var cardOne = cards[0];
cardsInPlay.push(cardOne);


var cardTwo = cards[3];
cardsInPlay.push(cardTwo);

var checkFor Match = function() {
if (cardsInPlay[0] === cardsInPlay[3]) {
alert = "you found a match";
}
else {
alert = "Sorry try again";
}






console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
alert('Hello, friends.');