const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
	const result = req.body.str.split('').reverse().join('')
	res.end(result)
});
app.listen(process.argv[2])
