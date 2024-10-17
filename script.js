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
/* const upgradeslvl1 = {
  grannies[cost:10,increase: 1],oven["cost":15, increase:2]
}
/const upgradeslvl2 = {
  superGrannies[cost:25,increase 15] superOven[cost:25, increase:30]
}*/
//Grannies
grabGranny.addEventListener("click", function () {
  if (cookies >= 10) {
    cps = cps + 1;
    cookies = cookies - 10;
    grannies = grannies + 1;
    dave();
  }
});
grabSuperGranny.addEventListener("click", function () {
  if (grannies >= 25) {
    cps = cps - 25 + 15;
    grannies = grannies - 25;
    superGrannies = superGrannies + 1;
    dave();
  }
});
grabOven.addEventListener("click", function () {
  if (cookies >= 10) {
    cps = cps + 1;
    cookies = cookies - 10;
    oven = oven + 1;
    dave();
  }
  /*else {
    alert 
    }*/
});
grabSuperOven.addEventListener("click", function () {
  if (oven >= 25) {
    cps = cps - 25 + 15;
    oven = oven - 25;
    superOven = superOven + 1;
    dave();
  }
});
kitchens.addEventListener("click", function () {
  if ((superOven >= 10, superGrannies >= 10)) {
    cps = cps - 300 + 500;
    superOven = superOven - 10;
    superGrannies = superGrannies - 10;
    kitchen = kitchen + 1;
    dave();
  }
});
//

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
