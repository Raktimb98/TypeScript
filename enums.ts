enum productUpdate{
    ORDERED = "ORDERED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    RETURNED = "RETURNED"
}

const orderStatus: productUpdate =  productUpdate.SHIPPED;
console.log(`The current order status is: ${orderStatus}`);

export {};