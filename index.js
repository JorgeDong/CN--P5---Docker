const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  	res.send('Saludos desde express');
});


app.get('/autores', function (req, res) {
	let autores = {
		"autor1": "Luis David Gallegos Godoy",
		"autor2": "Jorge Alejandro Dong Llauger"
	};

	autores = JSON.stringify(autores); 
	res.sendStatus(200);
  	res.send(autores);
});

app.post('/suma', function (req, res) {
	let nums = req.body.nums;
	let acum = 0;
	nums.forEach(element =>{
		acum+=element;
	});

	let respuesta = {
		"respuesta": acum
	};
  	res.send(respuesta);
  	res.sendStatus(200);
});

app.post('/resta', function (req, res) {
	let total = req.body.numToSubs;
	let nums = req.body.nums;
	nums.forEach(element =>{
		total-=element;
	});

	let respuesta = {
		"respuesta": total
	};
  	res.send(respuesta);
  	res.sendStatus(200);
});

app.post('/multiplica', function (req, res) {
	let nums = req.body.nums;
	let acum = 1;
	nums.forEach(element =>{
		acum*=element;
	});

	let respuesta = {
		"respuesta": acum
	};

  	res.send(respuesta);

	//acum = JSON.stringify(acum);  	
  	res.send(acum);
  	res.sendStatus(200);
});




app.listen(3000, () => {
 	console.log("El servidor está inicializado en el puerto 3000");
});