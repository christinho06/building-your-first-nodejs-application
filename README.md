# Building Your First Node.js Application

GoMyCode Checkpoint — Hands-on Node.js module exercises.

## Tasks

### Task 1 — Built-in Module (fs)
Reads `message.txt` using the `fs` module.
```bash
node readFile.js
```

### Task 2 — Local Module
`reportGenerator.js` exports a `generateReport(name, scores)` function.  
`main.js` imports it and prints a formatted report with average & pass/fail.
```bash
node main.js
```

### Task 3 — Third-Party Module (nodemailer)
Sends an email via Gmail SMTP.
```bash
npm install
node emailSender.js
```
