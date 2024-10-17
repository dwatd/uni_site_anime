// placeholder for header
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // changing header color
      const currentPage = window.location.pathname;
      if (
        currentPage === "/" ||
        currentPage.includes("index.html") ||
        currentPage.includes(" ")
      ) {
        document.querySelector("header").style.backgroundColor = "transparent";
      } else {
        document.querySelector("header").style.backgroundColor = "#708c69";
      }

      // login and registration modals
      const loginModal = document.getElementById("login-modal");
      const loginBtn = document.getElementById("login-btn");
      const closeLoginBtn = loginModal.querySelector(".close");

      const registerModal = document.getElementById("register-modal");
      const registerBtn = document.getElementById("register-tab-link");
      const closeRegisterBtn = registerModal.querySelector(".close");

      const returnLogin = document.querySelector(".login-tab-link");

      loginBtn.onclick = function () {
        loginModal.style.display = "block";
      };

      closeLoginBtn.onclick = function () {
        loginModal.style.display = "none";
      };

      registerBtn.onclick = function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "block";
      };

      closeRegisterBtn.onclick = function () {
        registerModal.style.display = "none";
      };

      returnLogin.onclick = function (event) {
        event.preventDefault();
        registerModal.style.display = "none";
        loginModal.style.display = "block";
      };

      window.onclick = function (event) {
        if (event.target == loginModal) {
          loginModal.style.display = "none";
        } else if (event.target == registerModal) {
          registerModal.style.display = "none";
        }
      };
    })
    .catch((error) => console.log("Error loading header:", error));
});

// JavaScript for changing header transparency on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;
  const currentPage = window.location.pathname;

  if (
    currentPage === "/" ||
    currentPage.includes("index.html") ||
    currentPage.includes(" ")
  ) {
    document.querySelector("header").style.backgroundColor = "transparent";
  } else {
    if (scrollPosition > 50) {
      // header background semi-transparent when scrolled
      header.style.backgroundColor = "rgba(112, 140, 105, 0.9)";
      header.style.backdropFilter = "blur(5px)";
      header.style.webkitBackdropFilter = "blur(5px)";
    } else {
      // fully opaque at the top of the page
      header.style.backgroundColor = "rgba(112, 140, 105, 1)";
      header.style.backdropFilter = "none";
      header.style.webkitBackdropFilter = "none";
    }
  }
});
