import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let iconsArray = ["♦", "♥", "♠", "♣"]

  let numberArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

  const generateRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)]

  let randomIcon = generateRandomElement(iconsArray)
  let randomNumber = generateRandomElement(numberArray)

  console.log(randomIcon, randomNumber, randomIcon)

  const iconTopElement = document.querySelector("#icon-top")
  const numberElement = document.querySelector("#number")
  const iconBottomElement = document.querySelector("#icon-bottom")

  iconTopElement.innerHTML = randomIcon
  numberElement.innerHTML = randomNumber
  iconBottomElement.innerHTML = randomIcon
  
  if (randomIcon == "♦" || randomIcon == "♥") {
    iconTopElement.style.color = "red"
    iconBottomElement.style.color = "red"
  } else {
    iconTopElement.style.color = "black"
    iconBottomElement.style.color = "black"
  }
  // console.log("Hello Rigo from the console!");
};
