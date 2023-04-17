class Vehicle {
	constructor(make, model, year, color, mileage) {
			this.make = make;
			this.model = model;
			this.year = year;
			this.color = color;
			this.passenger = 0;
			this.speed = 0;
			this.mileage = mileage;
			this.started = false;
			this.numberOfWheels = 0;
			this.fuel = 100
	}

	start() {
		if (this.fuel > 0) {
			console.log("engine started...!!!");
			return (this.started = true);
		} else {
			console.log("engine cannot start...");
			return (this.started = false);
		}
	}

	accelerate() {
		if (this.started) {
				if (this.fuel > 0) {
						console.log(this.speed += 1);
						this.fuel = this.fuel - 1;
				} else {
						console.log("out of fuel.");
						this.stop();
				}
		} else {
				alert("You need to start the engine first.");
		}
}
	decelerate() {
			if (this.started) {
					if (this.fuel > 0) {
							if (this.speed > 0) {
									console.log(this.speed -= 1);
									this.fuel = this.fuel - 1;
							} else {
									console.log(this + " has stopped moving");
									this.fuel = this.fuel - 1;
							}
					} else {
							console.log("out of fuel.");
							this.stop();
					}
			} else {
					alert("You need to start the engine first.");
			}
	}

	stop() {
			console.log('engine off')
			this.started = false;
	}

	typeOfVehicle() {
			if (this.numberOfWheels == 8) {
					console.log(this.model + " " + this.make + " is a Truck");
			} else if (this.numberOfWheels == 4) {
					console.log(this.model + " " + this.make + " is a Car");
			} else if (this.numberOfWheels == 2) {
					console.log(this.model + " " + this.make + " is a Bike");
			} else {
					console.log("Unknown type of vehicle");
			}
	}
}

	//optional methods to code for the Vehicle base class

	drive() {
		accelerate();
	}
	brake() {
		decelerate();
	}

	autoPark() {}

	autoDrive() {}


//Code the Car subclass here, i.e. class Car extends Vehicle ...

class Car extends VehicleModule {
		constructor(make, model, year, color, mileage) {
			super(make, model, year, color, mileage)
			this.maxPassenders = 5
			thiss.passenger = 0
			this.numberOfWheels = 4
			this.maxSpeed = 165
			this.fuel = 15;
			this.scheduledService = false
		}
}







//Creating Instances and Testing Them


//This is an instance of the Vehicle class. You can use it to test your code for the Vehicle class.

let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)


console.log(myCar.loadPassenger(5))
console.log(myCar.checkService())
myCar.start()
myCar.stop()
console.log(myCar.fuel)
myCar.start()
myCar.accelerate()
console.log(myCar.fuel)

//You can use the same instance "v" of the Vehicle class and dot notation to add properties of the Car class to it, but you should also create at least one totally new instance with just the Car class and test it out with Vehicle and Car methods (such as with v.make shown above).


//Create at least two new instances of the Car class and test them here:












//Bonus (optional of course)

//Code the Truck subclass of Vehicle here
