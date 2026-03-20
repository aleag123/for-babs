let currentPage = 0;
const pages = document.querySelectorAll(".page");
const pageNumber = document.getElementById("pageNumber");

function showPage(index) {
  pages.forEach((page) => page.classList.remove("active"));
  pages[index].classList.add("active");
  pageNumber.textContent = `${index + 1} / ${pages.length}`;
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