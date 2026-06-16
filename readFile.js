const fs = require('fs');

// Read the content of message.txt synchronously
const content = fs.readFileSync('./message.txt', 'utf8');

// Print the file content to the console
console.log(content);