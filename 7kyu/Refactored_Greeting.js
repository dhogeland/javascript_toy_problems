class Person {
  constructor(name, greet) {
    this.name = name;
    this.greet = function(hello) {
      return "Hello " + hello + ", my name is " + this.name;
    }
  }
}
