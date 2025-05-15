/**
 * ABSTRACT FACTORY:
 * - defines methods, being used for creating "families of objects" instead of using a direct constructor call
 * - factory methods in concrete factory classes, decides and calls a concrete classes for creation
 * - why: relalted object in same compatability, avoid direct access to concrete classes, support plugin arch.
 * - examples: DB access layer abstractions, grouped UI components, plugins
 */

// abstract products
abstract class Button {
  abstract render(): string;
}
abstract class Checkbox {
  abstract render(): string;
}
// concrete products
class WinButton extends Button {
  render() {
    return "Windows Button";
  }
}
class MacButton extends Button {
  render() {
    return "Mac Button";
  }
}
class WinCheckbox extends Checkbox {
  render() {
    return "Windows Checkbox";
  }
}
class MacCheckbox extends Checkbox {
  render() {
    return "Mac Checkbox";
  }
}

// abstract factory, to be implemented (group - family)
abstract class GuiFactory {
  abstract createButton(): Button;
  abstract createCheckbox(): Checkbox;
}
// family concrete factory
class WinFactory extends GuiFactory {
  createButton() {
    return new WinButton();
  }
  createCheckbox() {
    return new WinCheckbox();
  }
}
// family concrete factory
class MacFactory extends GuiFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox() {
    return new MacCheckbox();
  }
}

/**
 * - details here (client) are totally hidden
 * - can extend new families with no modifications SOLID 'O'
 */
function renderUI(factory: GuiFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  console.log(button.render());
  console.log(checkbox.render());
}

renderUI(new MacFactory());
