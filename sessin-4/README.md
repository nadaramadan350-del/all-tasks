# JavaScript Async Tasks

This project demonstrates four common asynchronous JavaScript patterns:

1. `getProduct(id)` resolves a product name or rejects when the ID is invalid.
2. `calculateShipping(weight)` validates a package weight and resolves the shipping cost.
3. `registerUser(name, email)` waits for a simulated verification email before completing registration.
4. `getUserProfile(id)` fetches a user from JSONPlaceholder and handles API errors.

## Run

Open `index.html` in a browser. The output appears on the page and in the browser console.

The API task needs an internet connection. If the browser blocks the request when opening the file directly, serve the folder with any local static server and open the generated local URL.
