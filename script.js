document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-btn").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    let closebutton = document.getElementById("closebutton");
    let openbutton = document.getElementById("openbutton");
    closebutton.classList.toggle("hide");
    openbutton.classList.toggle("hide");
    menu.classList.remove("hide");
    menu.classList.toggle("show");
  });

  let header = document.getElementById("header");
  let portfolioName = document.getElementById("portfolio-name");
  let links = document.getElementsByClassName("link");
  let closebutton = document.getElementById("closebutton");
  let openbutton = document.getElementById("openbutton");

  window.addEventListener("scroll", function () {
    var scrollPosition = this.window.scrollY;
    var textColor = scrollPosition > 200 ? '#202059' : '#fff';
    let linkColor = scrollPosition > 200 && window.innerWidth >= 769  ? '#202059' : '#fff';

    header.style.backgroundColor =
      "rgba(255, 255, 255, " + Math.min(1, scrollPosition / 200) + ")";
    
      portfolioName.style.color = textColor;
      for(let i=0; i<links.length; i++){
        links[i].style.color = linkColor;
      }
      openbutton.style.color = textColor;
      closebutton.style.color = textColor;
  });
}); 
