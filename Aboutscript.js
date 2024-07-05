const menuIcon = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.getElementById("closeSidebar");

menuIcon.addEventListener("click", function () {
  sidebar.classList.add("active"); // Adjust width to match sidebar width in CSS
});

closeSidebar.addEventListener("click", function () {
  sidebar.classList.remove("active"); // Close sidebar by setting width to 0px
});
