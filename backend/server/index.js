const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());

app.get('/party', function (req, res) {
	res.send('made it').status(200);
	return;
});

//app.post();

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
