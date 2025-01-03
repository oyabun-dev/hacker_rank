const banks = [[7, 1, 3], [2, 8, 7], [1, 9, 5]];
const customersTotalWealth = new Array();
for (const customer of banks) {
    let customerWealth = 0;
    customerWealth = customer.reduce((acc, curr) => acc + curr);
    customersTotalWealth.push(customerWealth);
}

let RichestCustomer = Math.max(...customersTotalWealth);

console.log(RichestCustomer);