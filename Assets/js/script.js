let navbarUl = document.querySelector(".navbar__ul");
document.getElementById("nav__hamb").onclick = (e) => {
  e.preventDefault();
  navbarUl.classList.toggle("active");
};
