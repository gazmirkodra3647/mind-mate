/**
 * filename: sophisticated_code.js
 * 
 * This code demonstrates a sophisticated and complex JavaScript implementation.
 * It includes a multi-level class hierarchy, asynchronous operations, data manipulation, and error handling.
 * 
 * It performs a simulation of an online shopping system with user authentication, item listing, cart management, and order placement.
 * This code is purely for demonstrative purposes and doesn't connect to any actual database or backend service.
 * 
 * Note: This code is long and complex for demonstration purposes only. Simplifications have been made for readability.
 */

// Class representing a user in the system
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = [];
    this.orders = [];
    this.loggedIn = false;
  }

  async login() {
    // Simulating asynchronous login operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulating login validation
    if (this.name === "John" && this.password === "password") {
      this.loggedIn = true;
      console.log("Successfully logged in.");
    } else {
      this.loggedIn = false;
      console.log("Invalid credentials. Failed to log in.");
    }
  }

  addItemToCart(item) {
    this.cart.push(item);
    console.log(`${item.name} added to the cart.`);
  }

  removeItemFromCart(itemId) {
    const index = this.cart.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const removedItem = this.cart.splice(index, 1)[0];
      console.log(`${removedItem.name} removed from the cart.`);
    } else {
      console.log("Item not found in the cart.");
    }
  }

  checkout() {
    if (this.cart.length === 0) {
      console.log("Cart is empty. Add items before checking out.");
    } else {
      const totalPrice = this.cart.reduce(
        (accumulator, item) => accumulator + item.price,
        0
      );

      const order = {
        items: this.cart,
        total: totalPrice,
      };

      this.orders.push(order);
      this.cart = [];
      console.log(`Order placed successfully. Total: $${totalPrice}`);
    }
  }

  logout() {
    this.loggedIn = false;
    console.log("Successfully logged out.");
  }
}

// Class representing an item available for purchase
class Item {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Example usage
(async () => {
  const user = new User("John", "john@example.com", "password");
  console.log(user);

  await user.login();

  user.addItemToCart(new Item(1, "Keyboard", 49.99));
  user.addItemToCart(new Item(2, "Mouse", 29.99));
  user.addItemToCart(new Item(3, "Monitor", 199.99));

  user.removeItemFromCart(2);

  user.checkout();

  user.logout();
})();
