//DOM Nodes
const cookieBtn = document.getElementById("cookie-clicker");
const cookieDisplay = document.getElementById("cookies-display");
const cpsDisplay = document.getElementById("cps-display");
const grabGranny = document.getElementById("grabGranny");
const GranniesDisplay = document.getElementById("grannies-display");
const superGrannyDisplay = document.getElementById("superGrannies-display");
const grabSuperGranny = document.getElementById("grabSuperGranny");
const ovenDisplay = document.getElementById("oven-display");
const grabOven = document.getElementById("grabOven");
const superOvenDisplay = document.getElementById("superOven-display");
const grabSuperOven = document.getElementById("grabSuperOven");
const kitchens = document.getElementById("kitchens");
const kitchenDisplay = document.getElementById("kitchen-display");
const die = document.getElementById("die");

//Game State
let cookies = Number(localStorage.getItem("cookies")) || 0;
let cps = Number(localStorage.getItem("cps")) || 0;
let grannies = Number(localStorage.getItem("grannies")) || 0;
let superGrannies = Number(localStorage.getItem("superGrannies")) || 0;
let oven = Number(localStorage.getItem("oven")) || 0;
let superOven = Number(localStorage.getItem("superOven")) || 0;
let kitchen = Number(localStorage.getItem("kitchen")) || 0;

//functions shorcuts
//API
async function fetchupgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
}

const grannyValue = 1;
const superGrannyValue = 5;
const ovenValue = 1;
const superOvenValue = 5;
const kitchenValue = 250;
const grannyCost = 10;
const ovenCost = 10;
const superGrannyCost = 10;
const superOvenCost = 10;
const kitchenCostGranny = 10;
const kitchenCostOven = 10;

grabGranny.title =
  "this will cost " +
  grannyCost +
  " cookies, and will give you " +
  grannyValue +
  " cookies p/s";
grabOven.title =
  "this will cost " +
  ovenCost +
  " cookies, and will give you " +
  ovenValue +
  " cookies p/s";
grabSuperGranny.title =
  "this will cost " +
  superGrannyCost +
  " grannies, and will give you " +
  superGrannyValue +
  " cookies p/s";
grabSuperOven.title =
  "this will cost " +
  superOvenCost +
  " ovens, and will give you " +
  superOvenValue +
  " cookies p/s";

function dave() {
  //display
  cookieDisplay.textContent = cookies;
  cpsDisplay.textContent = cps;
  GranniesDisplay.textContent = grannies;
  superGrannyDisplay.textContent = superGrannies;
  ovenDisplay.textContent = oven;
  superOvenDisplay.textContent = superOven;
  kitchenDisplay.textContent = kitchen;

  //get from storage to display
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("cps", cps);
  localStorage.setItem("grannies", grannies);
  localStorage.setItem("superGrannies", superGrannies);
  localStorage.setItem("oven", oven);
  localStorage.setItem("superOven", superOven);
  localStorage.setItem("kitchen", kitchen);
}

//Game Logic
setInterval(function () {
  cookies = cookies + cps;
  dave();
}, 1000);

cookieBtn.addEventListener("click", function () {
  cookies = cookies + 1;
  dave();
});

//upgrades

grabGranny.addEventListener("click", function () {
  if (cookies >= grannyCost) {
    cps = cps + grannyValue;
    cookies = cookies - grannyCost;
    grannies = grannies + 1;
    dave();
  } else {
    alert("you don't have enough cookies for that");
  }
});
grabSuperGranny.addEventListener("click", function () {
  if (grannies >= superGrannyCost) {
    cps = cps + superGrannyValue - grannyValue * 10;
    grannies = grannies - superGrannyCost;
    superGrannies = superGrannies + 1;
    dave();
  } else {
    alert("you don't have enough grannies for that");
  }
});
grabOven.addEventListener("click", function () {
  if (cookies >= ovenCost) {
    cps = cps + ovenValue;
    cookies = cookies - ovenCost;
    oven = oven + 1;
    dave();
  } else {
    alert("you don't have enough cookies for that");
  }
});
grabSuperOven.addEventListener("click", function () {
  if (oven >= superOvenCost) {
    cps = cps - ovenValue * 10 + superOvenValue;
    oven = oven - superOvenCost;
    superOven = superOven + 1;
    dave();
  } else {
    alert("you don't have enough ovens for that");
  }
});
kitchens.addEventListener("click", function () {
  if (superOven >= kitchenCostOven && superGrannies >= kitchenCostGranny) {
    cps = cps - superOvenValue * 10 - superGrannyValue * 10 + kitchenValue;
    superOven = superOven - kitchenCostOven;
    superGrannies = superGrannies - kitchenCostGranny;
    kitchen = kitchen + 1;
    dave();
  } else if (superGrannies < 10 && superOven < 10) {
    alert("you don't have enough Super Grannies or Super Ovens for that");
  } else if (superGrannies < 10) {
    alert("you don't have enough Super Grannies for that");
  } else if (superOven < 10) {
    alert("you don't have enough Super Ovens for that");
  }
});

//Die button
die.addEventListener("click", function () {
  localStorage.setItem("cookies", 0);
  localStorage.setItem("cps", 0);
  localStorage.setItem("grannies", 0);
  localStorage.setItem("superGrannies", 0);
  localStorage.setItem("oven", 0);
  localStorage.setItem("superOven", 0);
  localStorage.setItem("kitchen", 0);
  cookies = 0;
  cps = 0;
  grannies = 0;
  superGrannies = 0;
  oven = 0;
  superOven = 0;
  kitchen = 0;
});
