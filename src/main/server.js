import express from 'express';
import cors from 'cors';
import router from '../routers/index.js'

import Response from '../helpers/response.js';

const app = express();

app.use(express.urlencoded({
	extended: true,
}));

app.use(cors());

app.use(express.json());



app.use('/', router);

 // Tratamento para caso não encontre nenhuma rota . ira retornar 404
app.use((req, res, next) => {	

	const response = new Response();

    response.success = false;
	response.message    = 'rota informada não existe';
	res.status(404).send(response)
});


const port = 3000;


app.listen(port, ()=>{

	console.log('servidor rodando na porta: ' +  port)
})