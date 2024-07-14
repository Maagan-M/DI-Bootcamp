class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
//the class Bird logs I'm a bird.🦢

  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
//it's a subclass of Bird  
//the log is called before the super

  const pet = new Flamingo();
//I'm pink. 🌸
//I'm a bird. 🦢
