const menu = document.getElementById("menu");
let closebutton = document.getElementById("closebutton");
let openbutton = document.getElementById("openbutton");
let header = document.getElementById("header");
let portfolioName = document.getElementById("portfolio-name");
let links = document.getElementsByClassName("link");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-btn").addEventListener("click", function () {
    closebutton.classList.toggle("hide");
    openbutton.classList.toggle("hide");
    menu.classList.remove("hide");
    menu.classList.toggle("show");
  });

  window.addEventListener("scroll", function () {
    let scrollPosition = this.window.scrollY;
    let textColor = scrollPosition > 200 ? '#202059' : '#fff';
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

const updateURL = (newAnchor)=> {
  // Get the current URL without the anchor
  var currentURLWithoutHash = window.location.href.split('#')[0];

  // Update the URL with the new anchor
  var newURL = currentURLWithoutHash + newAnchor;
  window.history.replaceState({}, document.title, newURL);
}

function headerHeight() {
  return document.querySelector('header').offsetHeight;
}

document.addEventListener('DOMContentLoaded', function() {
  // let headerHeight = document.querySelector('header').offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      let targetId = this.getAttribute('href').substring(1);
      let targetElement = document.getElementById(targetId);
      updateURL(this.getAttribute('href'));

      if (targetElement) {
        window.scrollTo(0, targetElement.offsetTop - headerHeight());
      }
    });
  });
});


window.addEventListener('load', function() {
  handleScroll();
});

function handleScroll() {
    if (window.location.hash) {
      let targetId = window.location.hash.substring(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo(0, targetElement.offsetTop - headerHeight());
      }
    }
}



