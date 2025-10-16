"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productUpdate;
(function (productUpdate) {
    productUpdate["ORDERED"] = "ORDERED";
    productUpdate["SHIPPED"] = "SHIPPED";
    productUpdate["DELIVERED"] = "DELIVERED";
    productUpdate["RETURNED"] = "RETURNED";
})(productUpdate || (productUpdate = {}));
var orderStatus = productUpdate.SHIPPED;
console.log("The current order status is: ".concat(orderStatus));
