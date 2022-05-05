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
