const navbarNav = document.querySelector(".navbar__nav");

document.querySelector("#hamb-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamb = document.querySelector("#hamb-menu");

document.addEventListener("click", function (e) {
  if (!hamb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
