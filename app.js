let brussels = new Date();

let usa = new Date(2022, 5, 5, 12, 57).toUTCString();
let iceland = new Date(2022, 5, 5, 8, 57).toUTCString();
let russian = new Date(2022, 5, 5, 11, 57).toUTCString();

console.log("Time in Brussels :" + brussels);
console.log("Time in Alaska :" + usa);
console.log("Time in Iceland :" + iceland);
console.log("Time in Russia :" + russian);

let myBirth = new Date(2002, 11, 3).getTime();

let result = brussels - myBirth;

let numberBetween = Math.floor(result / 3600 / 24 / 1000);

console.log("My Birth :" + numberBetween);
