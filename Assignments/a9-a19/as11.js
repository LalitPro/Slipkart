// Assignment 11

/*
Reverse mein Table dikhani hai 
do input lena hai pehle mein tableOf aur dusre mein tableTill
*/

let tableOf = +prompt("Kiska Table dekhna hai aapko?");
let tableTill = +prompt(`Kahan tak dekhna ${tableOf} ka Table?`);

// ab loop chalakar table likhenge

let tableData = "";

for (let i = tableTill; i > 0; i--) {
  tableData += `<p>${tableOf} x ${i} = ${tableOf * i}</p>`;
}

let tableArea = document.getElementById("tableRow");

tableArea.innerHTML = tableData;
