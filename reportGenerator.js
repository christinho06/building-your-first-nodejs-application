/**
 * generateReport - generates a formatted student report
 * @param {string} name - student's name
 * @param {number[]} scores - array of scores
 * @returns {string} formatted report
 */
function generateReport(name, scores) {
  const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;
  const status = average >= 10 ? 'PASS' : 'FAIL';
  return `
=== Student Report ===
Name   : ${name}
Scores : ${scores.join(', ')}
Average: ${average.toFixed(2)}
Status : ${status}
======================`;
}

module.exports = { generateReport };