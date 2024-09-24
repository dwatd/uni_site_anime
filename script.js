// placeholder for header
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((error) => console.log("Error loading header:", error));
});

// login modal
document.getElementById("login-btn").addEventListener("click", function () {
  // open a login modal
});
