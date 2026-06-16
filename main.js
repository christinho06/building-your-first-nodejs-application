const { generateReport } = require('./reportGenerator');

// Example data
const report1 = generateReport('Alice Martin', [15, 12, 18, 10, 14]);
const report2 = generateReport('Bob Dupont', [8, 6, 9, 7, 5]);

console.log(report1);
console.log(report2);