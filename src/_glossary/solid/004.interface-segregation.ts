/**
 * - clients should not be forced to depend on interfaces they do not use.
 */

// BAD
interface _Working {
  work(): void;
  eat(): void;
}
class _Robot implements _Working {
  work() {
    console.log("Working!");
  }

  eat() {
    throw new Error("Robot doesn't eat!");
  }
}

// GOOD
interface Working {
  work(): void;
}
interface Eating {
  eat(): void;
}

class Human implements Working, Eating {
  work() {
    console.log("Working!");
  }

  eat() {
    console.log("Eating!");
  }
}

class Robot implements Working {
  work() {
    console.log("Working!");
  }
}
