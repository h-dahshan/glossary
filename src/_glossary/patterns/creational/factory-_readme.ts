/**
 * - a factory is an ambiguous term that stands for a
 *      function, method or class that supposed to be producing something
 * - a factory may be:
 *      - function or method that creates a UI component
 *      - class that creates users
 *      - static method that calls a class constructor in a certain way
 *      - one of the creational design patterns
 */

/**
 * - Simple factory pattern describes a class having one "creation" method
 *      with large conditional creation
 *      based on args the method decides
 * - BUT, the following is not a creational factory pattern, it's one step inside it
 */

type UserType = "SWE" | "ACC" | "HR";

class SoftwareEngineer {}
class Accountant {}
class HrSpecialist {}

abstract class UserFactory {
  public static create(type: UserType) {
    switch (type) {
      case "SWE":
        return new SoftwareEngineer();
      case "ACC":
        return new Accountant();
      case "HR":
        return new HrSpecialist();

      default:
        throw new Error("Creation Error: not supported type");
    }
  }
}

UserFactory.create("SWE");
UserFactory.create("ACC");
UserFactory.create("HR");
