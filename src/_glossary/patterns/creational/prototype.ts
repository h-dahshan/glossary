/**
 * - the ability of an onject to clone itself, even complex ones, without referring to its class
 * - why: avoiding expensive creations, polymorphic cloning and variations
 * - examples: recreation in design tools like figma, recreation games
 */

interface IPrototypal {
  clone(): NinjaTurtle;
}
type NinjaName = "leonardo" | "donatello" | "raphael" | "michelanglo";
type BandanaColor = "blue" | "purple" | "red" | "orange";
type WeaponName = "katanas" | "borod" | "sais" | "nunchakus";

class Weapon {
  public weaponName;
  public weaponOwner;

  constructor(name: WeaponName, owner: NinjaTurtle) {
    this.weaponName = name;
    this.weaponOwner = owner;
  }
}

class NinjaTurtle implements IPrototypal {
  public ninjaName;
  public bandanaColor;
  public weapon?: Weapon;

  constructor(name: NinjaName, color: BandanaColor) {
    this.ninjaName = name;
    this.bandanaColor = color;
  }

  public arm(weapon: Weapon) {
    this.weapon = weapon;
  }

  public clone() {
    // primitives carried while cloning, can be changed safely
    const cloned = Object.create(this);
    console.log(
      "cloning: base object ->\n",
      cloned,
      "\nPROTO ->\n",
      Object.getPrototypeOf(cloned)
    );

    // objects must not be carried to cloned objects to be changed safely
    if (this.weapon) {
      cloned.weapon = Object.create(this.weapon);
      cloned.weapon.weaponOwner = Object.create(this.weapon.weaponOwner);
    }
    console.log(
      "cloning: self referencing weapon ->\n",
      cloned.weapon,
      "\nPROTO ->\n",
      Object.getPrototypeOf(cloned.weapon)
    );
    console.log(
      "FINAL ->\n",
      cloned,
      "\nPROTO ->\n",
      Object.getPrototypeOf(cloned)
    );

    return cloned as NinjaTurtle;
  }
}

const leo = new NinjaTurtle("leonardo", "blue");
leo.arm(new Weapon("katanas", leo));

console.log("LEO", leo);

console.log("----------------------------------------");

const raph = leo.clone();
console.log("CLONED RAPH", raph);

console.log("----------------------------------------");

console.log("Are we same?", leo === raph);
console.log("Name carried?", leo.ninjaName === raph.ninjaName);
console.log("Color carried?", leo.bandanaColor === raph.bandanaColor);
console.log("Weapon carried?", leo.weapon === raph.weapon);
console.log(
  "Nested weapon owner carried?",
  leo.weapon?.weaponOwner === raph.weapon?.weaponOwner
);

console.log("\n------object references carried?------");
console.log("----------------------------------------");
console.log(leo.weapon?.weaponOwner, "\n", raph.weapon?.weaponOwner);
console.log("----------------------------------------");
console.log("--------------------------------------\n");

console.log(
  "CLONED RAPH, Before Variations\n",
  raph,
  "\nWeapon Owner:\n",
  raph.weapon?.weaponOwner
);
console.log(
  "CLONED RAPH, Referencing Original\n",
  raph.ninjaName,
  raph.bandanaColor,
  raph.weapon
);

console.log("----------------------------------------");

raph.ninjaName = "raphael";
raph.bandanaColor = "red";
raph.arm(new Weapon("sais", raph));

console.log(
  "CLONED RAPH, After Variations\n",
  raph,
  "\nRAPH Weapon Owner: \n",
  raph.weapon?.weaponOwner
);

console.log("----------------------------------------");

console.log(
  "LEO after clone affected?\n",
  leo,
  "\nLEO Weapon Owner after clone affected? \n",
  leo.weapon?.weaponOwner
);
