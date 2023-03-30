class Animal {
    constructor(public name: string, public age: number, public sound: string) {}
  
    makeSound(): void {
      console.log(`${this.name} makes ${this.sound} sound`);
    }
  }
  
  class Mammal extends Animal {
    constructor(name: string, age: number, sound: string = "roar") {
      super(name, age, sound);
    }
  }
  
  class Bird extends Animal {
    constructor(name: string, age: number, sound: string = "chirp") {
      super(name, age, sound);
    }
  }
  
  class Fish extends Animal {
    constructor(name: string, age: number, sound: string = "blub") {
      super(name, age, sound);
    }
  }
  
  // example usage
  const lion = new Mammal("Lion", 5);
  lion.makeSound(); // Lion makes roar sound
  
  const parrot = new Bird("Parrot", 2, "squawk");
  parrot.makeSound(); // Parrot makes squawk sound
  
  const goldfish = new Fish("Goldfish", 1);
  goldfish.makeSound(); // Goldfish makes blub sound
  