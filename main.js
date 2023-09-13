const menuContainer = document.getElementsByClassName("menu-container")[0];

closeMenu();

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

sr.reveal("header", { delay: 200 });
sr.reveal("section", { delay: 200 });

document.getElementById("open-menu").addEventListener("click", () => {
  menuContainer.style.left = "0";
});

function closeMenu() {
  elements = document.getElementsByClassName("close-menu");
  Array.from(elements).forEach((element) => {
    element.addEventListener("click", () => {
      menuContainer.style.left = "-100%";
    });
  });
}
