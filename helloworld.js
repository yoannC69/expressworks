const [_node, _path, port] = process.argv;

const express = require('expressworks/Express')
const app = express()
app.get('/home', (req, res) => {
    res.end('Hello World!');
})
app.listen(port);
