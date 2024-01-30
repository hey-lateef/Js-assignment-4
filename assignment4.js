//Q1 Solution
function createCounter() {
    let counter = 0; // This is the private variable
    return function() {
        counter += 1; // This is the inner function that modifies the variable
        return counter;
    };
}

const counter = createCounter(); // This is the closure

console.log(counter()); 
console.log(counter()); 

//Q2  Solution
let order = {
    orderId: "123456",
    productName: "Laptop",
    quantity: 2,
  };
  
  const { orderId: id, productName: names, quantity: qty } = order; 
  console.log(id, names, qty); 



//Q3 Solution
function shoppingCart() {
    let cart = [];
    
    return {
        getCartItems: function() {
            return cart;
        }
    };
}

const cart = shoppingCart();
console.log('Cart Items:', cart.getCartItems()); 

console.log('Cart Items:', cart.getCartItems()); 


//Q4 solution
function shoppingCart() {
    let cartItems = []; 

    function add(item) {
        const existingItem = cartItems.find(cartItem => cartItem.productId === item.productId); 
        if (existingItem) {
            existingItem.quantity += item.quantity; 
        } else {
            cartItems.push({...item, quantity: 1}); 
        }
    }

    function getCartItems() {
        return cartItems; 
    }

    return { 
        add, 
        getCartItems 
    };
}

const cart1 = shoppingCart(); // This creates the closure

const product1 = { productId: 1, name: 'Product 1', price: 10 };
const product2 = { productId: 2, name: 'Product 2', price: 20 };

cart.add(product1); 
cart.add(product2); 
cart.add(product1); 

console.log('Cart Items:', cart.getCartItems()); 



