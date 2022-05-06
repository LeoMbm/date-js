// Create dynamiclly content

// Outdoor
let section = document.createElement("section");
section.setAttribute("id", "calendar");

let leftDiv = document.createElement("div");
leftDiv.className = "calendar-paper";

let rightDiv = document.createElement("div");
rightDiv.className = "calendar-time";

document.body.appendChild(section);
section.appendChild(leftDiv);
section.appendChild(rightDiv);

// Indoor
let header = document.createElement("div");
header.className = "calendar-header";

let middle = document.createElement("div");
middle.className = "calendar-middle";

let footer = document.createElement("div");
footer.className = "calendar-footer";

leftDiv.appendChild(header);
leftDiv.appendChild(middle);
leftDiv.appendChild(footer);

// Date header

let day = new Date();
let weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

let n = weekday[day.getDay()];
let dayContainer = document.createElement("div");
dayContainer.className = "day-container";

let dayInCalendar = document.createElement("h2");
dayInCalendar.setAttribute("id", "day");

dayInCalendar.innerHTML = n;

header.appendChild(dayContainer);
dayContainer.appendChild(dayInCalendar);
console.log(n);
