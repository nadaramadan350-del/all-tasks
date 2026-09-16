const products = {
  1: "Laptop",
  2: "Phone",
  3: "Tablet"
};

const output = document.querySelector("#output");

function writeOutput(message) {
  console.log(message);
  output.textContent += `${message}\n`;
}

function getProduct(id) {
  return new Promise((resolve, reject) => {
    const product = products[id];

    if (product) {
      resolve(product);
      return;
    }

    reject("Product not found");
  });
}

function calculateShipping(weight) {
  return new Promise((resolve, reject) => {
    if (weight <= 0) {
      reject("Invalid weight");
      return;
    }

    resolve(`Shipping cost: ${weight * 5}`);
  });
}

function sendVerificationEmail(email) {
  return new Promise((resolve, reject) => {
    if (!email) {
      reject("Email is required");
      return;
    }

    writeOutput("Sending verification email...");
    setTimeout(() => {
      writeOutput("Email sent successfully");
      resolve();
    }, 1000);
  });
}

async function registerUser(name, email) {
  try {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    await sendVerificationEmail(email);
    writeOutput("User registered successfully");
  } catch (error) {
    writeOutput(`Registration error: ${error.message || error}`);
  }
}

async function getUserProfile(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();
    writeOutput(`Name: ${user.name}`);
    writeOutput(`Email: ${user.email}`);
    return user;
  } catch (error) {
    writeOutput(`Profile error: ${error.message}`);
  }
}

async function runTasks() {
  output.textContent = "";

  getProduct(2)
    .then((product) => writeOutput(product))
    .catch((error) => writeOutput(error));

  calculateShipping(10)
    .then((cost) => writeOutput(cost))
    .catch((error) => writeOutput(error));

  await registerUser("Esraa", "esraa@gmail.com");
  await getUserProfile(1);
}

window.getProduct = getProduct;
window.calculateShipping = calculateShipping;
window.sendVerificationEmail = sendVerificationEmail;
window.registerUser = registerUser;
window.getUserProfile = getUserProfile;

runTasks();
