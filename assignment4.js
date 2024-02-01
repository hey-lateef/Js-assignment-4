// Q1 Solution
function createCounter() {
    let counter = 0; 
    return function() {
        counter += 1; 
        return counter;
    };
}

const counter = createCounter(); 

console.log(counter()); 
console.log(counter()); 

// Q2 Solution
let order = {
    orderId: "123456",
    productName: "Laptop",
    quantity: 2,
};
  
const { orderId: id, productName: names, quantity: qty } = order; 
console.log(id, names, qty); 

// Q3 Solution
 function shoppingCart() {
     let cart = [];
    
     return {
         getCartItems: function() {
             return cart;
         }
     };
 }

// const cart = shoppingCart();
// console.log('Cart Items:', cart.getCartItems()); 

// Q4 Solution
function shoppingCart() {
    let cartItems = []; 

    function add(item) {
        const existingItem = cartItems.find(cartItem => cartItem.productId === item.productId); 
        if (existingItem) {
            existingItem.quantity += 1;
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

cart1.add(product1); 
cart1.add(product2); 
cart1.add(product1); 

console.log('Cart Items:', cart1.getCartItems()); 

// Q5 Solution
function shoppingCart() {
    let cartItems = []; 

    function add(item) {
        const existingItem = cartItems.find(cartItem => cartItem.productId === item.productId); 
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({...item, quantity: 1}); 
        }
    }

    function remove(productId) {
        const index = cartItems.findIndex(cartItem => cartItem.productId === productId);
        if (index !== -1) {
            const itemToRemove = cartItems[index];
            if (itemToRemove.quantity > 1) {
                itemToRemove.quantity -= 1;
            } else {
                cartItems.splice(index, 1);
            }
        }
    }

    function getCartItems() {
        return cartItems; 
    }

    return { 
        add, 
        remove,
        getCartItems 
    };
}

const cart2 = shoppingCart();

const product3 = { productId: 1, name: 'Product 1', price: 10 };
const product4 = { productId: 2, name: 'Product 2', price: 20 };

cart2.add(product1); 
cart2.add(product2); 
cart2.add(product1);

console.log('Cart Items:', cart2.getCartItems());

cart2.remove(1); // Remove one instance of Product 1

console.log('Cart Items after removing Product 1:', cart2.getCartItems());

// Q6 Solution
// Task 1: Create Playlist
function createPlaylist(playlistName) {
    let playlist = [];

    return {
        addSong: function(songName, artist) {
            playlist.push({ songName, artist });
        },
        listSongs: function() {
            if (playlist.length === 0) {
                console.log(`${playlistName} Playlist is empty.`);
            } else {
                console.log(`${playlistName} Playlist: ${playlist.map(song => `${song.songName} by ${song.artist}`).join(', ')}`);
            }
        }
    };
}

// Task 2: Add Song to Playlist
function addSong(playlist, songName, artist) {
    playlist.addSong(songName, artist);
}

// Task 3: List Songs in Playlist
function listSongs(playlist) {
    playlist.listSongs();
}

const myPlaylist = createPlaylist('My Favorites');

addSong(myPlaylist, "Song1", "Artist1");
addSong(myPlaylist, "Song2", "Artist2");
addSong(myPlaylist, "Song3", "Artist3");

listSongs(myPlaylist); 
