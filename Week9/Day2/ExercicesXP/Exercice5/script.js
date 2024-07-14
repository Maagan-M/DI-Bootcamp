class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};
//no, it does not call super(name)

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
//it works as it correctly calls super(name) to initialize the name property and then set size property

class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};
// no, as name is not provided as a parameter

class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};
//no, it does not call super(name)