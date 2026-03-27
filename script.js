let currentPage = 0;
let isAnimating = false;

const pages = document.querySelectorAll(".page");
const pageNumber = document.getElementById("pageNumber");
const leftButton = document.querySelector(".nav-btn.left");
const rightButton = document.querySelector(".nav-btn.right");
const music = document.getElementById("bgMusic");
music.volume = 0.11;

function updateNav() {
  pageNumber.textContent = `${currentPage + 1} / ${pages.length}`;

  leftButton.style.display = currentPage === 0 ? "none" : "block";
  rightButton.style.display = currentPage === pages.length - 1 ? "none" : "block";
}

function showPage(index, direction = "right") {
  if (isAnimating || index === currentPage || index < 0 || index >= pages.length) return;

  isAnimating = true;

  const current = pages[currentPage];
  const next = pages[index];

  next.classList.remove("active", "exit-left", "exit-right", "enter-left", "enter-right");

  if (direction === "right") {
    next.classList.add("enter-right");
    current.classList.add("exit-left");
  } else {
    next.classList.add("enter-left");
    current.classList.add("exit-right");
  }

  next.offsetHeight;

  next.classList.add("active");
  next.classList.remove("enter-left", "enter-right");

  setTimeout(() => {
    current.classList.remove("active", "exit-left", "exit-right");
    currentPage = index;
    updateNav();
    isAnimating = false;
  }, 500);
}

function nextPage() {
  showPage(currentPage + 1, "right");
}

function prevPage() {
  showPage(currentPage - 1, "left");
}

pages.forEach((page, i) => {
  if (i !== 0) page.classList.remove("active");
});

updateNav();

function sayYes() {
  document.querySelector(".book-container").innerHTML = `
    <div class="celebration-page">
      <h1>YAYYYYYY ❤️</h1>
      <p>you just made me the happiest boy alive</p>
      <div class="celebration-hearts">💖 💌 ❤️ 💕 💞</div>
      <button class="restart-btn" onclick="restartBook()">restart</button>
    </div>
  `;
}

function moveNoButton(button) {
  const x = Math.floor(Math.random() * 260) - 180;
  const y = Math.floor(Math.random() * 180) - 110;
  button.style.transform = `translate(${x}px, ${y}px)`;
}

function restartBook() {
  location.reload();
}

function startMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.querySelector(".music-btn");

  if (music.paused) {
    music.play();
    btn.classList.add("playing");
    btn.textContent = "❚❚";
  } else {
    music.pause();
    btn.classList.remove("playing");
    btn.textContent = "♪";
  }
}

function playMwah() {
  const mwah = document.getElementById("mwah");
  mwah.currentTime = 0;
  mwah.play();
}