let menuBtn = document.getElementById("menu-btn");
if (menuBtn) {
  menuBtn.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  let menu = document.getElementById("menu");
  if(menu.classList.contains('show')){
    menu.classList.remove("show");
  }else{
    menu.classList.add('show');
  }
}
