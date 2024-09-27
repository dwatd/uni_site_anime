// placeholder for header
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((error) => console.log("Error loading header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      const modal = document.getElementById("login-modal");
      const loginBtn = document.getElementById("login-btn");
      const closeBtn = document.getElementsByClassName("close")[0];

      loginBtn.onclick = function () {
        modal.style.display = "block";
      };

      closeBtn.onclick = function () {
        modal.style.display = "none";
      };

      // Close the modal if clicked outside the modal content
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    })
    .catch((error) => console.log("Error loading header:", error));
});
