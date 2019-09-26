const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser);

app.get('/', function (req, res) {
	  res.send('Hello World!')
})

app.get('/hello', function (req, res) {
	if(req.query.nom){
		res.send(`Bonjour ${req.query.nom} !`)
	}else{
		res.send('Quel est votre nom !')	
	}
})

app.post('/chat', function (req, res) {
	res.send(` ${req.body} `)
})

app.listen(process.env.PORT || 3000, function () {
	console.log("server.js listening on port 3000!");
})


