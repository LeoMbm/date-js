let brussels = new Date();

// Exo1

let usa = new Date(2022, 5, 5, 12, 57).toUTCString();
let iceland = new Date(2022, 5, 5, 8, 57).toUTCString();
let russian = new Date(2022, 5, 5, 11, 57).toUTCString();

console.log("Time in Brussels :" + brussels);
console.log("Time in Alaska :" + usa);
console.log("Time in Iceland :" + iceland);
console.log("Time in Russia :" + russian);

// Exo2

let myBirth = new Date(2002, 11, 3).getTime();

let result = brussels - myBirth;

let numberBetween = Math.floor(result / 3600 / 24 / 1000);

console.log("My Birth :" + numberBetween);

// Exo 2 Function

function getDaysBetween() {
  let passed = new Date(1970);
  let now = new Date().getTime();

  let result = now - passed;

  let number = Math.floor(result / 3600 / 24 / 1000);

  let h1 = document.createElement("h1");
  h1.innerHTML = "Here " + number + " days is passed since " + passed;

  document.body.appendChild(h1);
}

getDaysBetween();

// Exo 3
let div = document.createElement("div");
div.className = "input-hours";
let input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("placeholder", "Give me Hours");
let pTime = document.createElement("p");
let time = new Date();
pTime.innerHTML = time;
document.body.appendChild(div);
div.appendChild(pTime);
div.appendChild(input);

input.addEventListener("keyup", calculateHours);

function calculateHours() {
  let dateNow = Date.now();
  let value = input.value * 3600 * 1000;
  let result = dateNow + value;
  pTime.innerHTML = new Date(result);
  //   console.log(result);
}
