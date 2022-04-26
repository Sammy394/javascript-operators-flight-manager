function Flights() {
function calculateNumberOfFlights(passengers, capacity) {
    let flights;

    if(passengers % capacity == 0) {
        flights = passengers/capacity;
    } else {
        flights =  Math.floor(passengers/capacity) + 1;
    }
    return flights;
}

return {calculateNumberOfFlights};

}

module.exports = Flights();
