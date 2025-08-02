// script_speciall.js
const typingText = document.getElementById("typingText");
const messageBox = document.querySelector(".message-box");
const gameBox = document.querySelector(".game-box");
const resultBox = document.querySelector(".result-box");
const followUp = document.querySelector(".followUp");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const tryAgain = document.querySelector(".try-again");
const willYouButtons = document.querySelector(".will-you-buttons");
const willYesBtn = document.getElementById("willYesBtn");
const willNoBtn = document.getElementById("willNoBtn");
const popupGame = document.getElementById("popupGame");
const clickSound = document.getElementById("click-sound");
const cursorHeart = document.getElementById("cursorHeart");
const btnMessage = document.getElementById("btnMessage");
const btnGame = document.getElementById("btnGame");
const tryAgainBtn = document.getElementById("tryAgainBtn");

let message = `I'm drawn to you and chasing after you not just because I like you, but because there's something in you that makes me wanna grow. You feel like someone a few steps ahead of me—bukan dengan cara yang bikin aku minder yaa, tapi justru bikin aku pengen kejar itu. Thank you, Shandana Clarissa Auliavera. I’m truly happy to know you.`;
let index = 0;
let typingStarted = false;

btnMessage.addEventListener("click", () => {
  playClick();
  showMessage();
});

btnGame.addEventListener("click", () => {
  playClick();
  showGame();
});

tryAgainBtn.addEventListener("click", () => {
  resetGame();
});

function showMessage() {
  gameBox.classList.add("hidden");
  resultBox.classList.add("hidden");
  popupGame.classList.add("hidden");
  messageBox.classList.remove("hidden");
  dropEmojis(["❄", "💫", "🌸", "💖", "🪽"]);
  if (!typingStarted) {
    typingText.innerHTML = "";
    index = 0;
    typeWriter();
    typingStarted = true;
  }
}

function typeWriter() {
  if (index < message.length) {
    typingText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 30);
  }
}

function showGame() {
  messageBox.classList.add("hidden");
  resultBox.classList.add("hidden");
  popupGame.classList.add("hidden");
  gameBox.classList.remove("hidden");
  resetGame();
  dropEmojis(["❄", "💫", "🌸", "💖", "🪽"]);
}

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300;
  const y = Math.random() * 200;
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  gameBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  followUp.classList.remove("hidden");
  setTimeout(() => {
    willYouButtons.classList.remove("hidden");
  }, 1000);
});

willNoBtn.addEventListener("mousemove", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  willNoBtn.style.left = `${x}px`;
  willNoBtn.style.top = `${y}px`;
  willNoBtn.style.position = "absolute";
});

willYesBtn.addEventListener("click", () => {
  willYouButtons.classList.add("hidden");
  popupGame.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  tryAgain.classList.remove("hidden");
});

function resetGame() {
  noBtn.style.position = "relative";
  noBtn.style.left = "0px";
  noBtn.style.top = "0px";
  tryAgain.classList.add("hidden");
  followUp.classList.add("hidden");
  willYouButtons.classList.add("hidden");
  popupGame.classList.add("hidden");
}

function dropEmojis(emojis) {
  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = "-50px";
    emoji.style.fontSize = `${Math.random() * 12 + 18}px`;
    emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }
}

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

document.addEventListener("mousemove", (e) => {
  cursorHeart.style.left = e.pageX + 6 + "px";
  cursorHeart.style.top = e.pageY + 6 + "px";
  const heart = document.createElement("div");
  heart.innerText = "💗";
  heart.style.position = "absolute";
  heart.style.left = e.pageX - 5 + "px";
  heart.style.top = e.pageY - 5 + "px";
  heart.style.fontSize = "15px";
  heart.style.pointerEvents = "none";
  heart.style.opacity = 1;
  heart.style.transition = "all 0.5s ease-out";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.style.top = e.pageY - 10 + "px";
    heart.style.opacity = 0;
  }, 10);
  setTimeout(() => {
    heart.remove();
  }, 1000);
});

window.onload = () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.7;
  music.play().catch(() => {
    console.warn("Autoplay failed. User must interact first.");
  });
};
