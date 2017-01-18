var Product;

Product = function Product(){}

Product.prototype.print = function () {
  console.log("prototype test");
};

Product.prototype.name = "Authors name";

module.exports = Product;
