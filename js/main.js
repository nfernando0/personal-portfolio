const navbarNav = document.getElementsByClassName("navbar__nav");

document.getElementById("hamb-menu").oncklick = () => {
  navbarNav.classList.toggle("active");
};
