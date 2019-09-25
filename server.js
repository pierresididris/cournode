const express = require('express')
const app = express()

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

app.listen(process.env.PORT || 3000, function () {
	console.log("server.js listening on port 3000!");
})


