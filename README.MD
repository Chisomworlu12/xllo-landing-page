Shopping Cart Application
A simple shopping cart with persistent storage using localStorage.
Features

Add/remove items from cart
Increase/decrease quantities
Real-time price calculation
Cart persists after page reload
Checkout button appears only when cart has items

Features
project/

- index.html
- style.css
- script.js
- images/
  - logo.png
  - user1.jpg
  - user2.jpg
  - user3.jpg
  - headset-user.jpg
  - headset-Bg.jpg
  - headset-1.jpg
  - cart-img/
    - cart1.png
    - cart2.png

Clone the repository
Open index.html in your browser
No dependencies required!

Usage

Add to Cart: Click "Add to Cart" on any product
Increase Quantity: Click the + button
Remove Item: Click the Remove button (decreases by 1, removes if quantity is 1)
View Total: Total price updates automatically

How It Works
Cart data is stored in browser's localStorage and automatically saves on every change.
javascript// Cart item structure
{
id: 1,
name: "Product Name",
price: 20.00,
image: "image.jpg",
quantity: 2
}
Browser Support
Works on all modern browsers (Chrome, Firefox, Safari, Edge).
Note: Cart data won't persist in private/incognito mode.
License
MIT License

Made with ❤️
