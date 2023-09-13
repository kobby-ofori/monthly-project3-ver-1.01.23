const toggleMenu = document.getElementById("menuToggle");

const nav = document.getElementsByClassName("side-nav-div");

// toggleMenu.addEventListener("click", function navToggler() {
//   for (let i = 0; i < nav.length; i++) {
//     nav[i].style.display = "block"; // Set the display property to "block"
//   }
// });

// Define the navToggler function
function navToggler() {
  for (let i = 0; i < nav.length; i++) {
    nav[i].style.display = "block"; // Set the display property to "block"
  }
}

// Add the event listener to the toggleMenu button
toggleMenu.addEventListener("click", navToggler);
