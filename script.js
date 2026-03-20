let currentPage = 0;
const pages = document.querySelectorAll(".page");
const pageNumber = document.getElementById("pageNumber");
const leftButton = document.querySelector(".nav-btn.left");
const rightButton = document.querySelector(".nav-btn.right");

function showPage(index) {
  pages.forEach((page) => page.classList.remove("active"));
  pages[index].classList.add("active");
  pageNumber.textContent = `${index + 1} / ${pages.length}`;

  if (index == 0){
    leftButton.style.display = "none";
  } else {
    leftButton.style.display = "block";
  }

  if (index == pages.length - 1) {
    rightButton.style.display = "none";
  } else {
    rightButton.style.display = "block";
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

showPage(currentPage);