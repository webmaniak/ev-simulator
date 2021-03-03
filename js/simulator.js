/*
* EV simulator: computes the difference between a fuel-driven engine and an electric engine
*               with regard to the initial investment.
*/

class Vehicle {
    constructor(consumption, capacity, autonomy, tax_costs, insurance_costs, total_value) {
        this.consumption = consumption;
        this.capacity = capacity;
        this.autonomy = autonomy;
        this.tax_costs = tax_costs;
        this.insurance_costs = insurance_costs;
        this.total_value = total_value;
    }
}

class FuelVehicle extends Vehicle {

    getCostsPer100km(pricePerLiter) {
        return (this.consumption * pricePerLiter).toFixed(1);
    }
}

class ElectricVehicle extends Vehicle {

    getCostsPer100km(electricityPrice) {
        return (this.consumption * electricityPrice / 100).toFixed(1);
    }
}
