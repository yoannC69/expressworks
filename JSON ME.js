const express = require('express');
const fs = require('fs');

const app = express()
const content = fs.readFileSync(process.argv[3])
app.get('/books', function(req, res) {
  res.json(JSON.parse(content));
})

app.listen(process.argv[2])
