var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [ ];

function checkForMatch() {
  //if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
          //setTimeout('location', 50000);
        //location.reload()

      } else {
          alert("Sorry, try again");
        };

  };

var cards = [
{
  rank = "queen",
  suit = "hearts",
  cardImage = "images/queen-of-hearts.png",
},
{
  rank = "queen",
  suit = "diamonds",
  cardImage = "images/queen-of-diamonds.png",
},
{
  rank = "king",
  suit = "hearts",
  cardImage = "images/king-of-hearts.png",
},

{
  rank = "king",
  suit = "diamonds",
  cardImage = "images/king-of-diamonds.png",
},
];


function flipCard() {
console.log("User flipped" + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].suit);
if (cardsInPlay.length === 2){
  checkForMatch();
  //cardsInPlay = [];

};
};

console.log(cardsInPlay);

