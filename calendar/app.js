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

function getDay() {
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
}

getDay();

// Date Middle

function getNumbMonth() {
  let date = new Date();

  let monthYear = new Array(12);
  monthYear[0] = "Jan";
  monthYear[1] = "Feb";
  monthYear[2] = "Mar";
  monthYear[3] = "Apr";
  monthYear[4] = "May";
  monthYear[5] = "May";
  monthYear[6] = "Jul";
  monthYear[7] = "Aug";
  monthYear[8] = "Sep";
  monthYear[9] = "Oct";
  monthYear[10] = "Nov";
  monthYear[11] = "Dec";

  let numberDay = date.getDay();
  let month = monthYear[date.getMonth()];

  let middleDiv = document.createElement("div");
  middleDiv.className = "middle-container";

  let textNumber = document.createElement("p");
  textNumber.className = "middle-number";
  textNumber.innerHTML = numberDay;

  let elemMonth = document.createElement("p");
  elemMonth.className = "middle-month";
  elemMonth.innerHTML = month;

  middle.appendChild(middleDiv);

  middleDiv.appendChild(textNumber);
  middleDiv.appendChild(elemMonth);

  console.log(month + numberDay);
}

getNumbMonth();

// Year footer

function getYear() {}
