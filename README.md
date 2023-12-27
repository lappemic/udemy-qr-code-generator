# QR Code Generator

## Description

This is a simple QR Code Generator built using Node.js. It takes a URL input from the user and generates a corresponding QR code, demonstrating the application of Node.js libraries and basic input/output handling in a Node environment.

## Installation

To set up the project locally, clone this repository:

```bash
git clone https://github.com/lappemic/qr-code-generator.git
cd qr-code-generator
```

Then, install the necessary dependencies:

```bash
npm install
```

## Usage

Run the script using Node:

```javascript
node index.js
```

Follow the prompt to enter a URL, and the script will generate a QR code saved as `qr-code.png` and the URL in `input.txt`.

## Learning Outcomes

-   **Node.js Basics**: Understanding the fundamentals of Node.js for building simple applications.
-   **Working with External Libraries**: Using libraries like `inquirer` for command-line prompts and `qr-image` for generating QR codes.
-   **File I/O in Node.js**: Implementing file input and output operations using the `fs` module.
