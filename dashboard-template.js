const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle?.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn?.addEventListener("click", () => {
  window.location.href = "login.html";
});






