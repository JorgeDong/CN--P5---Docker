//Created by Luis David Gallegos Godoy & Jorge Alejandro Dong Llauger
//Date: 07/03/2021

// definimos un puerto por el cual escucharemos peticiones
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || "0.0.0.0"

const cors = require('cors')

require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
    
// configuraciones para nuestro server
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

//Manda un saludo general en la url origen
app.get('/', function (req, res) {
  	res.send('Saludos desde express');
});

//Metodo get que devuelve el nombre de los autores
app.get('/autores', function (req, res) {
	let autores = {
		"autor1": "Luis David Gallegos Godoy",
		"autor2": "Jorge Alejandro Dong Llauger"
	};

	res.send(autores);
	res.sendStatus(200);
  	
});

//Metodo post que recibe dos numeros y devuelve la suma
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

//Metodo post que recibe un numero y un arreglo de numeros que son restados del numero.
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

//Metodo post que recibe UN arreglo de nuemeros y los multiplica.
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
  	res.sendStatus(200);
});

//Metodo post que recibe un numero y un arreglo de numeros que son divididos del numero.
app.post('/divide', function (req, res) {
	let total = req.body.numToDiv;
	let nums = req.body.nums;
	nums.forEach(element =>{
		total = total / element;
	});

	let respuesta = {
		"respuesta": total
	};
  	res.send(respuesta);
  	res.sendStatus(200);
});

//Metodo post que recibe una cadena de texto con una operación y ejecuta la operación por orden de operadores de izquierda a derecha.
app.post('/free', function (req, res) {
	let operation = req.body.operation;
	let arrayDeCadenas = operation.split(" ");
	let acum = parseInt(arrayDeCadenas[0]);
	console.log(acum);

	for(let i = 1; i <= arrayDeCadenas.length; i = i + 2){
		console.log(arrayDeCadenas[i]);
		if(arrayDeCadenas[i+1] != undefined){
			let num = parseInt(arrayDeCadenas[i+1]);
			console.log(acum + arrayDeCadenas[i] + num);
			if(arrayDeCadenas[i] == '*'){
				acum = acum * num;
			} else if(arrayDeCadenas[i] == '/'){
				acum = acum / num;
			} else if(arrayDeCadenas[i] == '-'){
				acum = acum - num;
			} else { 
				acum = acum + num;
			}
			console.log(acum);
		}
	}

	let respuesta = {
		"respuesta": acum
	};

  	res.send(respuesta);
  	res.sendStatus(200);
});


app.listen(PORT,HOST, () => { console.log(`Server listening on port ${PORT} and host ${HOST}`); })