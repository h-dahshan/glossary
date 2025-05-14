/**
 * - a class can be inherited by others, reusability
 */

class Animal {
  constructor(public name: string) {}

  move(distance: number) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  setName(name: string) {
    this.name = name;
  }
  bark() {
    console.log(this.name + "is Woofing!");
  }
}
const d = new Dog("Rika");
console.log(d.name);
d.move(2);
d.setName("Riko");
d.bark();
