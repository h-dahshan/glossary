/**
 * - objects of a superclass should be replaceable with objects of a subclass,
 *      without breaking the application.
 */

// BAD
class _Bird {
  fly() {
    console.log("I'm walking!");
  }
}
class _Ostrich extends _Bird {
  fly() {
    throw new Error("Ostriches can't fly!");
  }
}

// GOOD
class Bird {
  walk(): void {
    console.log("I'm walking!");
  }
}
class Eagle extends Bird {
  walk(): void {
    console.log("Eagle is walking!");
  }

  fly() {
    console.log("Eagle is flying!");
  }
}
class Ostrich extends Bird {
  walk(): void {
    console.log("Ostrich is walking!");
  }

  run() {
    console.log("Ostrich is running!");
  }
}
