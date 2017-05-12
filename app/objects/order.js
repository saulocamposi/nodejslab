var Order;

Order = function Order(){}

Order.prototype.first = function () {
  console.log("prototype order");
};

module.exports = Order;
