let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((page) => page.classList.remove("active"));
  pages[index].classList.add("active");
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