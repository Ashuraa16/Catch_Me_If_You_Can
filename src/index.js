import "./styles.css";
var box = document.querySelector(".box");
console.log(box);
var i = 0;
var j = 0;
const height = window.innerHeight;
const width = window.innerWidth;
function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

console.log(generateRandom());
box.addEventListener("mouseover", function () {
  i = generateRandom(0, height - 101);
  j = generateRandom(0, width - 101);
  console.log(i, j);
  box.style.top = i + "px";
  box.style.left = j + "px";
});
