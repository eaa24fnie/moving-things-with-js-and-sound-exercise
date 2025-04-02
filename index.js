// Your code here
"use strict";

document.addEventListener("keydown", function (event) {
    console.log(event);
  });


const movementSound = document.getElementById("movementSound");
const gameoverSound = document.getElementById("gameoverSound");
const dodger = document.getElementById("dodger");
const gameContainer = dodger.parentElement;
const object = document.getElementById("object");


dodger.style.bottom = "180px";

function playSoundOnMovement() {
    if (movementSound) {
        movementSound.currentTime = 0;
        movementSound.play();
    }
}

function playGameOverSound() {
    if (gameoverSound) {
        gameoverSound.currentTime = 0;
        gameoverSound.play();
    }
}

function checkCollision() {
    const dodgerRect = dodger.getBoundingClientRect();
    const objectRect = object.getBoundingClientRect();

    if (
        dodgerRect.left < objectRect.right &&
        dodgerRect.right > objectRect.left &&
        dodgerRect.top < objectRect.bottom &&
        dodgerRect.bottom > objectRect.top
    ) {
        object.style.display = "none";
        
    }
}

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
      dodger.style.transform = "scaleX(-1)";
      playSoundOnMovement();
      checkCollision();
    }  else {
        playGameOverSound();
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    const containerWidth = gameContainer.clientWidth;
    const dodgerWidth = dodger.clientWidth;
  
    if (left + dodgerWidth < containerWidth) {
      dodger.style.left = `${left + 10}px`;
      dodger.style.transform = "rotate(0deg)";

      playSoundOnMovement();
      checkCollision();
    }  else {
        playGameOverSound();
    }
  }

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    const containerHeight = gameContainer.clientHeight;
    const dodgerHeight = dodger.clientHeight;

    if (bottom < containerHeight - dodgerHeight) {
        dodger.style.bottom = `${bottom + 10}px`;
        dodger.style.transform = "rotate(-90deg)";
        playSoundOnMovement();
        checkCollision();
    }  else {
        playGameOverSound();
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    const containerHeight = gameContainer.clientHeight;
    const dodgerHeight = dodger.clientHeight;

    if (bottom < containerHeight - dodgerHeight) {
        dodger.style.bottom = `${bottom - 10}px`;
        dodger.style.transform = "rotate(90deg)";
        playSoundOnMovement();
        checkCollision();
    }  else {
        playGameOverSound();
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