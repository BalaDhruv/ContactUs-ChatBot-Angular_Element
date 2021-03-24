const concat = require("concat");

(async function build() {
  const files = [
    "./dist/contact-us-chatbot/runtime.js",
    "./dist/contact-us-chatbot/polyfills.js",
    "./dist/contact-us-chatbot/main.js",
  ];
  concat(files, "./dist/ce-cu.js");
  console.info("Custom elements created successfully!");
})();
