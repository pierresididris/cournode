const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());// accept json data in POST requests

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
	const msg = req.body.msg
	console.log('chat message', msg)
	if (msg === 'ville') {
		res.send('Nous somme à Paris')
	} else if (msg === 'météo') {
		res.send('Il fait beau')
	} else {
		res.send(`TODO`)
	}
})

app.listen(process.env.PORT || 3000, function () {
	console.log("server.js listening on port 3000!");
})


