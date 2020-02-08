var person = {
  name: "John",
  surname: "Doe",
  married: true,
  age: 30,
  info: {
    married: false,
    address: {
      town: "Montreal",
      street: "Westmount",
      house: 11,
      apartment: 40
    }
  }
};

Object.prototype.iterate = function(condition, callback, all = true) {
  function expand(object) {
    for (key in object) {
      if (condition(object, key)) {
        callback(object, key);
        if (all) return;
      }

      if (typeof object[key] === "object") expand(object[key]);
    }
  }

  expand(this);
  delete this.field;
};

person.iterate(
  (object, key) => key == "street",
  (object, key) => (b = true),
  (all = false)
);
