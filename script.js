// let menuBtn = document.getElementById("menu-btn");

document.getElementById('menu-btn').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  let closebutton = document.getElementById("closebutton");
  let openbutton = document.getElementById("openbutton");
  closebutton.classList.toggle("hide");
  openbutton.classList.toggle("hide");
  menu.classList.remove("hide");
  menu.classList.toggle('show');
});