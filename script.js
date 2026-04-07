let heartInterval = null;
let currentPage = 0;
let isAnimating = false;

const pages = document.querySelectorAll(".page");
const pageNumber = document.getElementById("pageNumber");
const leftButton = document.querySelector(".nav-btn.left");
const rightButton = document.querySelector(".nav-btn.right");
const music = document.getElementById("bgMusic");
music.volume = 0.03; //hehehe mwah

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

    if (currentPage === pages.length - 1) {
      startHearts();
    } else {
      stopHearts();
    }
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
  const book = document.querySelector(".book-container");

  explodeHearts();
  book.classList.add("transition-out");

  setTimeout(() => {
    book.innerHTML = `
      <div class="celebration-page">
        <div class="celebration-content">
          <h1 class="celebration-title">MY girlfriend!!!</h1>
          <p class="celebration-message">
            Wait ... why that got a ring to it.. 🤔<br>
            Thank you for being a part of my life, I can't imagine a life without you anymore. You've made me the happiest boy ever <33<br>
          </p>

          <button class="restart-btn" onclick="restartBook()">restart</button>
        </div>
      </div>
    `;

    book.classList.remove("transition-out");
    book.classList.add("transition-in");
  }, 700);

  setTimeout(() => {
    book.classList.remove("transition-in");
  }, 1400);
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
  mwah.volume = 0.05
}

function startHearts() {
  if (heartInterval) return;

  heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💛";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "80%";

    document.querySelector(".book-container").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 800);
}

function stopHearts() {
  clearInterval(heartInterval);
  heartInterval = null;

  document.querySelectorAll(".heart").forEach(h => h.remove());
}

function explodeHearts() {
  const container = document.querySelector(".book-container");

  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.textContent = "💛";

    const angle = (Math.PI * 2 * i) / 24;
    const distance = 120 + Math.random() * 80;

    heart.style.left = "50%";
    heart.style.top = "55%";
    heart.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}