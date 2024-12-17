const nav = document.getElementsByTagName("nav")[0];

let lastScroll = 0;
const btn_nav = document.getElementById("checkbox");
let active = false;

document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  // console.log(currentScroll);

  if (currentScroll > 300) {
    if (active == false) {
      nav.style.top = "-100px";
      nav.style.transition = "1000ms";
    }
  }

  if (currentScroll < lastScroll) {
    if (active == false) {
      nav.style.top = "0";
      nav.style.transition = "300ms";
    }
  }

  lastScroll = currentScroll;
});

btn_nav.addEventListener("click", () => {
  if (active == false) {
    active = true;
    nav.style.height = "320px";
  } else {
    nav.style.height = "";
    active = false;
  }
});

const mediaQuery = window.matchMedia("(min-width: 466px)");

function handleScreenChange(e) {
  if (e.matches) {
    nav.style.height = "";
    btn_nav.checked = false;
    active = false;
  }
}

handleScreenChange(mediaQuery);

mediaQuery.addEventListener("change", handleScreenChange);
