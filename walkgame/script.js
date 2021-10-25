const map = [];
const button = document.querySelector("button");
const screen = document.getElementById("playground");
const box = document.getElementById("box");
const velocity = 20.0;

var target_x = 50;
var target_y = 50;

var current_x = 500;
var current_y = 500;

function loop() {}

function render() {}

function main() {
  const screenRec = screen.getBoundingClientRect();
  current_x = screenRec.x;
  current_y = screenRec.y;

  setInterval(() => {
    if (Math.abs(current_x - target_x) < 5) {
      current_x = target_x;
    }

    if (Math.abs(current_y - target_y) < 5) {
      current_y = target_y;
    }

    if (current_x > target_x) {
      current_x -= velocity;
    }

    if (current_x < target_x) {
      current_x += velocity;
    }

    if (current_y > target_y) {
      current_y -= velocity;
    }

    if (current_y < target_y) {
      current_y += velocity;
    }

    box.style.left = current_x + "px";
    box.style.top = current_y + "px";
  }, 15);
}

main();

screen.addEventListener("click", function (e) {
  const screenRec = screen.getBoundingClientRect();
  target_x = e.x - screenRec.x;
  target_y = e.y - screenRec.y;
});
