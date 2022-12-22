var words = ["snögubbe", "julgran", "julklapp", "jultomte", "julklapp"];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

if (window.confirm('Vill du spela "Hänga gubbe?"')) 
while (remainingLetters > 0) {
  alert(answerArray.join(" "));
  var guess = prompt("Gissa på en bokstav tills du hittar rätt ord!");
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }
}

alert(answerArray.join(" "));
alert("Bra jobbat! Det rätta ordet var " + word + "!");