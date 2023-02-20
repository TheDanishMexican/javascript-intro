// alert("Hej verden");
// console.log("Hej verden!");
// console.log("Asbjørn elsker scooby doo");
// console.log("nej");
// document.querySelector("#square").classList.add("tilt", "move", "size");
// document.querySelector("#circle").classList.add("move", "size");
// document.querySelector("#circle").classList.add("move");
// document.querySelector("#circle").classList.add("size");
// document.querySelector("#square").classList.add("tilt");

function normalCircle() {
  document.querySelector("#circle").classList.remove("move");
  document.querySelector("#circle").classList.remove("size");
}

function specialCircle() {
  document.querySelector("#circle").classList.add("size");
  document.querySelector("#circle").classList.add("move");
}

function tiltedSquare() {
  console.log("tiltedSquare");
  document.querySelector("#square").removeEventListener("click", tiltedSquare);
  document.querySelector("#square").classList.add("tilt");
}

document.querySelector("#square").addEventListener("click", tiltedSquare);
