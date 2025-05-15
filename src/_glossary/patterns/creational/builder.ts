/**
 * - separating the object instantiation (building) from its definition/declaration, into individual steps
 * - why: lightweight constructor's args and logic, same object but alot of variations
 * - example: complex representations with many parts/steps like computer, house, etc. representation
 */

/**
 * concrete product (pizza), has too many ways to be built
 */
class Pizza {
  public cook() {
    console.log("Putting in oven...");
  }
  public pack() {
    console.log("Packaging the pizza...");
  }
}

/**
 * builder interface
 * contains the steps of creating a product (pizza)
 * the steps methods return the builder itself, for chaining
 */
interface IPizzaBuilder {
  makeDough(): PizzaBuilder;
  addSauce(): PizzaBuilder;
  addMainTopping(topping: string): PizzaBuilder;
  addOlives(): PizzaBuilder;
  addVegetables(): PizzaBuilder;
  addCheese(): PizzaBuilder;
}
/**
 * concrete builder
 * internally it creates an empty product (pizza)
 * contains the implementation of each step of pizza production
 * the builder can reset itself for further use with the same instance
 */
class PizzaBuilder implements IPizzaBuilder {
  private pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  private reset(): void {
    this.pizza = new Pizza();
  }

  makeDough() {
    // you can elevate the dough in builder and make checks later on
    // you can play here with the product itself as needed
    console.log("Mmm, creating the dough!");
    return this;
  }
  addSauce() {
    console.log("Adding sauce...");
    return this;
  }
  addMainTopping(topping: string) {
    console.log(`Adding main ${topping}...`);
    return this;
  }
  addVegetables() {
    console.log("Adding vegetables...");
    return this;
  }
  addOlives() {
    console.log("Adding olives...");
    return this;
  }
  addCheese() {
    console.log("Adding cheese...");
    return this;
  }

  result(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }
}

const pizzaBuilder = new PizzaBuilder();
const pizzaPepperoni = pizzaBuilder
  .makeDough()
  .addSauce()
  .addMainTopping("pepperoni")
  .addVegetables()
  .addOlives()
  .addCheese()
  .result();
pizzaPepperoni.cook();
pizzaPepperoni.pack();

console.log(pizzaPepperoni);
console.log("------------");

/**
 * builders director interface
 * contains different types of building
 */
interface IPizzaDirector {
  buildPizza(topping: string): Pizza;
  buildOliveFreePizza(topping: string): Pizza;
}
/**
 * concrete builders director
 * takes a builder that implements the builder's interface
 * manipulate and build different variants of the product (pizza)
 */
class PizzaDirector implements IPizzaDirector {
  private builder;

  constructor(builder: IPizzaBuilder) {
    this.builder = builder;
  }

  buildPizza(topping: string): Pizza {
    return this.builder
      .makeDough()
      .addSauce()
      .addMainTopping(topping)
      .addVegetables()
      .addOlives()
      .addCheese()
      .result();
  }
  buildOliveFreePizza(topping: string): Pizza {
    return (
      this.builder
        .makeDough()
        .addSauce()
        .addMainTopping(topping)
        .addVegetables()
        .addCheese()
        //   .addOlives()
        .result()
    );
  }
}

const kitchenDirector = new PizzaDirector(new PizzaBuilder());

const pizzaPepperonii = kitchenDirector.buildPizza("pepperonii");
pizzaPepperonii.cook();

console.log(pizzaPepperonii);
console.log("-------------");

const pizzaPepperoniiOliveFree =
  kitchenDirector.buildOliveFreePizza("pepperonii");
pizzaPepperoniiOliveFree.cook();

console.log(pizzaPepperoniiOliveFree);
