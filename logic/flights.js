function Flights() {


function calculateNumberOfFlighs(passengers, capactiy) {
  let flights;

  if(passengers % capactiy == 0) {
    flights = passengers/capactiy;
  } else {
    flights = Math.floor(passengers/capactiy) + 1;
  }
  return flights;
}

return {calculateNumberOfFlighs};

}
