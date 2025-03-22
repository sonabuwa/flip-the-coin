// DOM Manipulation
let btn = document.getElementById("btn");
let img = document.getElementById("img");
let nameOfCoin = document.getElementById("nameOfCoin");

// coin flip condition using button
btn.addEventListener("click", () => {
  // Genrate random number between 0-1
  var rand = Math.round(Math.random());
  if (rand === 1) {
    img.src = "resources/heads.svg";
    img.alt = "Head";
    nameOfCoin.innerHTML = "Head";

    document.getElementById("img-container").appendChild(img);
  } else {
    img.src = "resources/tails.svg";
    img.alt = "Tails";
    nameOfCoin.innerHTML = "Tails";

    document.getElementById("img-container").appendChild(img);
  }
  console.log(rand);
});

// coin flip condition using image

img.addEventListener("click", () => {
  var rand = Math.round(Math.random());
  if (rand === 1) {
    img.src = "resources/heads.svg";
    img.alt = "Head";
    nameOfCoin.innerHTML = "Head";

    document.getElementById("img-container").appendChild(img);
  } else {
    img.src = "resources/tails.svg";
    img.alt = "Tails";
    nameOfCoin.innerHTML = "Tails";

    document.getElementById("img-container").appendChild(img);
  }
  console.log(rand);
});
