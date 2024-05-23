let winningTickets = [
    {tixNum: "1001001", expires: "2022-09-05", prize: 100000},
    {tixNum: "1298711", expires: "2022-10-10" , prize: 250000},
    // others not shown
   ];

   
   window.onload = function () {
    loadParksTable();
   };
   function loadParksTable() {
    // Find the table
    let table = document.getElementById("winningTicketsTbl");
    // loop through the array
    let numWinningTickets = nationalParksArray.length;
    for(let i=0; i < numWinningTickets; i++) {
    buildParkRow(table, nationalParksArray[i]);
    }
   }
   function buildParkRow(table, thePark) {
    // Create an empty <tr> element and add it to the last 
    // position of the table
    let row = table.insertRow(-1); 
    // Create new cells (<td> elements) and add text
    let cell1 = row.insertCell(0);
    cell1.innerHTML = thePark.LocationName;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = thePark.Phone;
    let cell3 = row.insertCell(2);
    cell3.innerHTML = thePark.ZipCode;
    let cell4 = row.insertCell(2);
    cell4.innerHTML = thePark.ZipCode;
   }
    //cell2.innerHTML = "$" + thePark.prize.toFixed(2);
   // let cell3 = row.insertCell(2);
   // cell3.innerHTML = thePark.expires;