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
/*document.getElementById("login-btn").addEventListener("click", function () {
  // open a login modal
});*/

document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Now that the header is loaded, set up the modal logic
      const modal = document.getElementById("login-modal"); // Match ID here
      const loginBtn = document.getElementById("login-btn");
      const closeBtn = document.getElementsByClassName("close")[0];

      // Listen for open click
      loginBtn.onclick = function () {
        modal.style.display = "block";
      };

      // Listen for close click
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
