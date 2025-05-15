/**
 * - why: ensuring there's only one instance of a class
 * - examples: loggers, configs, DB interface, ...
 */

class Singleton {
  // static instance attached to class def
  private static onlyInstance: Singleton;
  // private data for operations
  private iAm = "I am Singleton!";

  // making private - no use of 'new Singleton()'
  private constructor() {}
  static get instance(): Singleton {
    if (Singleton.onlyInstance) {
      return Singleton.onlyInstance;
    }

    Singleton.onlyInstance = new Singleton();
    return Singleton.onlyInstance;
  }

  // methods for operations
  public whoAreU() {
    return this.iAm;
  }
}

const a = Singleton.instance;
const b = Singleton.instance;

console.log(a === b); // true
console.log(a.whoAreU());
