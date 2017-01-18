product = require('../app/objects/product.js');
assert = require('chai').assert;

describe("Describe the object Product", function() {

    it("It return the product name", function() {
        var p = new product();
        console.log(p.name);
        assert(p.name, "Authors name");
    });

    it("It return the product print function", function() {
        var p = new product();
        p.print();
        assert(p.print, 'prototype test');
    });

});
