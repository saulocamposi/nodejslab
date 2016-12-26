
function Product(){}

Product.prototype.print = function () {
  console.log("prototype test");
};

productObject = new Product();
productObject.print();

Product.prototype.name = "Authors name";

productObject = new Product();
console.log(Product.name);
