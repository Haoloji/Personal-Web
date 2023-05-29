function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var content = document.querySelector('.content');
  
  sidebar.classList.toggle('sidebar-hidden');
  content.classList.toggle('content-full');
}