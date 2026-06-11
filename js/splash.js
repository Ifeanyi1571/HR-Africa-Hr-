console.log("JS loaded");


const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

loginBtn?.addEventListener("click", () => {
  window.location.href = "login.html";
});

console.log(loginBtn);

signupBtn?.addEventListener("click", () => {
  window.location.href = "create-account.html";
});