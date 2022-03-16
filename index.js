//first dice
let randomNumber1 = Math.floor(Math.random() * 6 +1);
console.log(randomNumber1);//1-6

let diceFaceSrc1 = "images/dice" + randomNumber1 + ".png";
console.log(diceFaceSrc1);

let faceSelector1 = document.querySelectorAll("img")[0].setAttribute("src", diceFaceSrc1);//img[0]-the 1'st image

//second Dicee
let randomNumber2 = Math.floor(Math.random() * 6 +1);
console.log(randomNumber2);//1-6

let diceFaceSrc2 = "images/dice" + randomNumber2 + ".png";
console.log(diceFaceSrc2);

let faceSelector2 = document.querySelectorAll("img")[1].setAttribute("src", diceFaceSrc2);//img[0]-the 2'nd image

//showing the Winner

function showWinner() {

  if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🍀 Player 1 wins";
  } else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🍀";
  } else {
    document.querySelector("h1").innerHTML = "🤝 Draw 🤝";
  }
}

showWinner();
