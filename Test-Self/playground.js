const obj = {
    a: 10,
    b: function () {
      console.log(this.a);
      const inner = () => {
        console.log(this.a);
      };
      inner();
    },
  };
  
  const b = obj.b;
  b(); // Output?
  obj.b(); // Output?
  