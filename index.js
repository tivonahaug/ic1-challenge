const fs = require("fs");

const rawFile = fs.readFileSync("flights.json");
const flights = JSON.parse(rawFile);

function printFlightSummary() {
  // TODO
}

function findFlightsWithNumLayovers() {
  // TODO
}
function findFlights() {
  // TODO
}

console.log("Flight Summaries:");
printFlightSummary();

console.log("Flights with layovers:");
findFlightsWithNumLayovers(0, "outbound");
findFlightsWithNumLayovers(1, "return");
findFlightsWithNumLayovers(2, "outbound");

console.log("Flights that match filters:");
findFlights({ numLayovers: 0, minPrice: 0, maxPrice: 500 }, "outbound");
findFlights(
  { numLayovers: 1, minPrice: 0, maxPrice: 1000, maxTotalDuration: 500 },
  "return"
);
