
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [ ];

function checkForMatch (){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}


var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped" + cardOne);


var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped" + cardTwo);



function flipcard (cardId){
if (cardsInPlay[0] === cardsInPlay[3]) {
  console.log("User flipped" + cards[cardId])
}
else {
alert = "Sorry try again";
}
}
