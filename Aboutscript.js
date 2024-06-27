const menuIcon = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.getElementById("closeSidebar");

menuIcon.addEventListener("click", function () {
  sidebar.style.width = "200px"; // Adjust width to match sidebar width in CSS
});

closeSidebar.addEventListener("click", function () {
  sidebar.style.width = "0px"; // Close sidebar by setting width to 0px
});
