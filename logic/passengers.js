function Passengers() {

    function checkedFlightCapacity(flightCapacity, passengersArray) {
        let passengersNumber = 0;
        let passengers;

        for(passengers of passengersArray) {
            passengersNumber += passengers;
        }

        if (passengersNumber > flightCapacity) {
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " a certain number of passengers.")
        }

        return passengersNumber;
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights,
                                               businessSeatsPerFlight, economySeatsPerFlight) {

        let vipPassengersWithBusinessSeats=0, vipPassengersWithEconomySeats=0,
            regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=0;
        let avalibleBusinessSeats = nrOfFlights * businessSeatsPerFlight;
        let avalibleEconomySeats = nrOfFlights * economySeatsPerFlight;

        var vipbusinessConfiguration = {passengers:vipPassengers, seats:avalibleBusinessSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipbusinessConfiguration,
            businessSeatsPerFlight);

        var vipEconomyConfiguration = {passengers:vipbusinessConfiguration.passengers,
            seats:avalibleEconomySeats};
        vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

        var regularBusinessConfiguration = {passengers:regularPassengers,
            seats:vipbusinessConfiguration.seats};
        regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration,
            businessSeatsPerFlight);

        var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers,
            seats:vipEconomyConfiguration.seats};
        regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration,
            economySeatsPerFlight);

        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
                vipPassengersWithEconomySeats:vipPassengersWithEconomySeats,
                regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
                regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
    }

    function updateConfiguration(configuration, seatsPerFlight) {
        let passengersWithSeats = 0;

        while (configuration.passengers > 0) {
            if (configuration.seats > 0) {
                if (configuration.passengers >= configuration.seats) {
                    if (configuration.seats > configuration.seatsPerFlight) {
                        configuration.passengers -= seatsPerFlight;
                        configuration.seats -= seatsPerFlight;
                        passengersWithSeats += seatsPerFlight;
                    } else {
                        configuration.passengers -= configuration.seats;
                        passengersWithSeats += configuration.seats;
                        configuration.seats = 0;
                    }
                 } else {
                     passengersWithSeats += configuration.Passengers;
                     configuration.seats -= configuration.passengers;
                     configuration.passengers = 0;
                }
            } else {
                break;
            }
        }
        return passengersWithSeats;
    }



    return {checkedFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = passengers();
