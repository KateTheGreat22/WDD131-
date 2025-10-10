const themeSelector = document.querySelector("select");
const body = document.body;
const logo = document.querySelector(".logo");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.className = savedTheme; 
  themeSelector.value = savedTheme; 
  logo.src = savedTheme === "dark" ? "byui-logo_white.webp" : "byui-logo_blue.webp";
} else {
  body.className = "light";
  themeSelector.value = "light";
  logo.src = "byui-logo_blue.webp";
}

function changeTheme() {
  const selectedTheme = themeSelector.value;

  if (selectedTheme === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
    logo.src = "Images/byui-logo_white.png";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    logo.src = "byui-logo_blue.webp";
  }

  localStorage.setItem("theme", selectedTheme);
}

themeSelector.addEventListener("change", changeTheme);
