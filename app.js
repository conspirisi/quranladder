const burger = document.getElementById("burger");
const cog = document.querySelector("body > div > div.section.header > div.nav > img");

const settings = document.querySelector("body > div > div.section.header > div.settings");
// const settings = document.querySelector("body > div > div.section.header > div.settings");

left = () => {
  console.log("hello");
  console.log("before", settings.classList.value);
  if (settings.classList.value.includes("settingsAppear")) {
    settings.classList.remove("settingsAppear");
    settings.classList.add("settingsDisappear");
    console.log("has L", settings.classList.value);
  } else {
    settings.classList.remove("settingsDisappear");
    settings.classList.add("settingsAppear");
    console.log("has no L", settings.classList.value);
  }
};

burger.addEventListener("click", left);
cog.addEventListener("click", left);
