const express = require('express');
//const bodyParser = require('body-parser');
const app = express();

app.get('/user', function (req, res) {
	res.send('hello world');
});
app.listen(3000, function () {
	console.log('Server started on port 3000');
});
