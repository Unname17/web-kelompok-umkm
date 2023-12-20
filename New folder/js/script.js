//Toogle class active
const navbarNavigation = document.querySelector(".navbar-navigation");
//Ketika di click
document.querySelector("#menu").onclick = () => {
  navbarNavigation.classList.toggle("active");
};

//klik di luar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNavigation.contains(e.target)) {
    navbarNavigation.classList.remove("active");
  }
});
