const { greet, add } = require("./script");

// Simple test cases
console.log("Running tests...");

// Test greet function
if (greet("World") !== "Hello, World!") {
  console.error("Test failed: greet function");
} else {
  console.log("greet function passed");
}

// Test add function
if (add(2, 3) !== 5) {
  console.error("Test failed: add function");
} else {
  console.log("add function passed");
}
