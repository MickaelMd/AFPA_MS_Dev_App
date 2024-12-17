const btn_nm = document.getElementById("btn_night_mode");

NightMode();

function NightMode() {
  if (localStorage.getItem("Night_Mode") == null) {
    localStorage.setItem("Night_Mode", true);
  }

  if (localStorage.getItem("Night_Mode") == "true") {
    btn_nm.checked = false;
    document.body.style.color = "white";
    document.body.style.backgroundColor = "rgb(15, 15, 15)";
  } else {
    btn_nm.checked = true;
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
}

btn_nm.addEventListener("click", () => {
  if (btn_nm.checked == false) {
    localStorage.setItem("Night_Mode", true);
    document.body.style.transition = "300ms";
    NightMode();
  } else {
    localStorage.setItem("Night_Mode", false);
    document.body.style.transition = "300ms";
    NightMode();
  }
});
