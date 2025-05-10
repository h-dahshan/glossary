/**
 * - hiding complexities and showing essentails
 */

// class can be inherited
abstract class Vehicle {
  constructor(public type: string) {}

  // no implementation, derived classes must implement
  abstract move(): void;

  // basic functionality
  honk() {
    console.log("Beep!");
  }
}

// @ts-expect-error can not be inistantiated
const v = new Vehicle();

class Car extends Vehicle {
  constructor() {
    super("car");
  }

  // abstract method implementation
  move(): void {
    console.log(`${this.type} is moving.`);
  }
}

const c = new Car();
