// JavaScript Practice Tasks

// 1. Synchronous Execution
console.log("1. Synchronous Execution");

function synchronousMessages() {
  console.log("Start");
  console.log("Middle");
  console.log("End");
}

function firstStep() {
  console.log("Step 1: firstStep started");
  secondStep();
  console.log("Step 3: firstStep finished");
}

function secondStep() {
  console.log("Step 2: secondStep executed");
}

function sequentialCalculations() {
  const sum = 8 + 4;
  const product = sum * 3;
  const result = product - 6;

  console.log("Sum:", sum);
  console.log("Product:", product);
  console.log("Final result:", result);
}

function square(number) {
  return number * number;
}

function addTen(number) {
  return number + 10;
}

function dependentFunctionFlow() {
  const squaredNumber = square(5);
  const finalNumber = addTen(squaredNumber);

  console.log("5 squared:", squaredNumber);
  console.log("After adding 10:", finalNumber);
}

synchronousMessages();
firstStep();
sequentialCalculations();
dependentFunctionFlow();

// 2. Asynchronous Basics: setTimeout
console.log("\n2. Asynchronous Basics");

function helloAndWorld() {
  console.log("Hello");
  setTimeout(() => console.log("World"), 2000);
}

function printNumbersWithDelay() {
  for (let number = 1; number <= 5; number += 1) {
    setTimeout(() => console.log("Delayed number:", number), number * 1000);
  }
}

function loadingMessage() {
  console.log("Loading...");
  setTimeout(() => console.log("Done"), 3000);
}

function delayedMessage(message, delay) {
  setTimeout(() => console.log("Message:", message), delay);
}

helloAndWorld();
printNumbersWithDelay();
loadingMessage();
delayedMessage("This message arrived later.", 1500);

// 3. JavaScript Runtime and Event Loop
console.log("\n3. JavaScript Runtime and Event Loop");

function eventLoopExample() {
  console.log("Event loop: 1 - synchronous");

  setTimeout(() => {
    console.log("Event loop: 3 - timer callback");
  }, 0);

  console.log("Event loop: 2 - synchronous");
}

function lineByLineExample() {
  console.log("Line 1: starts immediately");

  setTimeout(() => {
    console.log("Line 3: asynchronous callback runs later");
  }, 0);

  console.log("Line 2: runs before the callback");
}

function callStackExample() {
  console.log("Call stack: task starts");

  setTimeout(() => {
    console.log("Call stack: delayed task runs after synchronous work");
  }, 0);

  console.log("Call stack: synchronous work finishes");
}

console.log("Predicted output for eventLoopExample:");
console.log("1 - synchronous, 2 - synchronous, 3 - timer callback");
eventLoopExample();
lineByLineExample();
callStackExample();

// 4. Callback Functions
console.log("\n4. Callback Functions");

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function calculate(firstNumber, secondNumber, operationCallback) {
  const result = operationCallback(firstNumber, secondNumber);
  console.log("Calculator result:", result);
}

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function loadData(callback) {
  console.log("Loading data...");

  setTimeout(() => {
    const data = { userId: 1, name: "Mona" };
    callback(data);
  }, 1000);
}

function login(username, password, callback) {
  setTimeout(() => {
    if (username === "student" && password === "1234") {
      callback(null, { username });
      return;
    }

    callback(new Error("Invalid username or password"));
  }, 500);
}

function authenticateUser() {
  login("student", "1234", (error, user) => {
    if (error) {
      console.error("Login failed:", error.message);
      return;
    }

    console.log(`Login successful for ${user.username}`);
    console.log("Next step: open the dashboard");
  });
}

greet("Sara", () => {
  console.log("Greeting callback executed.");
});

calculate(10, 5, add);
calculate(10, 5, subtract);
calculate(10, 5, multiply);

loadData((data) => {
  console.log("Data loaded:", data);
});

authenticateUser();
