/**
 * FACTORY METHOD:
 * - defines a method, which should be used for creating objects instead of using a direct constructor call
 * - factory method in concrete factory classes, decides and calls a concrete classes for creation
 * - why: no need to know most underlying implementation, just its interface, factory decides
 *        you can extend without other types modification, SOLID 'O' + control over instantiation
 * - examples: multiple DB access layers, multiple loggers, multiple UIs
 */

type MediumTypes = "ROAD" | "SEA";

// abstract base Transporter class, to be extended
abstract class Transporter {
  protected name;
  protected medium;
  constructor(name: string, medium: MediumTypes) {
    this.name = name;
    this.medium = medium;
  }
  // shared logic across all transporters
  protected startTransportation() {
    console.log(
      `Great, ${this.name}'ll start the transportation, through ${this.medium}!`
    );
  }
}
// transporter interface, must be implemented in subclasses
interface ITransporter {
  start(): void;
}
// concerete class
class SuperCar extends Transporter implements ITransporter {
  constructor() {
    super("LAMBO", "ROAD");
  }
  start() {
    this.startTransportation();
    // prepare the car, load the packages
  }
}
// concerete class
class Ship extends Transporter implements ITransporter {
  constructor() {
    super("TAITANIC", "SEA");
  }
  start() {
    this.startTransportation();
    // prepare the ship, load the containers
  }
}

/**
 * - basic abstract logistics factory class
 * - declares the factory method that should be implemented
 */
abstract class Logistics {
  public abstract createTransporter(): Transporter;
  public checkPayment() {
    console.log("Payment done, we are ready to move!");
  }
}
/**
 * - concrete factories below
 * - each implements factory method
 * - each decides what class to create from
 */
class RoadLogistics extends Logistics {
  createTransporter() {
    return new SuperCar(); // decision made
  }
}
class SeaLogistics extends Logistics {
  createTransporter() {
    return new Ship(); // decision made
  }
}

const logistics = new RoadLogistics();
console.log(logistics);
logistics.checkPayment();
const transporter = logistics.createTransporter();
console.log(transporter);
transporter.start();
