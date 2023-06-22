// HIGHLIGHT MENU
let menuItems = document.querySelectorAll(".jl-left-menu");
let selected = null;
function highlightMenu(menu) {
  if (selected != null) {
    selected.classList.remove("selected");
  }
  menu.classList.add("selected");
  selected = menu;
}
