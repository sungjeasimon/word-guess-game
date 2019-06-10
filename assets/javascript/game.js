
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randAlph = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randAlph)
var userAlph = " ";
var guessWin = 0;
var guessLose = 0;
var guessLimit = 9;

    document.onkeyup = function(e) {
    userAlph = e.key.toLowerCase();
    console.log(userAlph);

    if (userAlph === randAlph) {
      alert ("user guessed correct");
      guessWin = guessWin + 1;
      $("#win").text("Wins: " + guessWin);
      randAlph = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(randAlph);
    }

    else {
        
        guessLimit = guessLimit -1
        $("#guessLeft").text("Guess Left: " + guessLimit);
        $("#guessLetter").text("your Guesses so far: " + userAlph);
    }; 

    if (guessLimit<0) {
        alert ("no more limit")  
        guessLose = guessLose + 1; 
        $("#lose").text("Losses: " + guessLose);
        guessLimit = 9
        $("#guessLeft").text("Guess Left: " + guessLimit);
        randAlph = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(randAlph);
    }



};