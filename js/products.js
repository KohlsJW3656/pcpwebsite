var boardUrls = ["images/boardgame/map1.jpg", "images/boardgame/map2.jpg", "images/boardgame/map3.jpg", "images/boardgame/map4.jpg", "images/boardgame/cards1.png"];

var i = 0;

var previousButton = document.getElementById('previousButton');
var nextButton = document.getElementById('nextButton');
var photo = document.getElementById('boardgamePhoto');

function advance(delta) {
  i = (i + delta + boardUrls.length) % boardUrls.length;
  photo.src = boardUrls[i];
}

previousButton.addEventListener('click', () => advance(-1));
nextButton.addEventListener('click', () => advance(1));

advance(0);