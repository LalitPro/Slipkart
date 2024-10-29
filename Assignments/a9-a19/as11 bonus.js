// Assignment 11

/*
Reverse mein Table dikhani hai 
do input lena hai pehle mein tableOf aur dusre mein tableTill
*/

let tableOf = +prompt("Kiska Table dekhna hai aapko?");
let tableTill = +prompt(`Kahan tak dekhna ${tableOf} ka Table?`);

// ab loop chalakar table likhenge

let tableData = [];

for (let i = tableTill; i > 0; i--) {
  if (i % 2 === 0) {
    tableData += `<p class="bg-red-500">${tableOf} x ${i} = ${tableOf * i}</p>`;
  } else {
    tableData += `<p class="bg-green-500">${tableOf} x ${i} = ${
      tableOf * i
    }</>`;
  }
}

let tableArea = document.getElementById("tableRow");

tableArea.innerHTML = tableData;
