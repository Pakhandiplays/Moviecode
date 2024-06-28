// nevbar
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
document.getElementById('nothing_1').value = "Sumit kumar";
document.getElementById('nothing_2').value = "codebysumit";
document.getElementById('usefull').href = "/Admin/qwertyuiopasdfghjklzxcvbnm.html"
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
document.getElementById('nothing_1').style.display = "none";
document.getElementById('nothing_2').style.display = "none";
const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);
// end nevbar