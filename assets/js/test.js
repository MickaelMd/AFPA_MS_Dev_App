const btn = document.getElementById("contact_form_save");

btn.addEventListener("click", (event) => {
  if (document.getElementById("contact_form_message").value.length < 1) {
    event.preventDefault();
  }
});

console.log("test");

const hh = document.createElement("h1");
hh.className = "text-center";
hh.innerHTML = "test js";

document.body.appendChild(hh);

// const color = [
//   "#FF5733",
//   "#33FF57",
//   "#3357FF",
//   "#FF33A1",
//   "#A133FF",
//   "#33FFD7",
//   "#FF5733",
//   "#F1C40F",
//   "#1F618D",
//   "#D35400",
//   "#8E44AD",
//   "#2ECC71",
//   "#E74C3C",
//   "#3498DB",
//   "#9B59B6",
//   "#1ABC9C",
//   "#F39C12",
//   "#C0392B",
//   "#7F8C8D",
//   "#BDC3C7",
// ];

let color = [];
let lastcolorgen = 0;
let randomColor = "";

for (let i = 0; i < 100; i++) {
  randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  if (lastcolorgen === randomColor) {
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  color.push(randomColor);

  lastcolorgen = randomColor;
}

// console.log(color);

// const duplicates = color.filter((col, index) => color.indexOf(col) !== index);

// console.log("Doublons :", duplicates);

const input = [
  "contact_form_objet",
  "contact_form_email",
  "contact_form_message",
];

let lastcolor = 0;

input.forEach((value) => {
  let form = document.getElementById(value);

  form.addEventListener("input", () => {
    let number = Math.floor(Math.random() * color.length);

    do {
      number = Math.floor(Math.random() * color.length);
    } while (lastcolor === number);

    hh.style.color = color[number];
    btn.style.borderColor = color[number];

    lastcolor = number;
    // console.log(number);
  });
});

// let number = 0;
// let i = 0;

// do {
//   number = Math.floor(Math.random() * 844);
//   i++;
//   if (number > 800) {
//     console.log(number);
//   } else {
//     console.log(i + " / " + number);
//   }
// } while (number !== 48);

// if (i < 100) {
//   btn.style.width = "500px";
// }
