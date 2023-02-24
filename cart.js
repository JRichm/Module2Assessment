///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
console.log(`\nPROBLEM ONE`);

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce((a, c) => a.price === undefined ? a + c.price : a.price + c.price);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
console.log(`\nPROBLEM TWO`);

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return ((cartTotal * (tax + 1)) - couponValue);
}

console.log(calcFinalPrice(127.63, 25, 0.06));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    model customer needs to have a
    name - the name of the customer
    email - email of the customer for contact between them and business
    customer id - how we keep track of our online customers
    items in cart - a list of items that the customer has selected for checkout

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
console.log(`\nPROBLEM THREE`);

let newCustomer = {
    name: 'Fred',
    email: 'fredjenkins22@youmail.com',
    id: 12498,
    itemsInCart: ['meatballs', 'icecream', 'energy drink']
}

console.log(newCustomer);