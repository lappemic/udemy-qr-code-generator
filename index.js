// Import necessary modules
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Prompt user for input using inquirer
inquirer
    .prompt([
        {
            message: 'Type in your URL:', // Prompt message
            name: 'URL', // Key for the answer
        },
    ])
    .then(answers => {
        // Generate QR code from provided URL
        const url = answers.URL; // Extract URL from answers
        var qr_svg = qr.image(url); // Create QR code image
        qr_svg.pipe(fs.createWriteStream('qr-code.png')); // Save QR code as PNG

        // Save the input URL to a file
        fs.writeFile('input.txt', url, err => {
            if (err) {
                console.error('Error saving URL to file:', err);
                throw err; // Throw error after logging
            }
            console.log('The file has been saved!'); // Confirm file save
        });
    })
    .catch(error => {
        if (error.isTtyError) {
            // Handle TTY errors, like when running in an environment without a terminal or console
            console.error(
                'Error: The prompt could not be rendered in the current environment.'
            );
        } else {
            // Handle other types of errors
            console.error('An error occurred:', error);
        }
    });
