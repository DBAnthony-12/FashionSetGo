   // Sidebar toggle
   const menuIcon = document.getElementById('menu');
   const sidebar = document.querySelector('.sidebar');
   const closeSidebar = document.getElementById('closeSidebar');

   menuIcon.addEventListener('click', function() {
       sidebar.style.display = 'block';
   });

   closeSidebar.addEventListener('click', function() {
       sidebar.style.display = 'none';
   });