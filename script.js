// This is a simple JavaScript file that we'll lint and test
function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

// Export for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet, add };
}
