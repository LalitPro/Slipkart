// Assignment 10

/*
User se Input lena hai ki konse din(Day) ka deekhna hai
Monday => 9am to 5pm
Sunday => Closed
Saturday => 9am to 12noon
*/

// User se Input lena

// day => Day Input By User

let day = prompt("Kis din ki timing janna hai?");

// day ko Lower Case mein badal lena chaiye

day = day.toLowerCase();

// if , else if & if statetment for conditions

if (day === "monday") {
  document.write(`
        Monday timing is => 9am to 5pm
        `);
} else if (day === "sunday") {
  document.write(`
        On Sunday bank is => Closed
        `);
} else if (day === "saterday") {
  document.write(`
         Saterday timing is => 9am to 12noon
        `);
} else if (day == "tuesday" || "wednessday" || "thursday" || "friday") {
  document.write("Iss din ka time nhi pata hai");
}
