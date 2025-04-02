// Your code here
"use strict";

document.addEventListener("keydown", function (event) {
    console.log(event);
  });

  const dodger = document.getElementById("dodger");
  const gameContainer = dodger.parentElement;

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    const containerWidth = gameContainer.clientWidth;
    const dodgerWidth = dodger.clientWidth;
  
    if (left + dodgerWidth < containerWidth) {
      dodger.style.left = `${left + 10}px`;
    }
  }

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    const containerHeight = gameContainer.clientHeight;
    const dodgerHeight = dodger.clientHeight;

    if (bottom < containerHeight - dodgerHeight) {
        dodger.style.bottom = `${bottom + 10}px`;
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    const containerHeight = gameContainer.clientHeight;
    const dodgerHeight = dodger.clientHeight;

    if (bottom < containerHeight - dodgerHeight) {
        dodger.style.bottom = `${bottom - 10}px`;
    }
}

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    } else if (e.key === "ArrowUp") {
        moveDodgerUp();
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
  });

  