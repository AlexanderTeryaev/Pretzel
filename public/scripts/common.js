//header animation
function handleScroll(ev) {
  let headerElement = document.getElementById("header");

  if (window.scrollY >= 80) {
    if (!headerElement.classList.contains('fixed-header')) {
      headerElement.classList.add('fixed-header');
    }
  } else {
    if (headerElement.classList.contains('fixed-header')) {
      headerElement.classList.remove('fixed-header');
    }
  }
}

// Side menu
function show_sidemenu() {
  var side_bg = document.getElementById("side-bg");
  side_bg.style.display = "block";
  var side_menu = document.getElementById("side-menu");
  side_menu.style.right = "0";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function hide_sidemenu() {
  var side_bg = document.getElementById("side-bg");
  side_bg.style.display = "none";
  var side_menu = document.getElementById("side-menu");
  side_menu.style.right = "-18rem";
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}